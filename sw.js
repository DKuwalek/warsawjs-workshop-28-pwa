const CACHE_NAME ='pwa-1.0.0';

self.addEventListener('install', (evt) => {
    console.log("[sw] install");
    evt.waitUntil(
        Promise.resolve(startCaching)
    )
});

async function startCaching() {
    try {
        self.skipWaiting();
        const cache = await caches.open(CACHE_NAME);
        await cache.add('/*');
    } catch (err) {
        console.log(err);
    }

}

self.addEventListener('activate', (evt) => {
    evt.waitUntil(startActivating);
});

async function startActivating(){
    try {
        const keys = await caches.keys();
        const deleted=  keys
        .filter(key !== CACHE_NAME)
        .map(key => caches.delete(key));

        return await Promise.all(deleted);
    } catch (err) {
        console.log(err);
    }
}

self.addEventListener('fetch', (evt) => {
    console.log('[sw]', evt.request);
    evt.respondWith(
        cacheFallbackNetworkStrategy(evt)
    );
});

async function cacheFallbackNetworkStrategy(evt) {
    //spr czy jest  cache
    const cache = await caches.open(CACHE_NAME)
    
    //spr czy jest istenijace response na ten request Cache
    const resource = await cache.match(evt.request);

    if (resource) { //jest w cache
        return resource
    }

    //nie ma w cache - tworzymy zapytanie http
    const response = await fetch(evt.request);
    cache.put(evt.request, response.clone());

    return response;
}