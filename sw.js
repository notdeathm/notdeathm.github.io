const CACHE_PREFIX = 'notdeath-portfolio-';
const CACHE_NAME = `${CACHE_PREFIX}v9.0.0`;
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/icon.png'
];
const CACHEABLE_PATHS = new Set(APP_SHELL);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith(CACHE_PREFIX) && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Leave cross-origin, non-GET, and non-app-shell requests to the browser.
  if (request.method !== 'GET' || url.origin !== self.location.origin || !CACHEABLE_PATHS.has(url.pathname)) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response.ok || response.type !== 'basic') return response;

        const cacheUpdate = caches.open(CACHE_NAME)
          .then((cache) => cache.put(request, response.clone()));
        event.waitUntil(cacheUpdate.catch((error) => {
          console.warn('[Service Worker] Could not update the app-shell cache:', error);
        }));

        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request, { ignoreSearch: true });
        return cached || Response.error();
      })
  );
});
