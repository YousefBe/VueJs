export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations: {
    addNewRequests(state, payload) {
      state.requests.push(payload);
    }
  },
  actions: {
    addRequest(context, payload) {
      const NewRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        userMessage: payload.message
      };
      context.commit('addNewRequests', NewRequest);
    }
  },
  getters: {
    allRequests(state, _, _2, rootGetters) {
      const CoachId = rootGetters.userId;

      return state.requests.filter(req => req.coachId === CoachId);
    },
    hasRequests(_, getters) {
      return getters.allRequests && getters.allRequests.length > 0;
    }
  }
};
