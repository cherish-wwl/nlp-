import request from '@/utils/request'
import qs from 'qs'
export function login(username, password) {
  // console.log(username)
  return request({
    url: '/sso/login',
    method: 'post',
    data:qs.stringify( {
      name:username,
      password:password
    })
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function registerUser(params) {
  return request({
    url: '/user/regist',
    method: 'post',
    params
  })
}

export function checkedEmail(params) {
  return request({
    url: '/user/checkEmail',
    method: 'post',
    params
  })
}


