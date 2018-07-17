<template>
  <div class="app-wrapper">
    <header-panel @login="login" class="header-container"></header-panel>
    <div class="main-container">
      <app-main></app-main>
    </div>
    <el-footer>Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1</el-footer>
  </div>
</template>

<script>
import { HeaderPanel, AppMain } from '@/components/Layout/components'
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    AppMain,
  },
  data () {
    return{
      loginVisible:false
    }
  },
  methods:{
    login(msg){
      this.loginVisible = msg
    }
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
