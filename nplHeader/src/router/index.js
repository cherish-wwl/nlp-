import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Layout from '../views/layout/Layout'


export const constantRouterMap = [
  { path: '/',
   component: Layout

  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

