<template>
  <el-container class="app-wrapper console-container">
    <header-panel class="header-container">></header-panel>
    <el-container>
      <main-panel></main-panel>
    </el-container>
    <el-footer v-html="footerText"></el-footer>
  </el-container>
</template>
<script>
import store from '../../store'
import { headerPanel, mainPanel } from '@/views/Layout/components'
import { mapGetters } from 'vuex'
export default {
  components:{
    headerPanel,
    mainPanel
  },
  computed:{
    ...mapGetters([
      "footerText"
    ])
  },
  data () {
    return {
      
    }
  },
  methods:{
  
  },
  mounted(){
    // 初始化commonData变量数据
    store.dispatch('initCommonData')
  }
  
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

