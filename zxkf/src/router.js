import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Index from  './views/Index.vue'
import Carousel from './components/Carousel.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/Index',component:Index},
    { path:'/Carousel',component:Carousel},
  ]
})
