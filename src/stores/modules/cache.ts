import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCacheStore = <T>(name: string, producer: (id: string) => Promise<T>) => {
  return defineStore(name, () => {
    const expire = 10 * 60 * 1000 //暂定10分钟
    const data = reactive<Record<string, T>>({})
    const promises: Record<string, Promise<T> | undefined> = {}
    const expires: Record<string, number> = {}

    const setData = (id: string, _data: T) => {
      data[id] = _data
      expires[id] = new Date().getTime() + expire
    }
    const get = (id: string): Promise<T> => {
      if (Date.now() > (expires[id] || 0)) {
        //reload
      } else if (data[id]) {
        return Promise.resolve(data[id])
      }
      if (undefined == promises[id]) {
        promises[id] = new Promise<T>((res, ret) => {
          producer(id).then(
            (data) => {
              setData(id, data)
              res(data)
              promises[id] = undefined
            },
            (error) => {
              promises[id] = undefined
              ret(error)
            }
          )
        })
      }
      return promises[id] as Promise<T>
    }

    return {
      data,
      get
    }
  })
}
