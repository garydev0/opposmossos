const CACHE_NAME = 'oppostest-v1';
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
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});
