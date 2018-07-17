import request from '@/utils/request'
import qs from 'qs'

// 获取专家列表 /index/professorList
export function professorList(params) {
  return request({
    url: '/index/professorList',
    method: 'post',
    params
  })
}

// 获取专家详情列表  professorRelateList
export function professorRelateList(params) {
    return request({
      url: '/index/professorRelateList',
      method: 'post',
      params
    })
  }
