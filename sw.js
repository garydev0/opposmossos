const CACHE_NAME = 'oppostest-v2';
const urlsToCache = [
    './',
    './index.html',
    './logo.png',
    './preguntas-a1.json',
    './preguntas-a2.json',
    './preguntas-a3.json',
    './preguntas-a4.json',
    './preguntas-a5.json',
    './preguntas-a6.json',
    './preguntas-a7.json',
    './preguntas-b1.json',
    './preguntas-b2.json',
    './preguntas-b3.json',
    './preguntas-b4.json',
    './preguntas-b5.json',
    './preguntas-b6.json',
    './preguntas-b7.json',
    './preguntas-b8.json'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) return caches.delete(cache);
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
        .then(response => {
            // Si hay internet, guarda la nueva versión y la muestra
            const resClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
            return response;
        })
        .catch(() => {
            // Si no hay internet, muestra la versión guardada
            return caches.match(event.request);
        })
    );
});
