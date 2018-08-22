import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

/* Layout */
const Layout = () => require.ensure([], () => (require('@/views/Layout/index')), 'layout')
import { WSAENETUNREACH } from 'constants';

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404')},

  {
    path: '/nlpschool',
    redirect: '/nlpschool', //重定向
    component:Layout,
    children:[
      {
        path:"",
        name:'nlpschoolHome',
        component:() =>import('@/views/home'),
      },
      {
        path:'lessonslist',
        name:'nlpschoolDetails',
        component:() =>import('@/views/lessons/list'),
      },
      {
        path:'lessonsDetails',
        name:'nlpschoolDetails',
        component:() =>import('@/views/lessons/detail'),
      }
    ]

  },
  

  { path: '*', redirect: '/404' }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

