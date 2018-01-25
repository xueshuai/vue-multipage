import axios from 'axios';
import Q from 'q';
import C from '@/conf';

function ajax(url, type, options) {

  return Q.Promise((resolve, reject) => {
    let config = {};
    if (type == 'post') {
      config = {
        method: type,
        url: C.HOST + url,
        data: options
      }
    } else {
      config = {
        method: type,
        url: C.HOST + url,
        // responseType:'stream',
        params: options,
      }
    }
    axios(config)
      .then((result) => {
        if (result && result.status === 200) {

          resolve(result.data.data);

        } else {
          reject({
            errno: result.errno,
            msg: result.msg
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.request.status === 0) {
        }
      });
  })
}

const config = {
  get(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'get', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  post(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'post', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  put(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'put', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  delete(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'delete', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  jsonp(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'jsonp', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  }
};

export default config;
