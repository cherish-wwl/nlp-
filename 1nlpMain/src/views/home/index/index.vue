<template>
  <div class="home-container">

    <carousel></carousel>
    <platform-features ></platform-features>
   
    <application-scene :scene-data="sceneData"></application-scene>
    
    <popular-services :popular-data="popularData"></popular-services>
    <br />
    <br />
    <br />
    <br />
    <about-platform></about-platform>
    <cooperation-platform></cooperation-platform>
  </div>
</template>

<script>
import {  Carousel, PlatformFeatures, PopularServices, ApplicationScene, AboutPlatform, CooperationPlatform } from '@/views/home//index/components'
 import { getpopularServicesList, getApplicationSceneList } from '@/api/home'
export default {
  name: 'home',
  components: {
    Carousel,
    PlatformFeatures,
    PopularServices,
    ApplicationScene,
    AboutPlatform,
    CooperationPlatform
  },
  data(){
    return{
      sceneData:null,
      popularData:null
    }
  },
  mounted(){
    getpopularServicesList().then(res=>{
      this.popularData = res.data
    })
    getApplicationSceneList().then(res=>{
      this.sceneData = res.data
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>
