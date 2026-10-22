// db.js
import { openDB } from 'idb'
const dbPromise = await openDB('myDatabase', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('store')) {
      db.createObjectStore('store', { keyPath: 'id' })
    }
  }
})
export const saveData = async (data: any) => {
  const db = await dbPromise
  const transaction = db.transaction(['store'], 'readwrite')
  const store = transaction.objectStore('store')
  store.add(data)
}

export const getData = async () => {
  const db = await dbPromise
  const transaction = db.transaction(['store'], 'readonly')
  const store = transaction.objectStore('store')
  return store.getAll()
}

export const getAllData = async (id: string, newData: any) => {
  const db = await dbPromise
  const tx = db.transaction('my-store', 'readonly')
  const store = tx.objectStore('my-store')
  const data = await store.getAll()
  return data
}

export const updateData = async (id: string | number, data: any) => {
  const db = await dbPromise
  const transaction = db.transaction(['store'], 'readwrite')
  const store = transaction.objectStore('store')
  const request = store.get(id)
  request.then(() => {
    // debugger
    // console.log({a:1})
    store.put(data)
  })
  // const data1 = { id: 1, name: "Alice" };
  // const request = db.transaction("storeName", "readwrite").objectStore("storeName").put(data1);
  // // const request = store.get(id);
  // // store.put(id,newData);
}

export const deleteData = async (id: string) => {
  const db = await dbPromise
  const transaction = db.transaction(['store'], 'readwrite')
  const store = transaction.objectStore('store')
  store.delete(id)
}
