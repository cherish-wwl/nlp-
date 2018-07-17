<template>
   <el-container class='property_panel container_80'>
    <el-row>
      <el-col :span="24" class='text_center' >
        <h2 class="temp_title">{{ featureData.name }}</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div class="icon_panel_item" :style="'width:'+featureData.width+';'" v-for="(item,index) in featureData.data" :key="index">
        <div class="grid-content">
          <div class="up_panel">
            <img class='activeimg' :src="item.img"/>
            <div class="item_name" v-if="item.name && item.name !=''" >{{ item.name }}</div>
          </div>
          <div class="down_panel">
            <div v-if="item.title && item.title !=''">{{ item.title }}</div>     
            <p class="smaller font_color_grey">
              {{ item.descr }}
            </p>
          </div>
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
   
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .property_panel {  
     background-color: #f5f5f5;
      .icon_panel{
        display: flex;
        justify-content: space-around;
       
        .icon_panel_item {
          position: relative;
          // max-width: 30%;
          background-color: #fff;
          cursor: pointer;
          &:hover{
            -moz-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            -webkit-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
          }
          .up_panel{
            position: relative;
            img{
              width: 100%;
              min-height: 115px;
            }
            .item_name{
              position: absolute;
              bottom: 3px;
              color: #fff;
              background-color: #0c0c0ccc;
              width: 100%;
              line-height: 40px;
              padding-left: 40px;
            }
          }
          .down_panel{
            padding: 12px 25px;
            p{
              line-height: 23px;
            }
          }
        }
        
      }
      
   }
</style>

