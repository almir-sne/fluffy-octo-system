"use strict";var precacheConfig=[["/fluffy-octo-system/index.html","1a2cb63883a904595e64c6874e5a17b0"],["/fluffy-octo-system/static/css/main.65e9368f.css","7511b94ea9d56ecd59eceaead9095944"],["/fluffy-octo-system/static/js/main.bafe63c0.js","c6f4ed6bea720be8d62f0001a7ef6e6b"],["/fluffy-octo-system/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/fluffy-octo-system/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/fluffy-octo-system/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fluffy-octo-system/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/fluffy-octo-system/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/fluffy-octo-system/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/fluffy-octo-system/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/fluffy-octo-system/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fluffy-octo-system/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/fluffy-octo-system/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fluffy-octo-system/static/media/loading.1292ec24.svg","1292ec240acfab07a8f0c67d7dbffc2b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var s="/fluffy-octo-system/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});