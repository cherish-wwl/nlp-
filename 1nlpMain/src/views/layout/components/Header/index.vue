<template>
   <el-header :height="(60+MbHeaderTopValue)+'px'">
    <pc-header class="hidden-md-and-down"></pc-header>
    <mb-header class="hidden-lg-and-up"></mb-header>
    
   </el-header>
</template>

<script>
import store from '../../../../store'
import MbHeader from './MbHeader'
import PcHeader from './PcHeader'
import { mapGetters } from 'vuex'
  export default {
    components:{
      MbHeader,
      PcHeader
    },
    data() {
      return {
        H_height:'60px'
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
    }
  }
</script>

