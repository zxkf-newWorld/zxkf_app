import Vue from 'vue'
import Vuex from 'vuex'
import foot_bar from './modules/foot_bar.js'
import get_componet from './modules/getComponent.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    foot_bar,
    get_componet,
  },
});

