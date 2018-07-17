<template>
  <el-container class='cooperation_platform container_80'>
    <el-row class="text_center">
      <h2 class="temp_title temp_title_line">合作伙伴</h2>
    </el-row>
    <el-row class="display_panel">
   
      <el-col :span="cooperationData.col" class="item" v-for="(item,index) in cooperationData.data" :key="index">
         <img  :src='item'/>
      </el-col>
      
    </el-row>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0
    }
  },
  props:["cooperationData"]
}
</script>
<style lang="scss" scoped>
.cooperation_platform {
  display: block;
  
  .display_panel{
   
    .item{
      padding: 5px;
      img{
        // cursor: pointer;
        width: 100%;
        border: 1px solid #e5e5e5;
      }
    }
    
  }
}
</style>

