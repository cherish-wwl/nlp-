import request from '@/utils/request'

export function getMenus() {
  return request({
    url: '/service/type/headList',
    method: 'get'
  })
}


