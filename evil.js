self.addEventListener("install", event => {
    console.log("☠ Service Worker yüklendi");
    self.skipWaiting(); // hemen aktifleşsin
});

self.addEventListener("activate", event => {
    console.log("☠ Service Worker aktif");
    return self.clients.claim(); // tüm clientlara bulaş
});

self.addEventListener("fetch", event => {
    console.log("☠ Kullanıcı bir şey fetch etti:", event.request.url);

    // İsteği değiştirebilirsin veya loglayabilirsin
    // event.respondWith(fetch(event.request));
});
