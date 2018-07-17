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
      .icon_panel{
        display: flex;
        justify-content: space-around;
        .icon_panel_item {
          position: relative;
          width: 20%;
          text-align: center;
          img{
            width: 32%;
          }
        }
        
      }
      
   }
</style>

