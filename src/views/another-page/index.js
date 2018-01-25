// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

/**
 * 引入私有css文件
 */
import '@/assets/style/views/another-page.less';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
