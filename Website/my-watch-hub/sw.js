// A name for your cache
const CACHE_NAME = "my-watch-hub-v1";
const urlsToCache = [
  "/Website/my-watch-hub/index.html",
  "/Website/my-watch-hub/anime.html",
  "/Website/my-watch-hub/movies.html",
  "/Website/my-watch-hub/series.html",
  "/Website/my-watch-hub/style.css",
  "/Website/my-watch-hub/script.js",
  "/Website/my-watch-hub/manifest.json",
  // Images
  "/Website/my-watch-hub/assets/12thfail.jfif",
  "/Website/my-watch-hub/assets/animal.jpg",
  "/Website/my-watch-hub/assets/avatar.jpg",
  "/Website/my-watch-hub/assets/brahmastra.jpg",
  "/Website/my-watch-hub/assets/demonslayer.jpg",
  "/Website/my-watch-hub/assets/dune2.jfif",
  "/Website/my-watch-hub/assets/farzi.jfif",
  "/Website/my-watch-hub/assets/fighter.jpg",
  "/Website/my-watch-hub/assets/infinitywar.jpg",
  "/Website/my-watch-hub/assets/jawan.jpg",
  "/Website/my-watch-hub/assets/jjk.jpg",
  "/Website/my-watch-hub/assets/kalki.jpg",
  "/Website/my-watch-hub/assets/kgf2.jpg",
  "/Website/my-watch-hub/assets/laapataladies.jpg",
  "/Website/my-watch-hub/assets/mirzapur3.jfif",
  "/Website/my-watch-hub/assets/oppenheimer.jfif",
  "/Website/my-watch-hub/assets/panchayat3.jfif",
  "/Website/my-watch-hub/assets/salaar.jfif",
  "/Website/my-watch-hub/assets/scam1992.jpg",
  "/Website/my-watch-hub/assets/scam2003.jfif",
  "/Website/my-watch-hub/assets/war2.jpg",
];

// Install event: cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

// Fetch event: serve cached files if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
