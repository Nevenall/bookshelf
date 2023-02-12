const channel = new BroadcastChannel('sw-messages')
channel.addEventListener('messageerror', event => { console.error(event) })
channel.addEventListener('message', event => {
   console.log(`sw - message - ${event.data}`)
   if (event.data.reload) {
     window.location.reload()
   }
})

if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/service-worker.js', { type: 'module', scope: '/' })
      .then(registration => {
         return navigator.serviceWorker.ready
      })
      .then(sw => {
         return import('/App.svelte')
      })
      .then(App => {
         // when the service worker is activated, dynamically import the root svelte component.
         // this prevents the browser from attempting to load files before the service-worker fetch is available
         new App.default({
            target: document.body,
            props: {
               name: 'world'
            }
         })
      })
}
