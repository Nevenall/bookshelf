// routing for BookShelf
import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/book'

Vue.use(Router)

// debugger;

export default new Router({
   routes: [{
      path: '/',
      name: 'home',
      component: {
         template: `<div>${Book.frontPage.content}</div>`
      }
   }].concat(Book.allPages.map(p => {

      if (p.name === "FrontPage") {
         return false;
      }
      return {
         path: `${p.path.substring(1)}`,
         name: p.name,
         component: {
            template: `<div>${p.content}</div>`
         }
      }
   }))
})
