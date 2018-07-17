import request from '@/utils/localRequest'

export function getDataGrand() {
  return request({
    url: 'static/solution/datagrand.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
}
 export function getXiaoNiuData(){
  return request({
    url: 'static/solution/xiaoniu.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
 }
 export function getNlpSchoolData () {
  return request({
    url: 'static/nlpschool/nlpschool.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
 }

 export function getCarouselData () {
  return request({
    url: 'static/index/lbt.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
 }
 export function getAboutUsData () {
  return request({
    url: 'static/index/home.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
 }

 export function getCommonData () {
  return request({
    url: 'static/common.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
 }
 export function getCooperationList () {
  return request({
    url: 'static/index/cooperation.json?'+Math.random().toString(36).substr(2),
    method: 'get'
  })
 }
