/* eslint-disable no-useless-return */
// import { cacheController } from "./helper";

// import { precacheAndRoute } from "workbox-precaching";

// console.log("service worker here");

// self.addEventListener("message", (event) => {
//   console.log(event)
// });
// self.addEventListener("sync", (event) => {
//   console.log(event)
// });
// self.addEventListener("push", (event) => {
//   console.log(event)
// });

// self.addEventListener("install", (event) => {
//   // TODO: Caching App Shell Resource
//   console.log("service worker installed");
//   event.waitUntil(cacheController._startCache());
// });
// self.addEventListener("activate", (event) => {
//   // TODO: Delete old caches
//   console.log("Activating Service Worker ...");
//   event.waitUntil(cacheController._deleteOldCache());
// });

// self.addEventListener("fetch", (event) => {
//   if (
//     event.request.url.startsWith("chrome-extension") ||
//     event.request.url.includes("extension")
//   ) {
//     return;
//   }
//   // TODO: Add/get fetch request to/from caches
//   event.respondWith(cacheController._validateCache(event.request));
// });
