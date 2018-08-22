import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

/* Layout */
const consoleLayout = () => require.ensure([], () => (require('@/views/Layout/index')), 'layout')
import { WSAENETUNREACH } from 'constants';

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    redirect: '/myService', //重定向
    hidden: true 
  },
  {
    path: '/myService',
    component: consoleLayout,
    children: [
      {
        path: '',
        name: 'consoleService',
        component: ()=> require.ensure([], () => (require('@/views/MyService/myService')), 'consoleService'),
        meta:{
          title:'概览',//左侧栏名称
          search:false,//titleTool组件是否使用搜索框
          icon:"el-icon-goods", //左侧栏 图标

        }
      },
      {
        path: 'detail',
        name: 'consoleServiceDetail',
        component:resolve =>{require(['@/views/MyService/myServiceDetail'],resolve)},
        meta:{
          title:'详情信息',//titleTool组件的title
          attr:"consoleService",//隶属于哪个左边栏
          search:false//titleTool组件是否使用搜索框
          
        }
      },
      {
        path: 'techDocument',
        name: 'consoleTechDocument',
        component: () => import('@/views/MyService/techDocument'),
        meta:{
          title:'技术文档',//titleTool组件的title
          attr:"consoleService", //隶属于哪个左边栏
          search:false//titleTool组件是否使用搜索框
        }
      },
    ]
  },
  {
    path: '/myApplicantion',
    component: consoleLayout,
    children:[
      {
        path: '',
        name: 'consoleMyApplicantion',
        component: () => import('@/views/MyApplicantion/myApplicantion'),
        meta:{
          title:'应用管理',//左侧栏名称
          search:true,//titleTool组件是否使用搜索框
          show:true,
          icon:"el-icon-tickets" //左侧栏 图标
        }
      },
      {
        path: 'detail',
        name: 'consoleMyApplicantionDetail',
        component: () => import('@/views/MyApplicantion/myApplicantionDetail'),
        meta:{
          title:'应用详情', //titleTool组件的title
          attr:"consoleMyApplicantion",//隶属于哪个左边栏
          search:false //titleTool组件是否使用搜索框
        }
      },
      {
        path: 'add',
        name: 'consoleMyApplicantionAdd',
        component: () => import('@/views/MyApplicantion/myApplicantipnEditAdd'),
        meta:{
          title:'创建应用',//titleTool组件的title
          attr:"consoleMyApplicantion",//隶属于哪个左边栏
          search:false //titleTool组件是否使用搜索框
        }
        
      },
      {
        path: 'edit',
        name: 'consoleMyApplicantionEdit',
        component: () => import('@/views/MyApplicantion/myApplicantipnEditAdd'),
        meta:{
          title:'编辑详情', //titleTool组件的title
          attr:"consoleMyApplicantion",//隶属于哪个左边栏
          search:false //titleTool组件是否使用搜索框
        }
        
      }
    ]
  },
  {
    path: '/myDataSet',
    component: consoleLayout,
    children:[
      {
        path: '',
        name: 'consoleMyDataSet',
        component: () => import('@/views/MyDataSet/myDataSet'),
        meta:{
          title:'我的数据集',//左侧栏名称
          search:true, //titleTool组件是否使用搜索框
          show:true,
          icon:"el-icon-news" //左侧栏 图标
        }
      },
    ]
  },
  {
    path: '/mine',
    component: consoleLayout,
    children:[
      {
        path: '',
        name: 'consoleMine',
        component: () => import('@/views/Mine/mine'),
        meta:{
          title:'帐号信息',//左侧栏名称
          search:false, //titleTool组件是否使用搜索框
          show:true,
          icon:"el-icon-setting" //左侧栏 图标
        }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

