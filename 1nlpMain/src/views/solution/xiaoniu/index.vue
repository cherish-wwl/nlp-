<template>
  <div class="xiaoniu-container">
    <xiao-niu-banner :title-data="titleData"></xiao-niu-banner>
    <service-feature :feature-data="featureData"></service-feature>
    <br />
    <property-index :feature-data="propertyData"></property-index> 
    <br />
    <service-mode :table-data="tableData"></service-mode>
    <br />
    <specialist :specialist="specialist"></specialist>
    <br />
    <cooperation-platform :cooperation-data="cooperationData"></cooperation-platform>
    <br />
    <contact :contact-data="contactData"></contact>


  </div>
</template>

<script>
import { xiaoNiuBanner, ServiceFeature,
 PropertyIndex, ServiceMode, Specialist ,
 CooperationPlatform, Contact} from '@/views/solution/components'

import { getXiaoNiuData } from '@/api/localData.js'
export default {
  components:{
    xiaoNiuBanner,
    ServiceFeature,
    PropertyIndex,
    ServiceMode,
    Specialist,
    CooperationPlatform,
    Contact
  },
  data(){
    return{
      titleData:{},
      featureData:{},
      propertyData:{},
      tableData:{},
      specialist:{},
      cooperationData:{},
      contactData:{}
    }
   
  },mounted(){
    getXiaoNiuData().then( res=>{
      console.log(res)
      if((typeof res) == "object"){
        this.titleData = res.titleData
        this.featureData = res.featureData
        this.propertyData = res.propertyData
        this.tableData = res.tableData
        this.specialist = res.specialist
        this.cooperationData = res.cooperationData
        this.contactData = res.contactData
      }else{
        console.log("未加载到数据")
      }
        
    })
  }
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>