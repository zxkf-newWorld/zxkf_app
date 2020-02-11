import {TIME_GET} from './stateVariables.js'
const state = {
  time: 59, /* 计时 */
};
const getters = {
  time_get: state => state.time
};
const mutations = {
  [TIME_GET](state, ref /* 计时 */) {
    state.time = state.time-1;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
