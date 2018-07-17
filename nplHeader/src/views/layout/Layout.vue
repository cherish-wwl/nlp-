<template>
  <div class="app-wrapper">
    <header-panel @login="login" class="header-container"></header-panel>
    <div class="main-container">
      <!-- <navbar></navbar> -->
      <app-main></app-main>
    </div>
    <el-footer>Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1</el-footer>
    <login :visible="loginVisible" @login="login"></login>
    <contact-us></contact-us>

  </div>
</template>

<script>
import { HeaderPanel, AppMain } from '@/views/layout/components'
import  ContactUs from '@/components/ContactUs' //悬浮框联系我们组件
import Login from '@/components/Login'// 登录组件
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    AppMain,
    Login,
    ContactUs
  },
  data () {
    return{
      loginVisible:false
    }
  },
  computed: {
   
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
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
