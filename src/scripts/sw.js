import { cacheController } from "./helper";

self.addEventListener("install", (event) => {
  console.log("service worker installed");
  // TODO: Caching App Shell Resource
  event.waitUntil(cacheController._startCache());
});
self.addEventListener("activate", (event) => {
  console.log("Activating Service Worker ...");
  event.waitUntil(cacheController._deleteOldCache());
  // TODO: Delete old caches
});

self.addEventListener("fetch", (event) => {
  // console.log(event.request.url);
  // cacheController._validateCache(event.request);
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      if (!cacheRes) {
        console.log("cannot find", event.request);
      }
      return cacheRes || fetch(event.request).then(response => {
        caches.open(cacheController.cache__name).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        })
      });
    })
  );
  // TODO: Add/get fetch request to/from caches
});
