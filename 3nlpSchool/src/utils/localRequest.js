import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  // baseURL:, // api的base_url
  timeout: 60000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
 
  return config
  }, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  })

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
  
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
