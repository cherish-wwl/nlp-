import router from './router'
import store from './store'
// import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  // NProgress.start()

  // 初始化公共参数
  store.dispatch('initCommonData')
 
  if (getToken()) {
    // 接口文档页面
    if(to.name == "consoleTechDocument"){
      if(to.query.id){
        next()
      }else{
        next("/myService")
      }
    }else{
      next()
    }

  } else {
    // Message.error('验证失败,请重新登录')
    window.location.href = store.getters.userManageBaseUrL
  }
  // NProgress.done()
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
