import request from '@/utils/request'

// 获取所有应用列表
export function getApplicationList(params) {
  return request({
    url: '/getAppliactionList',
    method: 'post',
    params
  })
}


// 获取应用详情
export function getAppliactionDetailsByAId(params) {
  console.log(params)
  return request({
    url: '/getAppliactionDetailsByAId',
    method: 'post',
    params
  })
}


//   查询应用类型列表接口 用户管控台系统新建应用时下拉选查询应用类型列表
export function getApplicationTypeList(params) {
  return request({
    url: '/getApplicationTypeList',
    method: 'post',
    params
  })
}

//   查询应用所属平台列表接口 
// 用途：用户管控台系统新建应用时下拉选查询应用所属平台列表
export function getApplicationPlatformList(params) {
  return request({
    url: '/getApplicationPlatformList',
    method: 'post',
    params
  })
}


//获取服务分类和服务列表接口
//用途：用户管控台创建应用和编辑应用时用于展示服务列表以供选择
export function getSevicesListOfTree(params) {
  return request({
    url: '/getSevicesListOfTree',
    method: 'post',
    params
  })
}

// 创建应用接口
// 用途：用户管控台系统新建应用
export function addApplication(params) {
  return request({
    url: '/addApplication',
    method: 'post',
    params
  })
}

// 编辑应用接口
// 用途：用户管控台系统编辑应用
export function editApplication(params) {
  return request({
    url: '/editApplication',
    method: 'post',
    params
  })
}