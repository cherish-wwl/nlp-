import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'



import App from './App'

import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import Cookies from 'js-cookie'
import 'babel-polyfill'
import promise from 'es6-promise'
promise.polyfill()
import '@/icons' // icon
import '@/styles/index.scss' // global css
// import '@/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// router.beforeEach((to, from, next) => {
//   console.log("+++++++++++++++++++++++++++++++++")
//   console.log(from)
//   if(from.name == "register"){

//   }else{
//     next()
//   }
// })
