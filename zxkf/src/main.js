import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/store'
import qs from 'qs'
import local_storage from '../src/api/local_storage.js'
// 引入axios
import axios from "axios"
// import Bus from './bus.js'
import ElementUI from 'element-ui'
// 引入mint-ui
import MintUI from 'mint-ui'
import Vant from 'vant'
import 'vant/lib/index.css'
//2.单独引入mini-ui组件库中样式文件
import "mint-ui/lib/style.css"
import 'element-ui/lib/theme-chalk/index.css'
// production
import HttpUrl from './utils/api.js'
// mock for dev
import devApi from './utils/mock'
require('./utils/mock')
// 将MintUI 注册到Vue实例中
Vue.use(Vant);
Vue.use(MintUI);
Vue.use(ElementUI);
//配置axios基础
// 打包替换地址 http://youthhouse.applinzi.com 、 http://localhost:3000
// axios.defaults.baseURL = "http://youthhouse.applinzi.com"
axios.defaults.baseURL = "http://localhost:3000" /* 访问数据库的基础地址，后续可以省略访问的路径的基地址 */
//配置axios，保存session信息，也可以表示在跨域请求是否使用session对象的凭证）
axios.defaults.withCredentials = true;
// 将axios注册示例中
//由于axios不支持 use，--将去添加到原型上
Vue.prototype.axios = axios;
// production api
Vue.prototype.baseApi = HttpUrl;
// dev mock api
Vue.prototype.devApi = devApi;
// 将qs添加到Vue原型上
Vue.prototype.qs = qs;
Vue.prototype.$Bus = bus;
Vue.prototype.$local_storage = local_storage;

// 地图的配置+引入
import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

// 引入boot
// import "../public/js/bootstrap.js"
//引入jQuery
import "../public/js/jquery-3.2.1.js"
// 引入swiper
import "../public/css/swiper.css"
import bus from './bus.js'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
