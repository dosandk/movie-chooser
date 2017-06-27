const sw = {
  init() {
    self.addEventListener('install', this.onInstall);
    self.addEventListener('activate', this.onActivate);
    self.addEventListener('fetch', this.onFetch);
  },
  onInstall() {
    console.error('onInstall');
    // if (process.env.NODE_ENV === 'production') {
    //   caches.open(CACHE_VERSION).then(cache => {
    //     return cache.addAll(CACHE_FIRST);
    //   });
    //   return self.skipWaiting();
    // }

    return self.skipWaiting();
  },
  // deleteCache(cacheNames) {
  //   return Promise.all(
  //     cacheNames
  //       .filter(cacheName => cacheName !== CACHE_VERSION)
  //       .map(cacheName => {
  //         return caches.delete(cacheName);
  //       })
  //   );
  // },
  onActivate(event) {
    console.error('onActivate', event);
    // event.waitUntil(
    //   caches.keys()
    //     .then(cacheNames => sw.deleteCache(cacheNames))
    //     .then(() => self.clients.claim())
    // );
  },
  // isRoute(request) {
  //   const { host } = new URL(request.url);
  //   const { host: origin } = new URL(location.origin);
  //   const [contentType] = request.headers.get('accept').split(',');
  //
  //   return contentType === 'text/html' && host === origin;
  // },
  onFetch(event) {
    console.error('onFetch', event);
    // Redirect static routes
    // if (sw.isRoute(event.request) && process.env.NODE_ENV === 'production') {
    //   return event.respondWith(caches.match('/'));
    // }
    //
    // event.respondWith(
    //   caches.match(event.request).then(response => {
    //     return response || fetch(event.request);
    //   })
    // );
  }
};

/* Initialize service worker */
sw.init();
