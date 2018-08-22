<template>
  <el-main>
     <section class="app-main" id="app-main">
        <transition name="fade" mode="out-in">
          <router-view :key="key"></router-view>
        </transition>
      </section>
  </el-main>
</template>
<script>


export default {
  data(){
    return{
     
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
   
  },
  mounted(){
    
    
   
  }
}
</script>
