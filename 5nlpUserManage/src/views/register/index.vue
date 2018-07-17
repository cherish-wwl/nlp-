<template>
  <div class="register app-wrapper">
    <content-panel @rebackPage="rebackPage"></content-panel>
  </div>
</template>

<script>
import { ContentPanel } from '@/views/register/components'
export default {
  name: 'layout',
  components: {
    ContentPanel,  
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
    },
    rebackPage(){
      console.log("---------------")
      if(this.$route.params.serviceId && this.$route.params.serviceId != ""){
        this.$router.go(-1)
      }else{
        this.$router.push({name:"home"})
      }
        
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
