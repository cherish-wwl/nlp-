<template>
   <el-container class='solution_panel container_80' :bgUrl="showData.bgUrl" :style="'background:url('+showData.bgUrl+') no-repeat;'">
    <el-row>
      <el-col :span="24" class='text_center' >
        <h2 class="temp_title">{{ showData.name }}</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div class="icon_panel_item" @click="jumpOutUrl(item)" :style="'width:'+showData.width+';'" v-for="(item,index) in showData.data" :key="index">
        <div class="grid-content text_center full_height">
          <div class="hover_show full_height">
            <div class="up_panel">
              <img class='activeimg' :src="item.iconUrl"/>
              <p class="item_name font18" v-if="item.title && item.title !=''" >{{ item.title }}</p>
            </div>
            <div class="down_panel">
              <p class="smaller font_color_grey" v-for="(child,index) in item.desrc" :key="index">
                {{ child }}
              </p>
            </div>
          </div>
          <div class="defult_show">
            <div class="up_panel">
              <img class='activeimg' :src="item.iconUrl"/>
              <p class="item_name font18" v-if="item.title && item.title !=''" >{{ item.title }}</p>
            </div>
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
    props: ['showData'],
    methods:{
      jumpOutUrl (item) {
        console.log(item)
        if(item.linkUrl && item.linkUrl != '')
        window.open(item.linkUrl,'_blank')
      }
    }
   
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .solution_panel {  
     background-color: #f5f5f5;
     background-size:100%; 
     .temp_title{
       color: #fff;
     }
      .icon_panel{
        display: flex;
        justify-content: space-around;
        overflow: hidden;
        .icon_panel_item {
          position: relative;
          cursor: pointer;
          .full_height{
            height:100%;
          }
          .defult_show {
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              background-color: rgba(19, 147, 237, 0.4);
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 1;
              transform: translateY(0);              
              .activeimg{
                width:80%;
              }
          }
          .hover_show{
            opacity: 0;
            z-index: 0;
            background-color: #fff;
            -webkit-transition: opacity 0.35s, -webkit-transform 0.8s;
            transition: opacity 0.35s, transform 0.8s;
            -webkit-transform: translateY(350px);
            transform: translateY(350px);
            .up_panel{
              position: relative;
              background-color: rgba(8, 75, 230, 1);
              padding: 6px 0;
              img{
                width: 35%;
              }
              .item_name{
                color: #fff;
              }
            }
            .down_panel{
              padding: 12px 25px;
              p{
                line-height: 23px;
              }
            }
          } 
          &:hover{
           
            .hover_show{
              opacity: 1;
              transform: translateY(0);
            }
            .defult_show {
              opacity: 0;   
              -webkit-transition: opacity 0.8s, -webkit-transform 0.8s;
              transition: opacity 0.8s, transform 0.8s;
              -webkit-transform: translateY(-400px);
              transform: translateY(-400px);           
            }
          }
          
        }
        
      }
      
   }
</style>

