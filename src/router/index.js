// routing for BookShelf
'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import { Book } from '@/book'

Vue.use(Router)


export default new Router({
   routes: [{
      path: '/',
      name: 'home',
      component: {
         template: `<div>${Book.frontPage.content}</div>`
      }
   }].concat(Book.allPages.find(p => p.name !== "FrontPage").map(p => {
      return {
         path: `/${p.path.replace('./', '')}`,
         name: p.name,
         component: {
            template: `<div>${p.content}</div>`
         }
      }
   }))
})
