<template>
  <div class="app-wrapper">
    <top-festival></top-festival>
    <header-panel @login="login" class="header-container"></header-panel>
    <div class="main-container">
      <app-main></app-main>
    </div>
    <el-footer v-html="footerText">{{ footerText }}</el-footer>
    <contact-us></contact-us>
  </div>
</template>

<script>
import { HeaderPanel, AppMain } from '@/views/layout/components'
import  ContactUs from '@/components/ContactUs' //悬浮框联系我们组件
import TopFestival from "@/components/TopFestival"  //顶层悬浮广告
import { mapGetters } from "vuex"
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    AppMain,
    ContactUs,
    TopFestival
  },
  data () {
    return{
      loginVisible:false,
    }
  },
  computed: {
      ...mapGetters([
        'footerText',
      ])
    },
  methods:{
    login(msg){
      console.log("++++++++++++++++++++登录+++++++++++++++++++++++++++")

      console.log(msg)
      this.loginVisible = msg
    }
  },
  mounted(){
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
