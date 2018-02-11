import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Page from '@/components/Page'

import read from '@/pages/README.html'

Vue.use(Router)


const readme = {
   template: `<div>${eval(read)}</div>`
}

export default new Router({
   routes: [{
         path: '/',
         name: 'Hello',
         component: Hello
      },
      {
         path: '/readme',
         name: 'readme',
         component: readme
      }
   ]
})
