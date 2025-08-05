// Service Worker para Kiji Yurei Cosplay
const CACHE_NAME = 'kiji-cosplay-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

// Archivos a cachear inmediatamente
const STATIC_FILES = [
  '/',
  '/kiji-yurei-cosplay.html',
  '/admin-panel.html',
  '/README-CMS.md',
  '/deployment-guide.md',
  '/img/Imagen de WhatsApp 2025-07-31 a las 00.24.32_14317d81.jpg',
  '/img/Imagen de WhatsApp 2025-07-31 a las 00.24.32_1a399e2e.jpg',
  '/img/Imagen de WhatsApp 2025-07-31 a las 00.24.32_5738f298.jpg'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Cacheando archivos estáticos');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Archivos estáticos cacheados');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Error cacheando archivos:', error);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker activado');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Cache limpio completado');
        return self.clients.claim();
      })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Estrategia: Cache First para archivos estáticos
  if (request.method === 'GET' && isStaticFile(url.pathname)) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            console.log('Sirviendo desde cache:', url.pathname);
            return response;
          }
          
          return fetch(request)
            .then(fetchResponse => {
              // Cachear la respuesta para futuras peticiones
              if (fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone();
                caches.open(DYNAMIC_CACHE)
                  .then(cache => {
                    cache.put(request, responseClone);
                  });
              }
              return fetchResponse;
            })
            .catch(error => {
              console.error('Error en fetch:', error);
              // Retornar página offline si es necesario
              if (request.destination === 'document') {
                return caches.match('/kiji-yurei-cosplay.html');
              }
            });
        })
    );
  }
  
  // Estrategia: Network First para datos dinámicos
  else if (request.method === 'GET' && isDataRequest(url.pathname)) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Función para identificar archivos estáticos
function isStaticFile(pathname) {
  const staticExtensions = ['.html', '.css', '.js', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico'];
  return staticExtensions.some(ext => pathname.endsWith(ext)) || 
         pathname === '/' || 
         pathname.startsWith('/img/');
}

// Función para identificar peticiones de datos
function isDataRequest(pathname) {
  return pathname.includes('api') || 
         pathname.includes('data') || 
         pathname.includes('json');
}

// Manejar mensajes del cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Limpiar cache antiguo periódicamente
self.addEventListener('periodicsync', event => {
  if (event.tag === 'cleanup-cache') {
    event.waitUntil(cleanupOldCaches());
  }
});

async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => 
    name !== STATIC_CACHE && name !== DYNAMIC_CACHE
  );
  
  await Promise.all(
    oldCaches.map(name => caches.delete(name))
  );
  
  console.log('Limpieza de cache completada');
}

// Manejar errores
self.addEventListener('error', event => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('Service Worker unhandled rejection:', event.reason);
}); 