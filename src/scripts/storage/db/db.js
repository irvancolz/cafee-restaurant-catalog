import { openDB } from "idb";
const DB_CONFIG = {
  storeName: "favourite-resto",
  storeVersion: 1,
};
openDB(DB_CONFIG.storeName, DB_CONFIG.storeVersion, {
  upgrade(db) {
    db.createObjectStore(DB_CONFIG.storeName);
    console.log("store created", DB_CONFIG.storeName);
  },
});

async function addDataToDb(data) {
  if (!data) {
    return;
  }
  (await openDB(DB_CONFIG.storeName))
    .transaction(DB_CONFIG.storeName, "readwrite")
    .objectStore(DB_CONFIG.storeName)
    .add(data, data.id);
  console.log("data added!");
}

async function getData(id) {
  const response = (await openDB(DB_CONFIG.storeName))
    .transaction(DB_CONFIG.storeName, "readonly")
    .objectStore(DB_CONFIG.storeName)
    .get(id);
  return response;
}

async function getDataList() {
  const response = (await openDB(DB_CONFIG.storeName))
    .transaction(DB_CONFIG.storeName)
    .objectStore(DB_CONFIG.storeName)
    .getAll();
  return response;
}

async function deleteDataFromDb(id) {
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
