const CACHE_NAME = 'kiapp-cache-v1',
    urlsToCache = [
        './',
        './?utm=homescreen',
        './index.html',
        './index.html?utm=homescreen',
        './style.css',
        './script.js',
        './favicon.ico',
        './assets/img/kiapp-logo-g.png',
        './icon_192x192.png',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    ]

self.addEventListener('install', e => {
    console.log('Evento: SW-kiapp -> ServiceWorker Instalado')
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Evento: SW-kiapp -> Archivos en cache con el nombre' + CACHE_NAME)
            return cache.addAll(urlsToCache)
                .then(() => self.skipWaiting())
                //skipWaiting forza al SW a activarse
        })
        .catch(err => console.log('Error: SW-kiapp -> Falló registro de cache', err))
    )
})

self.addEventListener('activate', e => {
    console.log('Evento: SW-kiapp -> ServiceWorker Activado')
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    //Eliminamos lo que ya no se necesita en cache
                    if (cacheWhitelist.indexOf(cacheName) === -1)
                        return caches.delete(cacheName)
                })
            )
        })
        .then(() => {
            console.log('Evento: SW-kiapp -> Cache actualizado')
                // Le indica al SW activar el cache actual
            return self.clients.claim()
        })
    )
})

self.addEventListener('fetch', e => {
    console.log('Evento: SW-kiapp -> ServiceWorker Recuperando')
    e.respondWith(
        //Miramos si la petición coincide con algún elemento del cache
        caches.match(e.request)
        .then(res => {
            console.log('Evento: SW-kiapp -> Recuperando cache')
            if (res) {
                //Si coincide lo retornamos del cache
                return res
            }
            //Sino, lo solicitamos a la red
            return fetch(e.request)
        })
    )
})

self.addEventListener('push', e => {
    console.log('Evento: Push-kiapp -> Push')

    let title = 'ki-app',
        options = {
            body: 'Aplicación para el mundo del TKD',
            icon: './icon_192x192.png',
            vibrate: [100, 50, 100],
            data: { id: 1 },
            actions: [
                { 'action': 'Si', 'title': 'Ir a FMTKD', icon: './icon_192x192.png' },
                { 'action': 'No', 'title': 'Regresar a la aplicación', icon: './icon_192x192.png' }
            ]
        }

    e.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', e => {
    console.log(e)

    if (e.action === 'Si') {
        console.log('Evento: Noti-kiapp -> Aplicación del mundo del TKD')
        clients.openWindow('http://www.femextkdoficial.mx/')
    } else if (e.action === 'No') {
        console.log('Evento: Noti-kiapp -> No me gusta esta aplicación')
    }

    e.notification.close()
})

self.addEventListener('sync', e => {
    console.log('Evento: Sync-kiapp -> Sincronización de Fondo', e)

    //Revisamos que la etiqueta de sincronización sea la que definimos o la que emulan las devtools
    if (e.tag === 'github' || e.tag === 'test-tag-from-devtools') {
        e.waitUntil(
            //Comprobamos todas las pestañas abiertas y les enviamos postMessage
            self.clients.matchAll()
            .then(all => {
                return all.map(client => {
                    return client.postMessage('online')
                })
            })
            .catch(err => console.log(err))
        )
    }
})