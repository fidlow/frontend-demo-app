export const storeObject = {
  state: {
    counter: 0
  },
  actions: {
    reset({ commit }) {
      commit("SET_RESET");
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    SET_RESET (state) {
      state.counter = 0;
    },
  },
  getters: {
    counter: (state) => state.counter,
  },
};
