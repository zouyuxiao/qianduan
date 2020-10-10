import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import footer from '@/components/footer'
import error404 from '@/components/error/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    ,
    {
      path: '*',
      name: 'error',
      component: error404
    },
  ]
})
