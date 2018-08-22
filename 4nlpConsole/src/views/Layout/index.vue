<template>
  <el-container class="app-wrapper console-container">
    <header-panel class="header-container">></header-panel>
    <el-container>
      <aside-panel></aside-panel>
      <main-panel></main-panel>
    </el-container>
    <el-footer v-html="footerText"></el-footer>
  </el-container>
</template>
<script>
import { headerPanel, asidePanel, mainPanel } from '@/views/Layout/components'
import { mapGetters } from 'vuex'
export default {
  components:{
    headerPanel,
    asidePanel,
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

