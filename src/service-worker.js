const channel = new BroadcastChannel('sw-messages')

self.addEventListener('install', event => {
   console.log('sw - install')
   // tell the worker to activate immediately
   // we don't really have data to be inconsistant
   //todo - fetch and cache pages locally
   self.skipWaiting()
})

self.addEventListener('activate', event => {
   console.log('sw - activated')
   // Grab all pages
   // important for initial installation to work
   self.clients.claim()
   // broadcast a reload message
   channel.postMessage({ reload: true, msg: 'service-worker activated' })
})

self.addEventListener('fetch', event => {
   // check if requested resource is an import.
   //console.log(`sw - ${event.request.url}`)

   if (event.request.url.endsWith('.svelte')) {
      event.respondWith(fetch(event.request).then(response => {
         // return .svelte components with correct content type
         return new Response(response.body, { headers: { 'Content-Type': 'application/javascript' } })
      }))
   } else if (event.request.url.endsWith('.svg')) {
      event.respondWith(fetch(event.request).then(response => {
         // return .svg components with correct content type
         return new Response(response.body, { headers: { 'Content-Type': 'application/javascript' } })
      }))
      // todo - we only want to match files in the book dir for this one
   } else if (event.request.url.endsWith('.html')) {
      event.respondWith(fetch(event.request).then(response => response.text()).then(text => {
         return new Response(`export default function() { return \`${text}\`}`, { headers: { 'Content-Type': 'application/javascript' } })
      }))
   } else {
      event.respondWith(fetch(event.request).catch(err => console.log(err)))
   }
})