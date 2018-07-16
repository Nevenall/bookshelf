import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/book'

Vue.use(Router)

var router = new Router({
   mode: "hash",
   routes: [{
      path: '/',
      redirect: {
         name: Book.frontPage.name
      }
   }].concat(Book.allPages.map(p => {
      return {
         path: `${p.path.substring(1).replace(/ /g, "-")}`,
         name: p.name,
         component: p.content.default
      }
   }))
})

export default router