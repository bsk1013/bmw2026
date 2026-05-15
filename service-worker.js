const CACHE_NAME='bmw-pwa-v12-transparent-icon';
const APP_SHELL=[
 './index.html?v=12',
 './manifest.webmanifest?v=12',
 './icons/bmw-v12-transparent-icon-180.png?v=12',
 './icons/bmw-v12-transparent-icon-192.png?v=12',
 './icons/bmw-v12-transparent-icon-512.png?v=12',
 './icons/bi-logo-original.png'
];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html?v=12',copy));return res}).catch(()=>caches.match('./index.html?v=12')));return}e.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy));return res})))});
