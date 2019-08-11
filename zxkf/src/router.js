import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Carousel from './components/Carousel.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // 自定义组件路由
    {
      path:'/carousel',component:'Carousel',
    }
  ]
})
