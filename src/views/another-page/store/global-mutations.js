import * as types from './mutation-types';

const mutations = {

  [types.GLOBAL](state, data) {
    state.global = data;
  },


}

export default mutations;