import request from '@/utils/request'
import qs from 'qs'
// 获取左侧列表
export function getServiceInfo() {
  return request({
    url: '/service/type/headList',
    method: 'post'
  })
}
// 获取右侧服务列表
export function getThirdServiceList(params) {
  //  console.log(params)
  return request({
    url: 'service/searchServiceByCondition',
    method: 'post',
    data:qs.stringify(params)
  })
}
// 获取服务详情页数据
export function getServiceDetails(id) {
  var params = {
    'id':id
  }
  return request({
    url: '/service/details/list',
    method: 'post',
    params
  })
}
// 服务详情页-执行

export function serviceDetailsExecute(params) {
 
  return request({
    url: '/execute/service',
    method: 'post',
    data:qs.stringify(params)
  })
}

// 服务详情页前-获取验证码

export function serviceGetCertificate(params) {
 
  return request({
    url: '/execute/getCertificate',
    method: 'post',
    data:qs.stringify(params)
  })
}


// 获取分类名称 by分类id
export function getServiceTypeNameById(params) {
 
  return request({
    url: '/service/getServiceTypeNameById',
    method: 'post',
    data:qs.stringify(params)
  })
}

// 点解查看服务详情时根据服务id查询服务跳转方式，返回跳转链接
export function checkServiceDetailForward(params) {
 
  return request({
    url: '/service/detail/forward',
    method: 'post',
    data:qs.stringify(params)
  })
}