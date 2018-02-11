import Vue from 'vue'
import Router from 'vue-router'

import pages from '@/pagedata'




Vue.use(Router)


const readme = {
   template: `<div>${pages.home.content}</div>`
}

export default new Router({
   routes: [{
      path: '/',
      name: 'Readme',
      component: readme
   }]
})
