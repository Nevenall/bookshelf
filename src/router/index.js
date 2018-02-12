import Vue from 'vue'
import Router from 'vue-router'
import pageData from '@/pagedata'

Vue.use(Router)

export default new Router({
   routes: [{
      path: '/',
      name: 'home',
      component: {
         template: `<div>${pageData.home.content}</div>`
      }
   }].concat(pageData.pages.map(p => {
      return {
         path: `/${p.name}`,
         name: p.name,
         component: {
            template: `<div>${p.content}</div>`
         }
      }
   }))
})
