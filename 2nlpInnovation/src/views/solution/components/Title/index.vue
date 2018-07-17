<template>
  <el-row class='banner_info'>
      <img class='banner_bg_img' :src='titleData.bgimg'/>
      <div class='banner_desc'>
        <div class="left">
          <img class='banner_bg_img' :src='titleData.img'/>
        </div>
        <div class="right">
          <h2> {{ titleData.title }} </h2>
          <p class="smaller"> {{ titleData.desrc }} </p>
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
      width: 30%;
      // margin: auto;
    }
    .right{
      padding-left: 15px;
      width: 67%;
      // display: inline-block;
    }
  }
}

</style>
