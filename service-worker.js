/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f1533c493d1b1d499c9badb573e02ab4"
  },
  {
    "url": "assets/css/0.styles.dcacb46d.css",
    "revision": "866b5838769479eec153c54b4cf24d5f"
  },
  {
    "url": "assets/img/badreq.5dac6e01.png",
    "revision": "5dac6e013e437c1c37896f5a746ca7b4"
  },
  {
    "url": "assets/img/db.5d87811b.png",
    "revision": "5d87811b0a8090eaf9d19ed31e37ded7"
  },
  {
    "url": "assets/img/del.291413dc.png",
    "revision": "291413dc990557f13d545b6c9bfc5604"
  },
  {
    "url": "assets/img/delres.f85fb828.png",
    "revision": "f85fb8284fb5be27cd471b83094cbfd4"
  },
  {
    "url": "assets/img/getall.ee80bfbf.png",
    "revision": "ee80bfbfeea45dddaf13c181dfafc78e"
  },
  {
    "url": "assets/img/getallansw.c49cb6cf.png",
    "revision": "c49cb6cffcf1cf134781a98890cfc4d0"
  },
  {
    "url": "assets/img/getid.a8255533.png",
    "revision": "a8255533a28c16d9e91d2958c8822187"
  },
  {
    "url": "assets/img/getidans.3ad4d159.png",
    "revision": "3ad4d1593d1187c5779b618a6cd3292a"
  },
  {
    "url": "assets/img/postreq.6402a3f7.png",
    "revision": "6402a3f77ba4ce132489e3dbaf46b90c"
  },
  {
    "url": "assets/img/postres.b2976e05.png",
    "revision": "b2976e0545126709e204b802fb609945"
  },
  {
    "url": "assets/img/put.1d96ef95.png",
    "revision": "1d96ef95158d77956165ae7b91100606"
  },
  {
    "url": "assets/img/putres.8363299d.png",
    "revision": "8363299d66cff732f7b991d905e42005"
  },
  {
    "url": "assets/img/rel_scheme.aa1ccce9.png",
    "revision": "aa1ccce90d0880d0a3215ed919ec1cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f985225a.js",
    "revision": "6bbd239b394be260444f3ae8e8ad784e"
  },
  {
    "url": "assets/js/10.d96f368d.js",
    "revision": "bb351805716b73afb4c517421ce90fc2"
  },
  {
    "url": "assets/js/13.fa04081f.js",
    "revision": "f3e06dc4f894a393f17024c5029f0d89"
  },
  {
    "url": "assets/js/14.b226a2ba.js",
    "revision": "d56134f35b2fb5d6be139ed723cad4a6"
  },
  {
    "url": "assets/js/15.4f86aff7.js",
    "revision": "aaf4252a551538ea97e8c098d905953f"
  },
  {
    "url": "assets/js/16.71cf2634.js",
    "revision": "c225426bbecc3573489fc19537833bbe"
  },
  {
    "url": "assets/js/17.f85e3f32.js",
    "revision": "317037a6fb6ffd20051de133f7ad7721"
  },
  {
    "url": "assets/js/18.15adf88e.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.763bcea3.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.e7f22c3c.js",
    "revision": "e18db574d527b9a3251de285f769a048"
  },
  {
    "url": "assets/js/20.07050d67.js",
    "revision": "aefac67fc6f129907e749d734cd6a3f2"
  },
  {
    "url": "assets/js/21.99b82fa4.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.c67875c4.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.e18f0a14.js",
    "revision": "e92f1cb5cef700360971571502ba753b"
  },
  {
    "url": "assets/js/25.e0495cad.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.ad577dbc.js",
    "revision": "15c785f28027fbb9c69a924ef7a17245"
  },
  {
    "url": "assets/js/27.0a9ffdbf.js",
    "revision": "2263bf2d473a838d6ba18ee8df86c512"
  },
  {
    "url": "assets/js/28.47557661.js",
    "revision": "a917e1749d72caa61bfbbded0ded5210"
  },
  {
    "url": "assets/js/29.6944b056.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.5fb97a49.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.0f154f71.js",
    "revision": "b4413ba0228c6a69fdd9f0e0da1a89bb"
  },
  {
    "url": "assets/js/31.c837f657.js",
    "revision": "805fec0a92b9b7068ba70cd641e14532"
  },
  {
    "url": "assets/js/32.2a4f5d08.js",
    "revision": "c42e59baa76abcf31d573d9366d92c31"
  },
  {
    "url": "assets/js/33.1e41ff30.js",
    "revision": "e8cba3bc0187fbd669b2d5993447315b"
  },
  {
    "url": "assets/js/34.71673d75.js",
    "revision": "4d2c020fb4b95b17c94180e6daf4bfe9"
  },
  {
    "url": "assets/js/35.a3b93646.js",
    "revision": "6e2b752c3b396e9b25984c5188e1d8e0"
  },
  {
    "url": "assets/js/36.591bec20.js",
    "revision": "29e13edc63683810cbe09d3ad1cbc2da"
  },
  {
    "url": "assets/js/37.58f3c035.js",
    "revision": "df6b4f509ce7ec2e59cd60eddd301b98"
  },
  {
    "url": "assets/js/38.fbd5767b.js",
    "revision": "ecd025f04d78082c6caeac9c41481252"
  },
  {
    "url": "assets/js/39.99bff0e5.js",
    "revision": "4882be2acaf1f068ded264ba6cdaddd9"
  },
  {
    "url": "assets/js/4.ebbb7b32.js",
    "revision": "e70d89383a7b48072754a93d70ccfa30"
  },
  {
    "url": "assets/js/41.e195d4a4.js",
    "revision": "818903a05f1c64a9f9571cff5473b1f6"
  },
  {
    "url": "assets/js/5.a0bf34f1.js",
    "revision": "f7f490e1d5274ea138b58a220624e7cd"
  },
  {
    "url": "assets/js/6.5a24313b.js",
    "revision": "9d6afa20a8027d62b03cc3912b3bb583"
  },
  {
    "url": "assets/js/7.1b6df386.js",
    "revision": "da14f4cb200486263bd62d6ba8222326"
  },
  {
    "url": "assets/js/8.1d91e211.js",
    "revision": "beb876a67c4f2ad092a5173dbe7e56b6"
  },
  {
    "url": "assets/js/9.34b1872e.js",
    "revision": "c8b4c308d0fc50818b8920ce505881a9"
  },
  {
    "url": "assets/js/app.ebf69d28.js",
    "revision": "6a340182285867171d66fcfc6894bcee"
  },
  {
    "url": "assets/js/vendors~docsearch.0d1e900e.js",
    "revision": "f32567f7f6dc3aea2c28803554263b53"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1a1b54009b451aba9dea150c1859cf7a"
  },
  {
    "url": "design/index.html",
    "revision": "79defe5cf78d9b1ab75ddacaffb88534"
  },
  {
    "url": "index.html",
    "revision": "d4c17e60d530dc3dcf18c4dd5f430047"
  },
  {
    "url": "intro/index.html",
    "revision": "b8fb74bb6c7246f1604352186f9aefb5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7a4770520239382d2a246ec69bc5cc17"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b408467dd3b7bcff1bb3e2774c50c60f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "99fd69204f4d455d201f6bb307338c7b"
  },
  {
    "url": "software/index.html",
    "revision": "332e5e1359b0bdfc6b2e530af2812859"
  },
  {
    "url": "test/index.html",
    "revision": "5c1976f483c8b953aa524533926b5bf8"
  },
  {
    "url": "use cases/index.html",
    "revision": "2882fbb3d82749c73d5e369b11b0ad1b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
