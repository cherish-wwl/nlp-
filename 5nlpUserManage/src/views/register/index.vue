<template>
  <div class="register app-wrapper">
    <content-panel ></content-panel>
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
      
    }
  },
  computed: {
   
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
