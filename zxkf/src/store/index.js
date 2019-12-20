import Vue from 'vue'
import Vuex from 'vuex'
import foot_bar from './modules/foot_bar.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    foot_bar,
  },
});

