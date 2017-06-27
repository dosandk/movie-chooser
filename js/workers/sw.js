const CACHE_VERSION = `v${process.env.CACHE_VERSION || Date.now()}`;

/* Service Worker */
const CACHE_FIRST = [
  '/',
  'manifest.webmanifest',

  /* Scripts */
  '/js/main.js',
  '/js/config.js',
  '/js/vendors.js',
  '/ruleEngine.worker.js',
  '/js/logInfoEdit.js',
  '/js/inspection.js',
  '/js/dashboard.js',
  '/js/selectPeriod.js',
  '/js/reports.js',
  '/js/drivingMode.js',
  '/js/defects.js',
  '/js/inspections.js',
  '/js/logDetails.js',
  '/js/log.js',
  '/js/addStatus.js',
  '/js/remarkAdd.js',
  '/js/remarkEdit.js',
  '/js/suggested.js',
  '/js/logs.js',
  '/js/device.js',
  '/js/carrier.js',
  '/js/driverProfile.js',
  '/js/alerts.js',
  '/js/support.js',
  '/js/signup.js',
  '/js/signin.js',
  '/js/logInformation.js',
  '/js/registered.js',
  '/js/systemInfo.js',
  '/js/settings.js',
  '/js/privacy.js',
  '/js/agreement.js',
  '/js/app.js',
  '/js/auth.js',

  /* Fonts */
  '/fonts/RopaSans-Regular-latin-ext.woff2',
  '/fonts/RopaSans-Regular-latin.woff2',
  '/fonts/Roboto-Regular-cyrillic-ext.woff2',
  '/fonts/Roboto-Regular-cyrillic.woff2',
  '/fonts/Roboto-greek-ext.woff2',
  '/fonts/Roboto-Regular-greek.woff2',
  '/fonts/Roboto-vietnamese.woff2',
  '/fonts/Roboto-latin-ext.woff2',
  '/fonts/Roboto-latin.woff2',
  '/fonts/Material-icons.woff2',

  /* Images */
  '/img/BL_Sprite_common.svg',
  '/img/arrow-left.png',
  '/img/close.png',
  '/img/logo-with-inscription.svg',
  '/img/menu.png',
  '/img/dots-vertical.png',
  '/img/magnify-minus.png',
  '/img/pencil.png',
  '/img/edit.png',
  '/img/magnify-plus.png'
];

const sw = {
  init() {
    self.addEventListener('install', this.onInstall);
    self.addEventListener('activate', this.onActivate);
    self.addEventListener('fetch', this.onFetch);
  },
  onInstall() {
    if (process.env.NODE_ENV === 'production') {
      caches.open(CACHE_VERSION).then(cache => {
        return cache.addAll(CACHE_FIRST);
      });
      return self.skipWaiting();
    }

    return self.skipWaiting();
  },
  deleteCache(cacheNames) {
    return Promise.all(
      cacheNames
        .filter(cacheName => cacheName !== CACHE_VERSION)
        .map(cacheName => {
          return caches.delete(cacheName);
        })
    );
  },
  onActivate(event) {
    event.waitUntil(
      caches.keys()
        .then(cacheNames => sw.deleteCache(cacheNames))
        .then(() => self.clients.claim())
    );
  },
  isRoute(request) {
    const { host } = new URL(request.url);
    const { host: origin } = new URL(location.origin);
    const [contentType] = request.headers.get('accept').split(',');

    return contentType === 'text/html' && host === origin;
  },
  onFetch(event) {
    // Redirect static routes
    if (sw.isRoute(event.request) && process.env.NODE_ENV === 'production') {
      return event.respondWith(caches.match('/'));
    }

    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
};

/* Initialize service worker */
sw.init();
