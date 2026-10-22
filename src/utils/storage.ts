import { Observable, Subject, merge } from 'rxjs'
import { filter, debounceTime } from 'rxjs/operators'

//链路式接口调用，防多次加载
interface StorageApi {
  setItem(key: string, value: any): void

  getItem(key: string): any
  getItemObj(key: string): any
  removeItem(key: string): void
  onChange(target: string | Array<string>, fullmatch?: boolean): Observable<any>

  removeInnerListener(): void
  downlinkEvent(e: StorageEvent): void
  uplinkEvent(): Observable<StorageEvent>
  triggerEvent(e: StorageEvent): void

  // getId():string;
}

class StorageService implements StorageApi {
  // _id = new Date().getTime()+"";
  // getId(): string {
  //     return this._id;
  // }
  constructor() {
    const t = this
    this.trigger = function (e: any) {
      t.triggerEvent.call(t, e)
    }
    window.addEventListener('storage', this.trigger)
  }

  listener: any = { '': new Subject<any>() }

  trigger: any
  directCall = true
  uplinkSubject = new Subject<StorageEvent>()

  removeInnerListener() {
    window.removeEventListener('storage', this.trigger)
    this.directCall = false
  }
  uplinkEvent() {
    return this.uplinkSubject
  }
  downlinkEvent(e: StorageEvent): void {
    this.callListener(e)
  }
  private callListener(e: StorageEvent) {
    // console.log(this._id,e.key);
    const listener = this.listener
    listener[''].next(e)
    if (e.key) {
      //冒泡，级联事件
      let tmp = e.key
      do {
        if (listener[tmp]) {
          listener[tmp].next(e)
        }
        tmp = tmp.substring(0, tmp.lastIndexOf('/'))
      } while (tmp.lastIndexOf('/') > -1)
    }
  }
  triggerEvent(e: StorageEvent) {
    if (this.directCall) {
      this.callListener(e)
    }
    this.uplinkSubject.next(e)
  }

  setItem(key: string, value: any) {
    let v = this.getItem(key)

    let equal = false
    if (typeof value == 'string') {
      window.localStorage.setItem(key, value)
      equal = v == value
    } else {
      const str = JSON.stringify(value)
      equal = v == str
      window.localStorage.setItem(key, str)
      v = v == null ? null : JSON.parse(v)
    }
    //页面调用得手动触发
    if (!equal) {
      this.triggerEvent(
        new StorageEvent('storage', {
          key: key,
          newValue: value,
          oldValue: v,
          storageArea: window.localStorage,
          url: location.href
        })
      )
    }
  }
  getItem(key: string) {
    return window.localStorage.getItem(key)
  }
  getItemObj(key: string) {
    const o = this.getItem(key)
    if (o) {
      try {
        return JSON.parse(o)
      } catch (e) {
        //do nothing just return
      }
    }
    return null
  }

  removeItem(key: string) {
    return window.localStorage.removeItem(key)
  }
  onChange(target: string | Array<string>, fullmatch = false): Observable<StorageEvent> {
    const generalOb = (t: any) => {
      if (!this.listener[t]) {
        this.listener[t] = new Subject<any>()
      }
      if (fullmatch) {
        //完全匹配，target必须是自己才触发
        return this.listener[t].pipe(filter((e: any) => e.key == t))
      } else {
        //只要涉及到，就修改
        return this.listener[t]
      }
    }
    if (!target) {
      return this.listener['']
    }
    if (typeof target == 'string') {
      //创建subject
      return generalOb(target)
    } else {
      const list = target.map((k) => {
        return generalOb(k)
      })
      //延迟300毫秒，有多重变化只触发一次
      return merge(list).pipe(debounceTime(300))
    }
  }
}

class _StorageFactory {
  private storage: StorageApi | null = null

  private history: any[] = []

  init(_storage: StorageApi) {
    if (this.storage == _storage) {
      return
    }
    if (this.history.indexOf(_storage) >= 0) {
      throw 'loop storage service'
    }
    if (this.storage) {
      const lastStorage = this.storage
      // console.log("has storage begin link",this.storage.getId(),_storage.getId());
      this.storage.removeInnerListener()
      this.storage.uplinkEvent().subscribe((e: StorageEvent) => {
        _storage.triggerEvent(e)
      })
      _storage.onChange('').subscribe((e: StorageEvent) => {
        lastStorage.downlinkEvent(e)
      })
      this.history.push(this.storage)
    }
    this.storage = _storage
  }
  /**
 * 
 * 使用方法
    componentWillMount(){
        //防止重复订阅
        this.subscriber.a = this.subscriber.a || Storage.onChange("/url",true).subscribe(r=>console.log("子项目，全匹配/url",r))
        this.subscriber.b = this.subscriber.b ||  Storage.onChange("/url").subscribe(r=>console.log("子项目，路径匹配/url",r))
        this.subscriber.c = this.subscriber.c || Storage.onChange("/url/item").subscribe(r=>console.log("子项目，匹配/url/item",r))
    }
    componentWillUnmount(){
        //取消订阅
        this.subscriber.a?.unsubscribe();
        this.subscriber.a = null;
        this.subscriber.b?.unsubscribe();
        this.subscriber.b = null;
        this.subscriber.c?.unsubscribe();
        this.subscriber.c = null;
    }
 * @returns 
 */
  getStorage(): StorageApi {
    if (!this.storage) {
      this.storage = new StorageService()
    }
    return this.storage
  }
}

const StorageFactory = new _StorageFactory()

export default StorageFactory
export type { StorageApi }
