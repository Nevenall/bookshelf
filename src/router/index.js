import Vue from 'vue'
import Router from 'vue-router'
import Path from 'path'
import { Book, Section, Page } from '@/book'

var rawPages = require.context('@/pages', true)

var pages = rawPages.keys().map((key) => {
   return {
      name: path.win32.basename(key, '.html'),
      path: key,
      contents: rawPages(key)
   }
});

var b = new Book('Sufficient Reason', rawPages)


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
