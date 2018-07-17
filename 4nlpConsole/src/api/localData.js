import request from '@/utils/localRequest'


 export function getCommonData () {
  return request({
    url: 'static/common.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
 }
