import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken, getUserName} from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  // NProgress.start()
  console.log(to)
  if(to.name == "consoleTechDocument"){
    if(to.params.id){
      next()
    }else{
      next("/myService")
    }
  }else{
    next()
  }
  if (getToken()) {
    
    if (getUserName() ==  "") {
      store.dispatch('GetInfo').then(res => { // 拉取用户信息
        
        next()
      }).catch(() => {
        store.dispatch('FedLogOut').then(() => {
          Message.error('验证失败,请重新登录')
          // window.location.href = window.location.origin +"/login"
          next()
          
          // window.open(window.location.origin +"/login", "_blank")
        })
      })
    } 
    
  } else {
    // window.location.href = window.location.origin +"/login"
    // next()
    // console.log(window.location.href)
    // console.log(window.location.origin)
    // window.location.href = window.location.origin + "/login"
    
    // window.location.href = window.location.origin +"/login"
    // if (whiteList.indexOf(to.path) !== -1) {
    //   next()
    // } else {
    //   next('/login')
      // NProgress.done()
    // }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
