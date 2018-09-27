<template>
  <el-row class='service_info'>
    <img class='service_bg_img' :src="service_bg_img" onerror="this.src='/static/sevice_banner_default.jpg';return false;" />
    <div class='title_desc'>
      <div class="info">
        <router-link :to="{name:'home'}"><span class="overUnderLine font18">首页</span></router-link>
        <i class="el-icon-arrow-right font16"></i>
        <h1 > {{service_title }} </h1>
      </div>
      <p class="font18 hidden-md-and-down"> {{ service_desc }} </p>
    </div>
  </el-row> 
</template>

<script>

export default {
  props:['service_bg_img', 'service_title', 'service_desc'],
  data (){
    return {
     
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
// pc
@media screen  and (min-width: 1280px){
  .service_info{
    .service_bg_img{     
      height: 30rem;
    } 
  }
}
// iphone
@media screen  and (max-width: 1280px){
  .service_info{
    .service_bg_img{
      min-height: 12rem;
    }
    .title_desc{  
      .info{
        // white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }   
      h1{
        font-size: 3rem;
        margin: 0;
      }
    }
  }
}
</style>
