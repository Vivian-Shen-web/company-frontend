// src/db.ts
import { openDB } from 'idb'

const dbName = 'myDatabase'
const dbVersion = 1
const storeName = 'myObjectStore'

export const createDB = async () => {
  const db = await openDB(dbName, dbVersion, {
    upgrade(db) {
      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true })
    }
  })
  return db
}
