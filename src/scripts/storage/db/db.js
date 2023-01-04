import { openDB } from "idb";
const DB_CONFIG = {
  storeName: "favourite-resto",
  storeVersion: 1,
};
// const indexedDB = window.indexedDB;
// const db = indexedDB.open(DB_CONFIG.storeName, 1);

openDB(DB_CONFIG.storeName, DB_CONFIG.storeVersion, {
  upgrade(db) {
    db.createObjectStore(DB_CONFIG.storeName);
    console.log("store created", DB_CONFIG.storeName);
  },
});

// db.onerror = (e) => {
//   console.log("an error has occured");
//   console.log(e);
// };

// db.onupgradeneeded = (e) => {
//   const server = db.result;
//   server.createObjectStore(DB_CONFIG.storeName, { keyPath: "id" });
// };

// db.onsuccess = (e) => {};

async function addDataToDb(data) {
  // const result = db.result;
  // const transaction = result.transaction("favourite-resto", "readwrite");
  // const store = transaction.objectStore("favourite-resto");

  // store.put({
  //   ...data,
  // });
  (await openDB(DB_CONFIG.storeName))
    .transaction(DB_CONFIG.storeName, "readwrite")
    .objectStore(DB_CONFIG.storeName)
    .add(data, data.id);
  console.log("data added!");
}

async function getData(id) {
  // const result = db.result;
  // const transaction = result.transaction("favourite-resto", "readonly");
  // const store = transaction.objectStore("favourite-resto");

  // const response = store.get(id);
  const response = (await openDB(DB_CONFIG.storeName))
    .transaction(DB_CONFIG.storeName, "readonly")
    .objectStore(DB_CONFIG.storeName)
    .get(id);
  return response;
}

async function getDataList() {
  // const result = db.result;
  // const transaction = result.transaction("favourite-resto", "readonly");
  // const store = transaction.objectStore("favourite-resto");
  // const response = store.getAll();
  // return response;
  const response = (await openDB(DB_CONFIG.storeName))
    .transaction(DB_CONFIG.storeName)
    .objectStore(DB_CONFIG.storeName)
    .getAll();
  return response;
}

async function deleteDataFromDb(id) {
  // const result = db.result;
  // const transaction = result.transaction("favourite-resto", "readwrite");
  // const store = transaction.objectStore("favourite-resto");
  // store.delete(id);
  (await openDB(DB_CONFIG.storeName))
    .transaction(DB_CONFIG.storeName, "readwrite")
    .objectStore(DB_CONFIG.storeName)
    .delete(id);
  console.log("data deleted!");
}

export function addToFavourite(resto) {
  addDataToDb(resto);
}

export function deleteFromFavourite(id) {
  deleteDataFromDb(id);
}

export function getRestoFavouriteRegsistry(id) {
  return getData(id);
}

export function getRestoFavouriteList() {
  return getDataList();
}
