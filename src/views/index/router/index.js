import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import ('../index.vue')
    },
  ],
  /**
   * 路由页面切换 滚动条问题
   */
  // scrollBehavior: (to, from, savedPosition)=> savedPosition?savedPosition: { x: 0, y: 0 }
})
