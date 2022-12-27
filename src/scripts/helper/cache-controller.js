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
    // check request in cache
    const response = await caches.match(request);
    // if the request is available in cache
    // return the data from cache to browser
    if (response) {
      const getData = await fetch(response);
      const cache = await caches.open(this.cache__name);
      cache.put(request, getData.clone());
      return response;
    } else {
      // get data from the server
      const getData = await fetch(response);
      if (!getData || getData.status !== 200) {
        return getData;
      }
      // save data to cache then return the data to browser
      const cache = await caches.open(this.cache__name);
      cache.put(request, getData.clone());
      return getData;
    }
  },
};
