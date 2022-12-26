const AssetToBeCached = [
  "/",
  "/images/Cafee-footer-logo.png",
  "/images/Cafee-logo.png",
  "/images/manifest-icons-small.png",
  "/images/manifest-icons-large.png",
  "/images/profile-picture.png",
  "/images/heros/hero-image_3.webp",
  "/images/Star 1.svg",
  "/images/Arrow 1.svg",
  "/index.html",
  "app.bundle.js",
  "app.webmanifest",
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
    const cacheList = await caches.match(request);
    if (cacheList) {
      this._fetchContent(request);
      return cacheList;
    }
    this._fetchContent(request);
    return cacheList;
  },

  async _fetchContent(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    const cache = await caches.open(this.cache__name);
    cache.put(request, response.clone());
    return response;
  },
};
