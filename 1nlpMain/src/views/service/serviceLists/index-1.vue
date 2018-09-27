<template>
  <div class="serviceLists-container">
    <el-row class='service_info'>
      <img class='service_bg_img' :src="service_bg_img" onerror="this.src='/static/sevice_banner_default.jpg';return false;" />
      <div class='title_desc'>
        <div>
          <router-link :to="{name:'home'}"><span class="overUnderLine font18">首页</span></router-link>
          <i class="el-icon-arrow-right font16"></i>
          <h1 > {{ service_title }} </h1>
        </div>
        <p class="font18 hidden-md-and-down"> {{ service_desc }} </p>
      </div>
    </el-row>
    <pc-index 
      class="hidden-md-and-down" 
      v-if="loadFinish"
      @initServiceInfo="initServiceInfo"
      :MenusList="MenusList">
    </pc-index>
    <mb-index 
      class="hidden-lg-and-up" 
      v-if="loadFinish" 
      :MenusList="MenusList">
    </mb-index>
  </div>
</template>

<script>
import { getMenus } from '@/api/header'
import { PcIndex, MbIndex } from './components'

export default {
  components:{
    PcIndex,
    MbIndex
  },
  data (){
    return {
      service_title:"",
      service_bg_img:'',
      service_desc:'',
      MenusList:"",
      loadFinish:false
    }
  },
 
  filters: {
    getImage (name) {
      // console.log(name)
       var url ="static/services/"+name.toString()
      return url
    },
    formatTime (time){
      console.log(time)
      if(time){
        return time.split(" ")[0]
      }
      return ''
      
    },noMoreThenFonts(str){
      return str
    }
  },
  methods:{
    initServiceInfo(info){
      this.service_title = info.service_title
      this.service_bg_img = info.service_bg_img
      this.service_desc = info.service_desc
    },
    // 初始化
    init (){
      getMenus().then(response => {
        this.loadFinish = true
        this.MenusList = response
      }) 
    },
   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    
  },
  mounted () {
    this.init()
  }
    
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.serviceLists-container {
  background-color: #fafafa;
  .service_info{
    position: relative;
    .service_bg_img{
      width: 100%; 
      background-color: #9d9a96;
    }
   
    .title_desc {
      position: absolute;
      top: 22%;
      color: #fff;
      left: 10%;
      h1{
        font-size: 4rem;
        display: inline-block;
      }
    }
  }
 
}
 // pc
@media screen  and (min-width: 1280px){
  .serviceLists-container {
    .service_info{
      .service_bg_img{     
        max-height: 300px;
        min-height: 300px;
      }
    }
  }
}
// iphone
@media screen  and (max-width: 1280px){
  .serviceLists-container {
    .service_info{
      .title_desc{     
        h1{
          margin: 0;
        }
      }
    }
  }
}


</style>
