import request from '@/utils/request'
import consoleRequest from "@/utils/consoleRequest"
import qs from 'qs'


export function getInfo() {
  return consoleRequest({
    url: '/user/getUserInfo',
    method: 'get',
  })
}
export function logout() {
  return consoleRequest({
    url: '/user/logout',
    method: 'post'
  })
}



