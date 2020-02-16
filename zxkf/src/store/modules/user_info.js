import { USER_LOGIN_LOGINOUT,USER_SEARCH_HISTORY } from './stateVariables.js'
import axios from 'axios'
const state = {
  user: '', /* 用户名 */
  status: '', /* 用户登录状态 */
  telephone: '', /* 手机号码 */
  verifyCode: '', /* 验证码 */
  password: '', /* 密码 */
  email: '', /* 邮箱 */
  birthday: '', /* 生日 */
  avator: '', /* 头像 */
  searchHistory: [], /* 搜索历史记录 */
};
const getters = {
  user: state => state.user,
  telephone: state =>state.telephone,
  status: state => state.status,
  password: state => state.password,
  verifyCode: state => state.verifyCode,
  avator: state => state.avator,
  searchHistory: state => state.searchHistory,
};
const mutations = {
  // 用户登录、注销
  [USER_LOGIN_LOGINOUT](state, msg/* 用户登录状态信息对象 */) {
    state.status = msg.status; /* 登录状态 */
    state.user = msg.user; /* 用户名称 */
    state.password = msg.password; /* 用户密码 */
  },
  // 用户对应的搜索历史记录
  [USER_SEARCH_HISTORY](state, ...reference/* 参数可选 */) {
    console.log(reference[0], '<<<<<<reference[0]');
    if (reference[0].type === 'add') {
      state.searchHistory = reference[0].ref;

    } else if(reference[0].type === 'del') {
      // 删除搜索历史
      state.searchHistory = []; // 清空搜索历史
    }
  },
  queryUserHistoryList(state, ref) {
    console.log(ref.ref, 'queryUserHistoryList别调用了');
    state.searchHistory = ref.ref;
  }
};
const actions = {
  // 查询用户对应的搜索历史列表
  queryUserSearchHistory (context, ref) {
    context.commit('queryUserHistoryList', ref);

  },
};
export default {
  state,
  getters,
  mutations,
  actions
}
