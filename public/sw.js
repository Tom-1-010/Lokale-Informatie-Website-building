// Kill-switch: de oude site registreerde een cache-first service worker
// waardoor bezoekers eeuwig de oude versie zagen. Deze versie ruimt alle
// caches op, verwijdert zichzelf en laadt open tabbladen opnieuw.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      })
  );
});
