import { SEARCH_HISTORY_LIST } from './stateVariables.js'
const state = {
  searchHistoryList: [], /* 搜索历史列表 */
};
const getters = {
  searchHistoryList: state => state.searchHistoryList,
  // searchList_get: state => state.searchHistoryList,
};
const mutations = {
  // 更新搜索历史列表
  [SEARCH_HISTORY_LIST](state, ...reference /* 参数个数可选 */) {
    if (reference[0].type === 'add') {
      state.searchHistoryList = reference[0].ref;
    } else if(reference[0].type === 'del') {
      // 删除搜索历史
      console.log(reference[0].ref,'已经进入未登录删除历史记录同步方法');
      state.searchHistoryList = []; // 清空搜索历史
    }
  },
  queryHistoryList(state, ref) {
    console.log('search_history_list被调用了');
    console.log(ref.ref, '<<<<< ref.ref');
    if (ref.ref === null) {
      state.searchHistoryList = [];
    } else {
      state.searchHistoryList = ref.ref;
    }
  }
};
const actions = {
  // 查询用户对应的搜索历史列表
  querySearchHistory (context, ref) {
    console.log(ref, '<<<<< action ref');
    context.commit('queryHistoryList', ref);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
