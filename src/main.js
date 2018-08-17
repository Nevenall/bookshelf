import '@babel/polyfill'
import Vue from 'vue'
import './vue-material'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
   id: 'UA-120807805-3',
   router
 })

new Vue({
   router,
   render: h => h(App)
}).$mount('#app')