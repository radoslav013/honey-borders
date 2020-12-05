import { createStore } from 'vuex';
import { defaultUser } from '../types/user.type';

export default createStore({
  state: {
    user: defaultUser(), // Check why: My compiler suggested me these {} instead of new Object()
  },
  mutations: {
    createUser(state, name: string) {
      state.user.name = name;
    },
  },
  actions: {
  },
  modules: {
  },
});
