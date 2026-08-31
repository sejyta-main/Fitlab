// FitLab service worker: offline app shell + cache exercise images as they are viewed
const C='fitlab-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.hostname==='raw.githubusercontent.com'){ // images: cache first
    e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(e.request);if(hit)return hit;try{const r=await fetch(e.request);if(r.ok)c.put(e.request,r.clone());return r;}catch(err){return new Response('',{status:503});}}));
    return;
  }
  if(e.request.mode==='navigate'||u.pathname.endsWith('index.html')){ // shell: network first, fallback cache
    e.respondWith(fetch(e.request).then(r=>{caches.open(C).then(c=>c.put('./index.html',r.clone()));return r;}).catch(()=>caches.match('./index.html')));
  }
});
