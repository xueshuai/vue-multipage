import Q from 'q';
import CONF from '@/views/index/conf';
import API from '@/utils/api';

const M = CONF['mainModule'];
if (process.env.STATS === 'dev') M.MOCK ? require('./mock') : '';

export default {

  get(params = {}){
    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GET'], params).then((data) => {
        const rtnData = {
          moduleName: M['NAME'],
          moduleIcon: M['ICON'],
          moduleData: data
        };
        resolve(rtnData);
      });
    });
  },

}
