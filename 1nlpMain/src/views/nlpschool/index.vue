<template>
  <div class="register app-wrapper">
    <header-panel @login="login" class="header-container"></header-panel>
    <content-panel></content-panel>
    <el-footer>{{ footerText }}</el-footer>
    <contact-us></contact-us>
  </div>
</template>

<script>
import { HeaderPanel, ContentPanel } from '@/views/nlpschool/components'
import ContactUs from "@/components/ContactUs"
import { getCommonData } from "@/api/localData"
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    ContentPanel,
    ContactUs
  },
  data () {
    return{
      loginVisible:false,
      footerText:"Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1"
    }
  },
  computed: {
   
  },
  methods:{
    login(msg){
      console.log(msg)
      this.loginVisible = msg
    }
  },
  mounted(){
    getCommonData().then( res => {
      if(res.footerText){
        this.footerText = res.footerText
      }
    })
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
