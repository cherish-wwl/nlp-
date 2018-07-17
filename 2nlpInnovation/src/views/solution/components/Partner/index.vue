<template>
   <el-container class='specialist_panel container_80'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="temp_title temp_title_line">专家介绍</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div class="icon_panel_item" v-for="(item,index) in specialist" :key="index">
        
        <div class="left">
          <img :src="item.img"/>
        </div>
        <div class="right">
          <label> <span>{{ item.teamname }}负责人：{{item.principal}}</span></label>
          <p>{{item.detail}}</p>
          <div><a :href="item.url">>> 了解更多</a></div>
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
    props: ['specialist'],
   
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .specialist_panel {  
    
      .icon_panel{
        display: flex;
        justify-content: space-around;
       
        .icon_panel_item {
          position: relative;
          max-width: 48%;
          min-width: 30%;
          background-color: #fff;
          display: flex;
          cursor: pointer;
          &:hover{
            -moz-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            -webkit-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
          }
        
        }
        
      }
      
   }
</style>

