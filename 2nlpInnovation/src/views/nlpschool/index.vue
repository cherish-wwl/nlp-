<template>
  <div class="register app-wrapper">
    <header-panel @login="login" class="header-container"></header-panel>
    <content-panel></content-panel>
    <el-footer>Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1</el-footer>
    <login :visible="loginVisible" @login="login"></login>
    <contact-us></contact-us>
  </div>
</template>

<script>
import { HeaderPanel, ContentPanel } from '@/views/nlpschool/components'
import Login from '@/components/Login'// 登录组件
import ContactUs from "@/components/ContactUs"
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    ContentPanel,
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
