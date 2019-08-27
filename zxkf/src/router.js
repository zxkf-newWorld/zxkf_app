import Vue from 'vue'
import Router from 'vue-router'

import Index from  './views/Index.vue'
import Carousel  from './views/first-page/Carousel.vue'
import Searchbox from './views/first-page/Searchbox.vue'
import Parent from './views/first-page/Parent.vue'
import Childele from './views/first-page/Childele.vue'
import Functions from './views/first-page/Functions.vue'
// 为Login&Reg.vue组件指定路径
import Login from "./views/first-page/Login.vue"
import Reg from "./views/first-page/Reg.vue"
// 我得页面相关组件
import Myself from "./views/myself/Myself.vue"
import Roommate from "./views/findroommate/Roommate.vue"
import Roommatedetail from "./views/findroommate/Roommatedetail.vue"
import Zhengzu from './components/blt/Zhengzu.vue'
import Details from './components/blt/Details.vue'
import Header from './components/blt/Header.vue'
import ZhengzuSelect from './components/blt/ZhengzuSelect.vue'
import Slider from './components/blt/Slider.vue'
// 客服
import Service from './views/Service'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',component:Index},
    { path:'/Index',component:Index},
    { path:'/Carousel',component:Carousel},
    { path:'/Searchbox',component:Searchbox},
    { path:'/Parent',component:Parent},
    { path:'/Childele',component:Childele},
    { path:'/Functions',component:Functions},
    { path: '/Login', component: Login },
    { path: '/Reg', component: Reg },
    { path: '/Myself', component: Myself },
    { path: "/Zhengzu", component: Zhengzu },
    { path: "/Details", component: Details },
    { path: "/Header", component: Header },
    { path: "/Service", component: Service },

    { path: "/ZhengzuSelect", component: ZhengzuSelect },
    { path: "/Slider", component: Slider },
    { path: "/Roommate", component: Roommate },
    { path: "/Roommatedetail/:rid", component: Roommatedetail },
  ]
})
