<template>
  <div class="datagrand-container">
    <xiao-niu-banner :title-data="titleData"></xiao-niu-banner>
    <service-feature :feature-data="featureData"></service-feature>
    <br />
    <cooperation-platform :cooperation-data="cooperationData"></cooperation-platform>
    
  </div>
</template>

<script>
import { xiaoNiuBanner, ServiceFeature, CooperationPlatform, } from '@/views/solution/components'

import { getMultranData } from '@/api/localData.js'
export default {
  components:{
    xiaoNiuBanner,
    ServiceFeature,
    CooperationPlatform,
  },
  data(){
    return{
      titleData:{},
      featureData:{},
      propertyData:{},
      industryData:{},
      cooperationData:{}
    }
  },mounted(){
    getMultranData().then( res=>{
      console.log(res)
      if((typeof res) == "object"){
        this.titleData = res.titleData
        this.featureData = res.featureData
        this.cooperationData = res.cooperationData
      }else{
        console.log("未加载到数据")
      }
      
    })
    
  }
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>