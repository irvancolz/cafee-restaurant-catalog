const DB_CONFIG = {
  storeName: "favourite-resto",
};

const db = indexedDB.open(DB_CONFIG.storeName, 1);

db.onerror = (e) => {
  console.log("an error has occured");
  console.log(e);
};

db.onupgradeneeded = (e) => {
  const server = db.result;
  server.createObjectStore(DB_CONFIG.storeName, { keyPath: "id" });
};

function addDataToDb(data) {
  let result;
  db.onsuccess = async () => {
    result = await db.result;
  }
  const transaction = result.transaction("favourite-resto", "readwrite");
  const store = transaction.objectStore("favourite-resto");

  store.put({
    ...data,
  });
}

function getData(id) {
  let result;
  db.onsuccess = async () => {
    result = await db.result;
  }
  const transaction = result.transaction("favourite-resto", "readonly");
  const store = transaction.objectStore("favourite-resto");

  const response = store.get(id);
  return response;
}

function getDataList() {
  let result;
  db.onsuccess = async () => {
    result = await db.result;
  }
  const transaction = result.transaction("favourite-resto", "readonly");
  const store = transaction.objectStore("favourite-resto");

  const response = store.getAll();
  return response;
}

function deleteDataFromDb(id) {
  let result;
  db.onsuccess = async () => {
    result = await db.result;
  }
  const transaction = result.transaction("favourite-resto", "readwrite");
  const store = transaction.objectStore("favourite-resto");

  store.delete(id);
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
