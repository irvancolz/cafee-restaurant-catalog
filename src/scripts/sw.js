import { cacheController } from "./helper";

self.addEventListener("install", (event) => {
  // TODO: Caching App Shell Resource
  console.log("service worker installed");
  caches.delete(cacheController.cache__name);
  // event.waitUntil(cacheController._startCache());
});
self.addEventListener("activate", (event) => {
  // TODO: Delete old caches
  console.log("Activating Service Worker ...");
  event.waitUntil(cacheController._deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  // event.respondWith(
  //   // cacheController._validateCache(event.request)
  // );
  // TODO: Add/get fetch request to/from caches
});
