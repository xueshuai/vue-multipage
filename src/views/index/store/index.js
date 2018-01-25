import Vue from 'vue';
import Vuex from 'vuex';
import state from './global-state';
import mutations from './global-mutations';
import actions from './global-actions';
import getters from './global-getters';
import module1 from './modules/module-1';
import module2 from './modules/module-2';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    module1,
    module2
  }
});

export default store;
