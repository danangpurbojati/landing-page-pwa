const CACHE_NAME = "burger";
const urlsToCache = [
    "/",
    "/manifest.json",
    "/nav.html",
    "/index.html",
    "/index.js",
    "/assets/pages/home.html",
    "/assets/pages/about.html",
    "/assets/pages/menu.html",
    "/assets/pages/reservation.html",
    "/assets/css/materialize.min.css",
    "/assets/css/custom.css",
    "/assets/js/materialize.min.js",
    "/assets/js/app.js",
    "/assets/js/loadNav.js",
    "/assets/js/loadPage.js",
    "/assets/js/sw-register.js",
    "/assets/images/logo-lg.png",
    "/assets/images/hamburger.png",
    "/assets/images/background-hero.png",
    "/assets/images/footer-image.png",
    "/assets/images/burder-option1.png",
    "/assets/images/burger1.jpg",
    "/assets/images/burger2.jpg",
    "/assets/images/burger3.jpg",
    "/assets/images/burger4.jpg",
    "/assets/images/burger5.jpg",
    "/assets/images/burger6.jpg",
    "/assets/images/form-background_02.png",
    "/assets/images/icon512x512.png",
    "/assets/images/icon384x384.png",
    "/assets/images/icon192x192.png",
    "/assets/images/icon152x152.png",
    "/assets/images/icon144x144.png",
    "/assets/images/icon128x128.png",
    "/assets/images/icon96x96.png",
    "/assets/images/icon72x72.png",
    "/assets/images/favicon.ico"
];
    
self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
})

self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != CACHE_NAME){	
						console.log("ServiceWorker: cache " + cacheName + " deleted");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request, {cacheName:CACHE_NAME})
		.then(function(response) {
			if(response){
				console.log("ServiceWorker: using asset from cache: ", response.url);
				return response;
			}
			
			console.log("ServiceWorker: loading asset from server: ", event.request.url);
			return fetch(event.request);
		})
	);
});

