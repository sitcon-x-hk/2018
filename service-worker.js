"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["1.2ed3d2f13ba71b28a41f.js","9970138a7df87e8e1d75c87f48003fad"],["10.4dc129cef16fa206b2b0.js","cd0cab6c52075db12d83837da5160e7e"],["11.ee7281eb9fba38b992c4.js","ca2263e2aabc7570be3dda6133187a7f"],["12.72de5fede426c6756d98.js","0ff677969e2f53c4a0940736ff5048ea"],["13.741faa0672dfab6a9761.js","23bb2b26aa91686217780eb1a0231f58"],["14.c90836aae91c5dc585e6.js","c6262a366955e01e062918c2e8568fb8"],["15.54e522b870d723bff9c6.js","4a265fba5a0e7f10f876b454eb07532e"],["16.7f646d1f89c09d0ffd93.js","85887718d73307c3b05ce483d410cdb4"],["17.88f4a870999eeb3e3d9c.js","8f6922ada735ed3f5f5704bb0f469cbc"],["18.4335b23f986c49f5d7f8.js","54773985a06633e69f7473cee4e355e6"],["19.c4793a2a9e5fe9c58204.js","c26998f0144223f752bd25e0359a214b"],["2.10b136d2dfb85f88bac1.js","0852b9187bc6f5cad8d90de512db9f18"],["21.6fb2a16a4a5c4c41c25d.js","8975b10bb6b5fcd0b7e3362d94de95ab"],["3.d6bcefd5a6879f32a467.js","9938fd38d53ea2565fd5f62d2ad8da3a"],["4.249a11f8990f5031d750.js","de92cc68b672b530efc68b47884e9d4b"],["5.8e1e716296e696ce9187.js","41ffaf5748c7443ac80261dcb4521d0e"],["6.e431a958d73439864b3c.js","2f72125d4aa05099b2ddcd4658fa7ca1"],["7.f072da766a4eb6ba8d9e.js","11fd232627ac08b9f91064ce1e1ef6fe"],["8.4044dc0cfa5ee6d16104.js","f47d663f1f4143e90c46a563ed285e26"],["9.9f2266d19f9e3b57523f.js","2aa1ae6d9e328d778ed19251af727092"],["app.16d4698dc4b30465e6fa0366b4db060d.css","58ab9a77864e857c506c6b63dfe2fe1a"],["app.e27399593217ca437abe.js","0450d2e1effd4dde1bfa5c9bfe7b5370"],["manifest.8779e15de8ea67974c4f.js","e4bb572b337de8cf533e2af03b48c0f6"],["vendor.1440b7b9f9c7ad3f512a.js","31839f9e0c53e5e772f6ad7b4f2b368d"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,n,!1);return[t.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});