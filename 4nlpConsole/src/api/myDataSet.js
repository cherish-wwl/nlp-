import request from '@/utils/request'

// 获取所有数据集
export function getDataSetList(params) {
  return request({
    url: '/dataSet/list',
    method: 'post',
    params
  })
}

// 删除数据集
export function deleteDataSet(params) {
  return request({
    url: '/dataSet/delete',
    method: 'post',
    params
  })
}

// 下载数据集
export function downloadDataSet(params) {
  return request({
    url: '/dataSet/download',
    method: 'post',
    params
  })
}