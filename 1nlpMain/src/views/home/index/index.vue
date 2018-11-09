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
    <div class="join" @click="join">
      加 入 平 台
    </div>
  </div>
</template>
<script>
import { isMobile } from '@/utils/index'
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
  },
  methods: {
    join() {
      this.$router.push('/pInformation')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.join{
  width: 90%;
  padding: 8px 10px;
  background: #4d40ff;
  outline:0 none;
  border-radius: 16px;
  color: #fff;
  position: fixed;
  left: 0;
  bottom: 10px;
  font-size: 18px;
  text-align: center;
  font-size: 20px;
  margin-left: 5%;
}

 @media (min-width: 678px){.join{display:none;}}

</style>
