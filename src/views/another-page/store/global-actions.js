import * as types from './mutation-types';
import Q from 'q';

const actions = {
  getGlobal({commit, state}, params) {
    return Q.Promise((resolve, reject) => {
      commit(types.GLOBAL, params);
      resolve(params)
    });
  },
}

export default actions;