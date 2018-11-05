/*
* @Author: xzhih
* @Date:   2018-11-05 00:13:37
* @Last Modified by:   xzhih
* @Last Modified time: 2018-11-06 02:52:34
*/

var CACHE_NAME = "'+(+new Date())+'";
var urlsToCache = [
'/',
'/css/allinone.min.css',
'/js/lazyload.js',
'/js/sw-local-search.min.js',
'/js/post.min.js',
'/searchData.json'
];

// 缓存
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
		);
});

// 缓存更新
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
				);
		})
		);
});

// 捕获请求并返回缓存数据
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
