import request from '@/utils/request'

export function customerGetToken() {
  return request({
    url: '/customer/getToken',
    method: 'get'
  })
}


