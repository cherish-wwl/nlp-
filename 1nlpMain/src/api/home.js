import request from '@/utils/request'
import qs from 'qs'
// 获取热门服务一级列表
export function getpopularServicesList() {
  return request({
    url: '/service/type/recList1',
    method: 'get'
  })
}
// 获取热门服务二级列表
export function getpopularSubServicesList(params) {
  // console.log(params)

  return request({
    url: '/service/type/recList2',
    method: 'post',
    data:qs.stringify(params)
  })
}

// 获取应用场景
export function getApplicationSceneList() {
  return request({
    url: '/service/type/recClslist',
    method: 'get'
  })
}
// 获取关于平台 数据展示
export function getCountBytype() {
  return request({
    url: '/index/getCountBytype',
    method: 'post'
  })
}

// 获取首页所有数据
export function getAllDataOfHome() {
  return request({
    url: '/index/getAll',
    method: 'post'
  })
}
// 获取个人信息
export function addInfo(params) {
  return request({
    url: '/joinUs/addInfo',
    method: 'post',
    data: params
  })
}
// 获取个人信息里的研究方向
// export function getValueByDictCode() {
//   return request({
//     url: 'joinUs/getValueByDictCode',
//     method: 'get'
//   })
// }
export function getValueByDictCode() {
  return request({
    url: 'joinUs/getValueByDictCode',
    method: 'get'
  })
}
