/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["images/3cfe0444c34a4c1798ebccaabd7f75e8.jpeg","c80e018f320a84352bb355976de1292f"],["images/4971fa26fa2b41979396047b48af5cf3.jpeg","cb2256036d934dc480d0a12dd8c14e62"],["images/6413d6a4ca1a488a85c4016bf58b04a5.jpeg","a669d6bcf0077f903c96de9f494adad7"],["images/6e1c16018a4e437ba3c8f931038e0a91.jpeg","a5701c93a493aa4fc199ec36493b23ea"],["images/7b1c1f18c1a34cc69ec0d9b2328a4ec5.jpeg","6657dfc94e572d8bfe68e54225ce376c"],["images/91d624b8d9d94ef09b612ebef7140a3a.jpeg","c560359e2db162c1cfba8a3f4d1d228b"],["images/L462_17_EXT_LOC93_07_desktop_1600x900_305-304360_1600x900.jpg","c58f77328f751cb47437b2423a55eb0e"],["images/L550-Q3-KV-1600-x-900_305-275201_1600x900.jpg","9c5469db31b315fdd319eaa5873e030d"],["images/L560_18MY_318_GLHD_DX_Device-Desktop_1600x900_295-292857_1600x900.jpg","999481484e339361273f96ed0448cd73"],["images/README.md","3a51e802f687077fb7a67867cc443942"],["images/a7eb4cdc58154c73bb2ad4021b56b5a4.jpeg","ccf190e04d1b795103243de0ee16c401"],["images/b4a7c48fce2a4ca9a272e82da91bd7d2.jpeg","45158c0e4c0ebe029855133d9d713d01"],["images/bd3499dc271e47d18d540337a226adf7.jpeg","e16d6c9bb0e16e9798e2bcdadabd7735"],["images/cb657f5b1ff5403494617c2e4b3c1c99.jpeg","a3d134d28aaf396732d95d7dc2ab9efb"],["images/demo.jpg","cdd6dc1453729a91307b6f393bdb270e"],["images/e62c90e9a55a45cea9b5230fced99536.jpeg","fa364929031534b81a1809ab1f880115"],["images/ec8c568a30404645b388c573b6fd3198.jpeg","6be6b601bcffb79d1578a0f19a8e9b6e"],["images/edd0e74e0a4540ceb0830362cf43d9f9.jpeg","e196ac8083e2e7428d3a449422ff37b8"],["images/edeb4904110b4c3e9011ed009b6cc157.jpeg","139ce16d2f8d31e4d598bfda533a3db8"],["images/ex-discovery-nsd.jpg","fa44b61a0548e27cd679945e0f100d71"],["images/ex-discovery.jpg","62a5a416a7319f13502803dd3634f672"],["images/ex-huzhou.jpg","82dba9e267fda2b36f59394bdac3c30f"],["images/ex-range-velar.jpg","d24e5e9a250cb7248e385f9b3a4667aa"],["images/icons/ic_chevron_left_black_24px.svg","1676bdb5c859dcec1975e5c643e1d327"],["images/icons/ic_chevron_right_black_24px.svg","ea722354fffe9ec3ea096be8212e38a5"],["images/icons/ic_close_black_24px.svg","113c01ca2da612451ec831f54c1d662f"],["images/icons/ic_menu_black_24px.svg","5328003b66db913b085637d02aa813a3"],["images/icons/ic_search_black_24px.svg","86a7ebf187703467840d6288d8d060ee"],["images/land-rover-discovery-680x450.jpg","e7cffebd3c46f25486da3530594142e8"],["images/land-rover-discovery-sport-680x450.jpg","3f9e4f970fc30b4506da3dba8d108240"],["images/logo.jpeg","0932ab535709c3e1630029194231c1e8"],["images/logo.png","334773d69eac290579602c51aa4e10be"],["images/range-rover-680x450.jpg","a9e750484c9f09cd4aa55f431820717f"],["images/range-rover-classic-1970-1600x900.jpg","d7e8d2f89dae07e543e1b97e09b763c7"],["images/range-rover-evoque-680x450.jpg","5d08bb3d316b399f926fb7c80fc6b3bd"],["images/range-rover-velar-680x450.jpg","c5d8e8dcfa88f4446fe57f5ebf506358"],["images/ranger-rover-sport-680x450.jpg","16a1a6936ca3efa0fa19e2c3ff03ae11"],["images/velar/EXT_GAL_10_L560_18MY_303_GLHD_DX_Device-Desktop_1820x1023_305-350204_1820x1023.jpg","1ac42d624ecc9b553f7208723632a2bf"],["images/velar/EXT_GAL_1_L560_18MY_242_GLHD_Device-Desktop_1820x1023_305-323968_1820x1023.jpg","cf732f766720407fca01a5a550dbd9fd"],["images/velar/EXT_GAL_2_L560_18MY_256_GLHD_DX_Device-Desktop_1820x1023_305-323971_1820x1023.jpg","8c1e63aad0e97caa159fcfd97124141c"],["images/velar/EXT_GAL_3_L560_18MY_316_GLHD_MARBLE_Device-Desktop_1820x1023_305-323972_1820x1023.jpg","1d5ef69f73391d6841f3268cc0c045be"],["images/velar/EXT_GAL_4_L560_18MY_460_GLHD_NIGHT_DX_Device-Desktop_1820x1023_305-323975_1820x1023.jpg","a55c53f8ef623d15b6a97e214e1ee4b8"],["images/velar/EXT_GAL_5_L560_18MY_278_GLHD_DX_Device-Desktop_1820x1023_305-323976_1820x1023.jpg","587da82a1177a2cc2ac8852693b809a2"],["images/velar/EXT_GAL_6_L560_18MY_274_GLHD_Device-Desktop_1820x1023_305-323977_1820x1023.jpg","b7fcd0a277cc95537433a5b8db3f23cc"],["images/velar/EXT_GAL_7_L560_18MY_300_GLHD_DX_Device-Desktop_1820x1023_305-323978_1820x1023.jpg","7f0097fc06064396453589b4253b57e5"],["images/velar/EXT_GAL_8_L560_18MY_434_GLHD_DX_Device-Desktop_1820x1023_305-323980_1820x1023.jpg","cf5142ea44efddb1c6b468f48d9d9906"],["images/velar/EXT_GAL_9_L560_18MY_304_GLHD_DX_Device-Desktop_1820x1023_305-350203_1820x1023.jpg","d11b99f81d01ae9ae6e8951dcd6dc407"],["images/velar/INT_GAL_10_L560_18MY_490_GLHD_Device-Desktop_1820x1023_305-350231_1820x1023.jpg","777b605fa9b968e577aa900fd74fb522"],["images/velar/INT_GAL_1_L560_18MY_271_GLHD_Device-Desktop_1820x1023 2_305-323982_1820x1023.jpg","16f71fa0e935e47a07c3b5d0854ce3ef"],["images/velar/INT_GAL_2_L560_18MY_281_GLHD_Device-Desktop_1820x1023_305-323983_1820x1023.jpg","4b98a0d78a6850ae425b4f6068471ec8"],["images/velar/INT_GAL_3_L560_18MY_019_GLHD_Device-Desktop_1820x1023_305-323984_1820x1023.jpg","cf5e6c0b69e7bd6d19b6c0c042dbb3ab"],["images/velar/INT_GAL_4_L560_18MY_084_GLHD_Device-Desktop_1820x1023_305-323985_1820x1023.jpg","ff33ab1d6341ff41c9975b5d0491e9c8"],["images/velar/INT_GAL_5_L560_18MY_261_GLHD_Device-Desktop_1820x1023_305-323986_1820x1023.jpg","a57e10436875c88b9058ebb08164b898"],["images/velar/INT_GAL_6_L560_18MY_280_GLHD_FIXED_Device-Desktop_1820x1023_305-350227_1820x1023.jpg","267606bb76e4f18b6a2b25b9589b7f35"],["images/velar/INT_GAL_7_L560_18MY_503_GLHD_LUX_Device-Desktop_1820x1023_305-350228_1820x1023.jpg","843a59abb8fe316280932fe5bf5c510c"],["images/velar/INT_GAL_8_L560_18MY_003_GLHD_Device-Desktop_1820x1023_305-350229_1820x1023.jpg","c961678fdbe1c3b003ec91e402365928"],["images/velar/INT_GAL_9_L560_18MY_508_GLHD_OYSTER_EBONY_Device-Desktop_1820x1023_305-350230_1820x1023.jpg","ed4b8ac3512b919ac84b846923f1a41a"],["images/velar/range-rover-velar.jpg","7b7e1a3522ac93f931bb7837486e4d61"],["index.html","06aec5552ac9cb49825490efcce53c4d"],["product.html","136be280c7b7cf3d46c1d2c9e1650b84"],["scripts/main.min.js","c379475f3648d555472c9b9f7ec41b31"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/main.css","964a62ecc561cff39a234da3555ef1b9"],["styles/navbar.css","7c09ec9672195b56b5846d07695d24e9"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-ninghao-web-flow-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function(url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function(precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




