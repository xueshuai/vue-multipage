import Vue from 'vue'
import App from './index.vue'
import store from './store'
import Vuex from 'vuex'
// import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

/**
 * 引入私有css文件
 */
import '@/assets/style/views/index.less';

new Vue({
  el: '#app',
  // router,
  store,
  render: h => h(App)
})
