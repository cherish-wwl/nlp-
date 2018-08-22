import request from '@/utils/request'
import consoleRequest from '@/utils/consoleRequest'
import qs from 'qs'
// 获取左侧数据集一级列表
export function getOneLevelList() {
  return request({
    url: '/dataset/type1',
    method: 'post'
  })
}
// 获取数据集二级列表
export function getTwoLevelListById(params) {
    return request({
      url: '/dataset/type2',
      method: 'post',
      data:qs.stringify(params)
    })
  }
// 获取右侧数据集列表
export function getThirdServiceList(params) {
  
  return request({
    url: 'dataset/datasetlist/list',
    method: 'post',
    data:qs.stringify(params)
  })
}

// 添加到我的数据集
export function addToMySolution(params){
  return consoleRequest({
    url: '/dataSet/addData',
    method: 'post',
    params
  })
}