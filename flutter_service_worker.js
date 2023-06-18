'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "8e7a7e4617c62bfff5b2a3b6237f2f39",
"assets/AssetManifest.smcbin": "2dcd4c2289b33887f0aa37463931eb48",
"assets/assets/icons/apple_login.png": "791c511658421055737a205e0ef4eb8b",
"assets/assets/icons/app_logo.png": "b2e2517187bf4f293703f033c6e292ce",
"assets/assets/icons/available_income.png": "c0803734a2e93588c346b6135f95c1da",
"assets/assets/icons/bill_record.png": "e5b1e7f8b3fb875468276073d4016c32",
"assets/assets/icons/checklist.png": "66ff9969f9ea36358ece8c51a6684513",
"assets/assets/icons/facebook_login.png": "c514091ebce6ddcc5c629eac2de760f4",
"assets/assets/icons/google_login.png": "f5615acb90fe0e71ea31156733506a50",
"assets/assets/icons/grow_income.png": "28832861a67d92cb935ae2d296d129b1",
"assets/assets/icons/library.svg": "fe55a4841f02bb35de492d869a3d448c",
"assets/assets/icons/location_pin.png": "ab8244023ac2fc303cbe48e3b0873e02",
"assets/assets/icons/microphone.svg": "ad2bea7f96862b90a7f88b2fa989f3b4",
"assets/assets/icons/nav_home.svg": "706ec6de17637aa0f74a0d13ef2647d9",
"assets/assets/icons/pen.svg": "3e3345f1df380798259b537abddd4bd0",
"assets/assets/icons/person.png": "b907dc756c5ac066437b40a2dd900187",
"assets/assets/icons/profile.svg": "0fbb6ef815068a956fc0d5f8d281e4c9",
"assets/assets/icons/profilepic.png": "014ec63c96927a091b955cfcec80b5b3",
"assets/assets/icons/pulse.png": "57a1bc79ce84cb0f3312f6f02a42dbf9",
"assets/assets/icons/recharge_money.png": "aa097cfd2df29cb3c0e0706e3dd6d40a",
"assets/assets/icons/sad_smiley.png": "db9dc12af7684e1b780055be523512f0",
"assets/assets/icons/save.svg": "ded94d4238534b7478f614dde614673b",
"assets/assets/icons/total_asset.png": "304eb5eae2a87fc27aa5abbebf648668",
"assets/assets/icons/transfer_money.png": "33efcd20bce6f1b492d760d3786aa3d1",
"assets/assets/icons/withdraw_money.png": "08e517877364e73d84c847aba67f7711",
"assets/assets/icons/yesterday_income.png": "8c47129beb81e6a04ef11aeb0aee921e",
"assets/assets/images/anne.jpeg": "7a636f9bf09ef6845f336b9de282007d",
"assets/assets/images/ic_demo.png": "39ebb1778485de590663dae4e27c8054",
"assets/assets/images/login_background.png": "cb19a64e19e4f8dfacee96809ec35c94",
"assets/assets/images/welcome_bg.jpg": "7e79d88646841cd37303c682b2dda486",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5fad8880979f1c85b88b26e065bad91e",
"assets/NOTICES": "088a0d4ab6c2239724728a6f3f91a6ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a3c57e814ea7e94597fe704f7bb9980d",
"/": "a3c57e814ea7e94597fe704f7bb9980d",
"main.dart.js": "e64bc938796c3176492283a46507c21c",
"manifest.json": "d2d831f0958d91e672dcd702531bbc74",
"version.json": "b50eb70d7a83a6c922e33acfa6a3ebd9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
