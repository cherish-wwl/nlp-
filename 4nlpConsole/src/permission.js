import router from './router'
import store from './store'
// import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken, getUserName} from '@/utils/auth' // 验权
import { getCommonData } from "@/api/localData" //获取路径

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  // NProgress.start()
  console.log(to)
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
    Message.error('验证失败,请重新登录')
    getCommonData().then(res => {
      window.location.href = res.userManageBaseUrL
    })
  }
  // NProgress.done()
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
