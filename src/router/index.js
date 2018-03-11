// routing for BookShelf
import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/book'

Vue.use(Router)

var router = new Router({

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
         return savedPosition
      } else {
         return {
            x: 0,
            y: 0
         }
      }
   }
});



// router.beforeEach((to, from, next) => {
//    console.log(`${from.fullPath} => ${to.fullPath}`);
//    next();
// });

export default router
