<template>
  <el-container class="app-wrapper console-container">
    <header-panel @login="login" class="header-container">></header-panel>
    <el-container>
      <aside-panel></aside-panel>
      <main-panel></main-panel>
    </el-container>
    
   
    <el-footer>Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1</el-footer>
    <login :visible="loginVisible" @login="login"></login>
  </el-container>
</template>
<script>
import headerPanel from '@/views/console/layout/headerPanel'
import asidePanel from '@/views/console/layout/asidePanel'
import mainPanel from '@/views/console/layout/mainPanel'
import Login from '@/components/Login'// 登录组件
export default {
  components:{
    headerPanel,
    Login,
    asidePanel,
    mainPanel
  },
  
  data () {
    return {
      loginVisible:false
    }
  },
  methods:{
    login(msg){
      console.log("++++++++++++++++++++登录+++++++++++++++++++++++++++")

      console.log(msg)
      this.loginVisible = msg
    }
  }
  
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";

@import "src/styles/console.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

