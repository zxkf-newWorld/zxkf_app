import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入boot
// import "../public/js/bootstrap.js"
//引入jQuery
import "../public/js/jquery-3.2.1.js"
// 引入swiper
import "../public/css/swiper.css"
import 'jquery'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
