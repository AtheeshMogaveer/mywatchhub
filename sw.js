const CACHE_NAME = "my-watch-hub-v1";
const urlsToCache = [
  "index.html",
  "anime.html",
  "movies.html",
  "series.html",
  "style.css",
  "script.js",
  "manifest.json",
  // Images
  "assets/12thfail.jfif",
  "assets/animal.jpg",
  "assets/avatar.jpg",
  "assets/brahmastra.jpg",
  "assets/demonslayer.jpg",
  "assets/dune2.jfif",
  "assets/farzi.jfif",
  "assets/fighter.jpg",
  "assets/infinitywar.jpg",
  "assets/jawan.jpg",
  "assets/jjk.jpg",
  "assets/kalki.jpg",
  "assets/kgf2.jpg",
  "assets/laapataladies.jpg",
  "assets/mirzapur3.jfif",
  "assets/oppenheimer.jfif",
  "assets/panchayat3.jfif",
  "assets/salaar.jfif",
  "assets/scam1992.jpg",
  "assets/scam2003.jfif",
  "assets/war2.jpg",
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
