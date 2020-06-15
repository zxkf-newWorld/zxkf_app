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
import Living from './views/living/Living.vue'
import Wishs from './views/Wishs.vue'
import Service from './views/Service'
import Mmap from './components/Mapbus.vue'
import Search from './components/blt/Search.vue'
import Dingwei from './components/Dingwei.vue'
import SearchDetail from '../src/components/blt/SearchDetail.vue'
import HouseSearDetails from '../src/components/common/HouseSearDetails.vue'
import SearchHistry from '../src/components/common/SearchHistry.vue'

import ChangePhone from '../src/views/personal_setting/ChangePhone.vue'
import AccountSetting from '../src/views/personal_setting/AccountSetting.vue'
import DropDown from '../src/components/common/DropDown.vue'

import Test from '../src/views/test.vue'

// 测试

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path:'/Test',component:Test},
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
    { path: '/DropDown' ,component: DropDown },
    { path: "/SearchDetail",  name: 'SearchDetail', component: SearchDetail },
    { path: "/HouseSearDetails", component: HouseSearDetails },
    { path: '/SearchHistry', name: 'SearchHistry', component: SearchHistry, meta: { keepAlive: true}},
    { path: '/AccountSetting', component: AccountSetting },
    { path: '/ChangePhone', component: ChangePhone },

    { path: "/ZhengzuSelect", component: ZhengzuSelect },
    { path: "/Slider", component: Slider },
    { path: "/Roommate", component: Roommate },
    { path: "/Roommatedetail/:rid", component: Roommatedetail },
    { path: "/Mmap", component: Mmap },
    { path: "/Search", name: 'Search', component: Search },
    { path: "/Dingwei", component: Dingwei },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
