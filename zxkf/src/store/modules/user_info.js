import { USER_LOGIN_LOGINOUT } from './stateVariables.js'
const state = {
  user: '', /* 用户名 */
  status: '', /* 用户登录状态 */
  telephone: '', /* 手机号码 */
  verifyCode: '', /* 验证码 */
  password: '', /* 密码 */
  email: '', /* 邮箱 */
  birthday: '', /* 生日 */
  avator: '', /* 头像 */
  searchHistory: {}, /* 搜查浏览历史 */
};
const getters = {
  user: state => state.user,
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
  }
};
const actions = {};
export default {
  state,
  getters,
  mutations,
  actions
}
