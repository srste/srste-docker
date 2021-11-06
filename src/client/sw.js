var CACHE_NAME = 'apwa-site';
var urlsToCache = [
  '/',
  '/src/index.css',
  '/thirdpartylib/material-icons.css',
  '/thirdpartylib/bootstrap.min.css',
  '/thirdpartylib/jquery.min.js',
  '/thirdpartylib/jquery-ui.min.js',
  '/thirdpartylib/underscore.js',
  '/thirdpartylib/bootstrap.min.js',
  '/thirdpartylib/quill.css',
  '/thirdpartylib/quill.js', 
  '/jspm.config.js',
  '/thirdpartylib/system.js',
  '/build/shell.js',
  '/load/bundle/all.js'
];


var installServiceWorker = function() {
  return caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    });
};

var handleInstall = function(event){
  event.waitUntil(installServiceWorker());
};

self.addEventListener('install',handleInstall);

var handleFetch = function(event){ 
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
};

self.addEventListener('fetch',handleFetch);
