import * as mutation from './mutations';
import * as action from './actions';
import * as getter from './getters';


const state = {
  module1: 'module1'
}

// const getters = getter;

const actions = action;

const mutations = mutation;

export default {
  state,
  // getters,
  actions,
  mutations
}