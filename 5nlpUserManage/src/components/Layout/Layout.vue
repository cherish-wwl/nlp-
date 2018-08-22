<template>
  <div class="app-wrapper">
    <header-panel @login="login" class="header-container"></header-panel>
    <div class="main-container">
      <app-main></app-main>
    </div>
    <el-footer v-html="footerText"></el-footer>
  </div>
</template>

<script>
import { HeaderPanel, AppMain } from '@/components/Layout/components'
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  name: 'layout',
  computed:{
    ...mapGetters([
      "footerText"
    ])
  },
  components: {
    HeaderPanel,
    AppMain,
  },
  data () {
    return{
      loginVisible:false,
    }
  },
  methods:{
    login(msg){
      this.loginVisible = msg
    }
  },
  mounted(){
    // 初始化公共参数
    store.dispatch('initCommonData')
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// @import "src/styles/mixin.scss";
// .app-wrapper {
//   @include clearfix;
//   position: relative;
//   height: 100%;
//   width: 100%;
// }
</style>
