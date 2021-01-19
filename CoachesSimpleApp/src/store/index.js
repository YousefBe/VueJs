import { createStore } from 'vuex';
import coachesModule from './modules/coachesModule.js';
import requestsModule from './modules/requestsModule.js';

const store = createStore({
  modules: {
    coachesModule,
    requestsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  mutations: {},
  getters: {
    userId(state) {
      return state.userId;
    }
  },
  actions: {}
});

export default store;
