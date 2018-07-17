import request from '@/utils/request'

// 获取最近使用的应用列表
export function getApplicationListbyNum(params) {
  return request({
    url: '/getApplicationsByNum',
    method: 'post',
    params
  })
}

// 获取一级服务分类
export function getRootServiceClass(params){
  return request({
    url: '/getRootServiceList',
    method: 'post',
    params
  })
}

// 获取服务详情列表（带查询、分页）
export function getServicesListByAId(params) {
  return request({
    url: '/getServicesListByAId',
    method: 'post',
    params
  })
}

// 获取所有二级服务分类列表 （不区分一级分类）
export function getAllSecondServiceClass(params) {
  return request({
    url: '/getAllSecondServiceClass',
    method: 'post',
    params
  })
}
// 获取所有三级服务分类列表（不区分一级分类）
export function getAllThirdServiceClass(params) {
  return request({
    url: '/getAllThirdServiceClass',
    method: 'post',
    params
  })
}


// 根据服务分类id 查询服务列表
export function getServicesListByCId(params) {
  return request({
    url: '/getServicesListByCId',
    method: 'post',
    params
  })
}

// 获取服务统计详情信息
export function getServicesStatisticsBySId(params) {
  return request({
    url: '/getServicesStatisticsBySId',
    method: 'post',
    params
  })
}

// 获取技术文档详情
export function getTechDocList(params) {
  return request({
    url: '/techDoc/TechDocList',
    method: 'post',
    params
  })
}