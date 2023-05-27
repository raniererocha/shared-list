let request: IDBOpenDBRequest
let db: IDBDatabase
let version = 1

export interface ListData {
  id: string
  title: string
  data: Array<{ id: number; label: string; value: boolean }>
}

export enum Stores {
  // eslint-disable-next-line no-unused-vars
  Lists = 'lists',
}

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open('list-db')

    request.onupgradeneeded = () => {
      db = request.result

      if (!db.objectStoreNames.contains(Stores.Lists)) {
        console.log('Criando o store de listas')
        db.createObjectStore(Stores.Lists, { keyPath: 'id' })
      }
    }

    request.onsuccess = () => {
      db = request.result
      version = db.version
      console.log('request.onsuccess - initDB', version)
      resolve(true)
    }

    request.onerror = () => {
      resolve(false)
    }
  })
}

export const addData = <T>(
  storeName: string,
  data: T,
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    request = indexedDB.open('list-db', version)

    request.onsuccess = () => {
      console.log('request.onsuccess - addData', data)
      db = request.result
      const tx = db.transaction(storeName, 'readwrite')
      const store = tx.objectStore(storeName)
      store.add(data)
      resolve(data)
    }

    request.onerror = () => {
      const error = request.error?.message
      if (error) {
        resolve(error)
      } else {
        resolve('Erro desconhecido')
      }
    }
  })
}

export const getStoreData = <T>(storeName: Stores): Promise<T[]> => {
  return new Promise((resolve) => {
    request = indexedDB.open('list-db')

    request.onsuccess = () => {
      console.log('request.onsuccess - getAllData')
      db = request.result

      const tx = db.transaction(storeName, 'readonly')
      const store = tx.objectStore(storeName)
      const res = store.getAll()
      res.onsuccess = () => {
        resolve(res.result)
      }
    }
  })
}
