<template>
  <el-row class='banner_info'>
      <img class='batar_img' :src='titleData.bgimg'/>
      <div class='banner_desc'>
        <div class="left">
          <img class='banner_bg_img' :src='titleData.img'/>
        </div>
        <div class="right">
          <h2 class="size"> {{ titleData.title }} </h2>
          <p class="smaller hidden-md-and-down"> {{ titleData.desrc }} </p>
        </div>
        <div v-if="titleData.url && titleData.url != ''">
          <el-button @click="junmUrl" size="medium" plain>查看详情</el-button>
        </div>
      </div>
      
    </el-row>
</template>

<script>
export default {
  props:["titleData"],
  methods:{
    junmUrl(){
      window.open(this.titleData.url,"_blank")
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.banner_info{
  position: relative;
  .batar_img{
    min-height: 222px;
    max-height: 230px
  }
  img.banner_bg_img{
    width: 100%;
  }
  .banner_desc{
    position: absolute;
    top: 26px;
    color: #fff;
    left: 20%;
    width: 60%;
    bottom: 26px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .left{
      border-right: 1px solid #fff;
      // display: inline-block;
      width: 24%;
      padding: 10px
      // margin: auto;
    }
    .right{
      padding-left: 15px;
      width: 76%;
      // display: inline-block;

      .size{
        font-size: 3.2rem;
        margin: 1.2rem 0;
      }
      .smaller{
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
// mb
@media screen and (max-width: 1280px) {
  .banner_info{
    img.banner_bg_img {
      height: 7rem;
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }
    .banner_desc{
      flex-direction: column;
      .left{
        width: 100%;
        border-right:none;
      }
      .right{
        width: 100%;
      }
    }
  }
}
</style>
