<template>
   <el-container class='applicationScene2'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="font30">推荐场景</h2>  
      </el-col>
    </el-row>
    <el-row class='panel'>
      <el-col class='item' :lg="8" :md="8" :sm="24" :xl="8" :xs="24" v-for="(item,index) in sceneData" :key="index" v-if="item.relateType=='006002'">
        <el-col :span="5">
          <img class="img " :src="item.banner">
        </el-col>
        <el-col :span="19"  class="content">
          <label class="font18">{{ item.title }}</label>
          <p class="font16">{{ item.content }}</p>
        </el-col>
      </el-col>
    </el-row>
   </el-container>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    },
    props:["sceneData"]
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .applicationScene2 {
    display: block;
    background-size: 100% 100%;  
    
    
    h2{
      font-weight:500;
      margin: 35px 0;
    }
    .panel{
     
      .item {
        // width: 24%;
        // display: flex;
        background-color:#f2f2f238;
        cursor: pointer;
        padding: 20px;
        &:hover{
          background-color: #4945458a;
        }
        &:not(:last-child){
          border-right: 1.5px solid #212121;
        }
        .content{
          padding-left: 10px;
         
          label{
            font-weight: 500;
          }
        }
      }
    }
    
    
  }
// pc
@media screen and ( min-width: 1024px){
  .applicationScene2 {
    color: #fff;
    background:url('../../../../../assets/sevice_details/u513.jpg') no-repeat; 
    background-size: 100% 100%;  
    padding-bottom: 50px;
    margin-bottom: 50px;
    .panel{
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0 19rem;
    }
  }
}
// mb
@media screen and ( max-width: 1023px){
  .applicationScene2 {
    color: #000;
    .panel{
      color: #fff;
      .item{
        margin-bottom: 1rem;
        background:url('../../../../../assets/sevice_details/u513.jpg');    
        background-size: cover;   
      }
    }
  }
}
</style>

