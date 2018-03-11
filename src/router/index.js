// routing for BookShelf
import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/book'

Vue.use(Router)

export default new Router({
   mode: "history",
   routes: [{
      path: '/',
      component: {
         template: `<div>${Book.frontPage.content}</div>`
      }
   }].concat(Book.allPages.map(p => {
      return {
         path: `${p.path.substring(1).replace(/ /g, "-")}`,
         component: {
            template: `<div>${p.content}</div>`
         }
      }
   })),
   scrollBehavior(to, from, savedPosition) {
      if(savedPosition) {
         // debugger;
         return savedPosition
      } else {
         return {
            x: 0,
            y: 0
         }
      }
   }
})
