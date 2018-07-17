import request from '@/utils/request'

export function getSolutionList() {
  return request({
    url: '/solutions/getSolutionList',
    method: 'post'
  })
}