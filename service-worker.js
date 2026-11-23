const CACHE='honban-v1';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE.map(p=>new Request(p,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('honban-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
// 手元のコピーをすぐ返し、裏で新しい版を取ってくる（次に開いたときに反映）
self.addEventListener('fetch',e=>{
 const url=new URL(e.request.url);if(e.request.method!=='GET'||url.origin!==self.location.origin)return;
 const network=fetch(e.request).then(async r=>{if(r.ok&&!r.redirected)await (await caches.open(CACHE)).put(e.request,r.clone());return r});
 e.waitUntil(network.then(()=>{},()=>{}));
 e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreSearch:true})).then(hit=>hit||network.catch(async err=>{if(e.request.mode==='navigate'){const home=await caches.match('./index.html');if(home)return home}throw err})));
});
