<template>
   <el-container class='technicalFeatures'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="font30">技术特点</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div class="icon_panel_item" v-for='(item,index) in featureData' :key="index" 
      v-if="item.relateType == '006001'">
        <div class="grid-content">
          <!-- <svg-icon :icon-class="item.banner+''" ></svg-icon>  -->
           <img class="img " :src="item.banner">
          <p class="font18">{{ item.title }}</p>
          <p class="font_color_grey font14">
            {{ item.content }}
          </p>
        </div>
      </div>
      
    </el-row>
   </el-container>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    },
    props: ['featureData'],
    methods:{
      init () {
        
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.technicalFeatures {
  display: block;
  background-color: #fff;
  h2{
    font-weight:500;
    margin: 45px 0;
  }
  
}
// pc
@media screen and (min-width: 1024px){
  .technicalFeatures {
    .icon_panel{
      display: flex;
      justify-content: space-around;
      .icon_panel_item {
        width: 30%;
        position: relative;
        text-align: center;
        img{
          width: 32%;
         }
      } 
    }
  }
}
// mb
@media screen and (max-width: 1024px){
  .technicalFeatures {
    .icon_panel{
      .icon_panel_item {
        width: 100%;
        text-align: center;
        img{
          width: 32%;
        }
      } 
    }
  }
}


</style>

