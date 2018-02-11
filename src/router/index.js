import Vue from 'vue'
import Router from 'vue-router'

import readmePage from '@/pages/README.html'




Vue.use(Router)


const readme = {
   template: `<div>${readmePage}</div>`
}

export default new Router({
   routes: [{
         path: '/',
         name: 'Readme',
         component: readme
      }
   ]
})
