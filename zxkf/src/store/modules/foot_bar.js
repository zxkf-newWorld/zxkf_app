import {
  FOOTTAB_CHANGE
} from "./stateVariables.js";

const state = {
  myselect: "首页" //默认首屏加载为首页
};
const getters = {
  myselect: state => state.myselect
};
const mutations = {
  [FOOTTAB_CHANGE](state, msg) {
    state.myselect = msg;
  }
};
const actions = {};
export default {
  state,
  getters,
  mutations,
  actions
};
