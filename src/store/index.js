import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sources: {
      mugs: {
        data: [],
      },
      coasters: {
        data: [],
      },
    },
  },
  mutations: {
    setSourceData(state, payload) {
      console.log('store setSourceData is running, payload:', payload);
      const key = payload.key;
      const data = payload.records;
      state.sources[key].data = data;
    },
  },
  actions: {
  },
  modules: {
  },
});
