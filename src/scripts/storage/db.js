const DB_CONFIG = {
  storeName: "favourite-resto",
};
const indexedDB = window.indexedDB;
const db = indexedDB.open(DB_CONFIG.storeName, 1);

db.onerror = (e) => {
  console.log("an error has occured");
  console.log(e);
};

db.onupgradeneeded = (e) => {
  const server = db.result;
  server.createObjectStore(DB_CONFIG.storeName, { keyPath: "id" });
  console.log("data is upgraded");
};

db.onsuccess = (e) => {
  console.log("data is ready");
};

function addDataToDb(data) {
  const result = db.result;
  const transaction = result.transaction("favourite-resto", "readwrite");
  const store = transaction.objectStore("favourite-resto");

  store.put({
    ...data,
  });
  console.log("data added!");
}

function getData(id) {
  const result = db.result;
  const transaction = result.transaction("favourite-resto", "readonly");
  const store = transaction.objectStore("favourite-resto");

  const response = store.get(id);
  return response;
}

function deleteDataFromDb(id) {
  const result = db.result;
  const transaction = result.transaction("favourite-resto", "readwrite");
  const store = transaction.objectStore("favourite-resto");

  store.delete(id);
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
