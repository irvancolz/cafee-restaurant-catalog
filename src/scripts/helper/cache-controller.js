const AssetToBeCached = [
  "app.bundle.js",
  "sw.bundle.js",
  "/",
  "index.html",
  "app.webmanifest",
  "/images/Cafee-footer-logo.png",
  "/images/Cafee-logo.png",
  "/images/manifest-icons-small.png",
  "/images/manifest-icons-large.png",
  "/images/profile-picture.png",
  "/images/heros/hero-image_3.webp",
];

export const cacheController = {
  cache__name: "cafee-cache-v1",

  _startCache() {
    if ("caches" in self) {
      console.log("cache ready");
    }
    caches.open(this.cache__name).then((cache) => {
      cache.addAll(AssetToBeCached);
    });
  },

  _deleteOldCache() {
    caches.keys().then((cache) => {
      cache
        .filter((key) => key !== this.cache__name)
        .map((key) => caches.delete(key));
    });
    console.log("old cache deleted");
  },

  async _validateCache(request) {
    const opt = {
      mode: request.mode,
      cache: "no-cache",
    };
    if (!request.url.startsWith(location.origin)) {
      opt.mode = "cors";
      opt.credentials = "omit";
    }
    const response = await caches.match(request);
    return (
      response ||
      Promise.resolve().then(() => {
        return fetch(request, opt).then((fetchRes) => {
          return caches.open(this.cache__name).then((cache) => {
            cache.put(request, fetchRes.clone());
            return fetchRes;
          });
        });
      })
    );
  },
};
