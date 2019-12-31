const state = {
    catch_components: [],
};
const getters = {/* 相当于stroe的计算属性 */
    catch_components: state => state.catch_components,
};
const mutations = {
    GET_CATCH_COMPONENT (state, data) {
        state.catch_components = data;
    }
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
}