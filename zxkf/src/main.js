import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
// 引入axios
import axios from "axios"
//配置axios基础
axios.defaults.baseURL = "http://127.0.0.1:3000"
//配置axios，保存session信息，也可以表示在跨域请求是否使用session对象的凭证）
axios.defaults.withCredentials = true;
// 将axios注册示例中
//由于axios不支持 use，--将去添加到原型上
Vue.prototype.axios = axios;
// 将qs添加到Vue原型上
Vue.prototype.qs = qs;


// 引入boot
// import "../public/js/bootstrap.js"
//引入jQuery
import "../public/js/jquery-3.2.1.js"
// 引入swiper
import "../public/css/swiper.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
