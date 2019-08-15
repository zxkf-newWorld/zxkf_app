import Vue from 'vue'
import Router from 'vue-router'

import Index from  './views/Index.vue'
import Zhaoshiyou from './views/Zhaoshiyou.vue'
import Carousel  from './views/Carousel.vue'
import Searchbox from './views/Searchbox.vue'
import Parent from './views/Parent.vue'
import Childele from './views/Childele.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/Index',component:Index},
    { path:'/Zhaoshiyou',component:Zhaoshiyou},
    { path:'/Carousel',component:Carousel},
    { path:'/Searchbox',component:Searchbox},
    { path:'/Parent',component:Parent},
    { path:'/Childele',component:Childele},
  ]
})
