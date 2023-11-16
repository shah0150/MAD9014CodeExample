self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/main.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        cache.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});