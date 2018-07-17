import request from '@/utils/request'

//查看技术文档页面 techDocument
export function techDocument(params) {
  return request({
    url: '/serviceDoc/detail',
    method: 'post',
    params
  })
}
