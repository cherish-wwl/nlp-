<template>
   <el-header :height="(60+parseInt(MbHeaderTopValue))+'px'">
     <!-- class="hidden-md-and-down" -->
    <pc-header 
      :service-list= "serviceList"
      :solutions-list= "solutionsList"
      :dataset-list= "datasetList"
      class="hidden-md-and-down">
    </pc-header>
    <!-- class="hidden-lg-and-up" -->
    <mb-header 
      :service-list= "serviceList"
      :solutions-list= "solutionsList"
      :dataset-list= "datasetList" 
      class="hidden-lg-and-up">
    </mb-header>
   </el-header>
</template>

<script>
import store from '../../../../store'
import MbHeader from './MbHeader'
import PcHeader from './PcHeader'
import { mapGetters } from 'vuex'
import { isMobile } from '@/utils/index'
// API
import { getMenus } from '@/api/header'
import { getSolutionList } from '@/api/solutions'
import { getOneLevelList } from '@/api/dataset'
export default {
  components:{
    MbHeader,
    PcHeader
  },
  data() {
    return {
      H_height: '60px',
      isMbInit: false,
      serviceList: [],
      solutionsList: [],
      datasetList: []
    }
  },
  computed:{
    ...mapGetters([
      'MbHeaderTopValue'
    ])
  },
  mounted () {  
    // 初始化commonData变量数据
    store.dispatch('initCommonData')
    // 初始化数据
    // 获取服务列表
    getMenus().then( res => {
      // console.log("this.serviceList")
      // console.log(res)
      this.serviceList = res.data
    })
    // 获取解决方案数据
    getSolutionList().then(response => {
      this.solutionsList = response.data
    })
    // 获取数据集一级列表
    getOneLevelList().then( response => {
      this.datasetList = response.data
      // console.log(response.data)
    })
   
  }
}
</script>

