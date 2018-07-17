<template>
   <el-container class='specialist_panel container_80'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="temp_title temp_title_line">{{ specialist.name }}</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div 
        class="icon_panel_item" 
        v-for="(item,index) in specialist.data" 
        @click="linkPage(item)" 
        :key="index">
        
        <div class="left">
          <img :src="item.img"/>
        </div>
        <div class="right">
          <label class="font_color_grey3"> <span>{{ item.teamname }}负责人：{{item.principal}}</span></label>
          <p class="small font_color_grey2">{{item.detail}}</p>
          <div class="smaller font_color_grey2 float_right" >
            <a  href="javaScript:void(0)">
              >> 了解更多
            </a>
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
    methods:{
      linkPage(item){
        if(item.type ==1){
          // 跳转到专家详情页面
          this.$router.push({path:item.url})    
        }else{
          window.open(item.url,"_blank")
        }
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
          align-items: center;
          border: 1px solid #ededed;
          &:hover{
            -moz-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            -webkit-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
          }
          .left {
            padding: 20px;
            img{
              width: 145px;
            }  
          }
          .right{
            padding-right: 20px;
            a{
              text-decoration: underline;
            }
          }
        }
        
      }
      
   }
</style>

