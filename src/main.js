// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueScrollBehavior from 'vue-scroll-behavior'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(vueScrollBehavior, {
   router: router
})


Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
   el: '#app',
   router,
   template: '<App/>',
   components: {
      App
   }
})
