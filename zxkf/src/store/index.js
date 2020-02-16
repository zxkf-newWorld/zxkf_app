import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import get_componet from './modules/getComponent.js'
import foot_bar from './modules/foot_bar.js'
import user_info from './modules/user_info.js'
import search_history_list from './modules/search_history_list.js'
import clock_count from './modules/clock_count.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    foot_bar, /* 底部导航栏 */
    user_info, /* 用户个人相关信息 */
    search_history_list, /* 搜索历史列表 */
    clock_count, /* 计时 */
    get_componet,
  },
});

