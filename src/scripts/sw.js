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
  // console.log("request for", event.request.url);
  // cacheController._validateCache(event.request);
  event.respondWith(
    cacheController._validateCache(event.request)
  );
  // TODO: Add/get fetch request to/from caches
});
