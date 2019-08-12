import Vue from 'vue'
import Router from 'vue-router'

import Index from  './views/Index.vue'
import Carousel from './components/Carousel.vue'
import Zhaoshiyou from './components/Zhaoshiyou.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/Index',component:Index},
    { path:'/Carousel',component:Carousel},
    { path:'/Zhaoshiyou',component:Zhaoshiyou},
  ]
})
