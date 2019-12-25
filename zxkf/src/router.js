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
// import Upload from "./views/first-page/Upload.vue"
// 我得页面相关组件
import Myself from "./views/myself/Myself.vue"
import Roommate from "./views/findroommate/Roommate.vue"
import Roommatedetail from "./views/findroommate/Roommatedetail.vue"
import Zhengzu from './components/blt/Zhengzu.vue'
import Hezu from './components/blt/Hezu.vue'
import Details from './components/blt/Details.vue'
import Header from './components/blt/Header.vue'
import ZhengzuSelect from './components/blt/ZhengzuSelect.vue'
import Slider from './components/blt/Slider.vue'
import Living from './views/Living.vue'
import Wishs from './views/Wishs.vue'
import Service from './views/Service'
import Mmap from './components/Mapbus.vue'
import Search from './components/blt/Search.vue'
import Dingwei from './components/Dingwei.vue'
import SearchDetail from '../src/components/blt/SearchDetail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
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
    // { path: '/Upload', component: Upload },
    { path: '/Myself', component: Myself },
    { path: "/Details", component: Details },
    { path: "/Zhengzu", component: Zhengzu },
    { path: "/Hezu", component: Hezu },
    { path: "/Header", component: Header },
    { path: "/Service", component: Service },
    { path: "/Living", component: Living },
    { path: "/Wishs", component: Wishs },
    { path: "/SearchDetail", component: SearchDetail },

    { path: "/ZhengzuSelect", component: ZhengzuSelect },
    { path: "/Slider", component: Slider },
    { path: "/Roommate", component: Roommate },
    { path: "/Roommatedetail/:rid", component: Roommatedetail },
    { path: "/Mmap", component: Mmap },
    { path: "/Search", component: Search },
    { path: "/Dingwei", component: Dingwei },
  ]
})
