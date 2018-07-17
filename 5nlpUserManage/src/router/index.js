import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

/* Layout */
import Layout from '../components/Layout/Layout'

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404')},
  {
    path: '/',
    redirect: '/login',
    component:Layout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/login/index'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/register/index'),
      },
    ]
  },
  { path: '*', redirect: '/404'}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

