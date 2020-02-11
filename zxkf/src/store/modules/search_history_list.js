import { SEARCH_HISTORY_LIST } from './stateVariables.js'
const state = {
  searchHistoryList: [], /* 搜索历史列表 */
};
const getters = {
  searchList_get: state => state.searchHistoryList,
};
const mutations = {
  [SEARCH_HISTORY_LIST](state, ...{type, ref} /* 参数个数可选 */) {
    if (type === 'add') {
      state.searchHistoryList = ref;
    } else if(type === 'del') {
      // 删除搜索历史
      state.searchHistoryList = ref; // 清空搜索历史
    }
  }
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
