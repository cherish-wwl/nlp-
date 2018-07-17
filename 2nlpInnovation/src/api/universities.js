import request from '@/utils/request'
import qs from 'qs'

// 获取大学列表 
export function getAcademyList(params) {
  return request({
    url: '/index/academyList',
    method: 'post',
    params
  })
}

// 获取学院列表（带查询）
export function getGroupList(params) {
  return request({
    url: '/index/groupList',
    method: 'post',
    params
  })
}

// 获取学院详情列表  professorRelateList
export function getGroupDetail(params) {
  return request({
    url: '/index/getGroupDetail',
    method: 'post',
    params
  })
}
