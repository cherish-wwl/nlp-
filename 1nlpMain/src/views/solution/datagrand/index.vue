<template>
  <div class="datagrand-container">
    <xiao-niu-banner :title-data="titleData"></xiao-niu-banner>
    <service-feature :feature-data="featureData"></service-feature>
    <br />
    <property-index :feature-data="propertyData"></property-index> 
    <br />
    <industry-solution :show-data="industryData"></industry-solution>
    <cooperation-platform :cooperation-data="cooperationData"></cooperation-platform>
    
  </div>
</template>

<script>
import { xiaoNiuBanner, ServiceFeature,
 PropertyIndex,  CooperationPlatform, IndustrySolution} from '@/views/solution/components'

import { getDataGrand } from '@/api/localData.js'
export default {
  components:{
    xiaoNiuBanner,
    ServiceFeature,
    PropertyIndex,
    CooperationPlatform,
    IndustrySolution
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
    getDataGrand().then( res=>{
      console.log(res)
      if((typeof res) == "object"){
        this.titleData = res.titleData
        this.featureData = res.featureData
        this.propertyData = res.propertyData
        this.industryData = res.industryData
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