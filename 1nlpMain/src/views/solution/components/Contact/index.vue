<template>
   <el-container class='contact_panel container_80'>
    <el-row>
      <el-col :span="24">
        <h2 class="temp_title">联系我们</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <el-col :lg="12" :xl="12" :md="24" :sm="24" :xs="24">
        <p class="font16">{{ contactData.companyName }}</p>
  
        <p class="font14">网址：<a :href="contactData.companyUrl" target='_blank'>{{ contactData.companyUrl }}</a></p>
        <p class="font14">联系人：{{ contactData.conactPensonName }} </p>
        <br />
    
        <p class="font14">电话：{{ contactData.conactPensonPhone }}</p>
        <p class="font14">Email: {{ contactData.conactPensonEmail }}</p>
      </el-col>
      <el-col :lg="12" :xl="12" :md="24" :sm="24" :xs="24">
        <el-col :lg="12" :xl="12" :md="12" :sm="12" :xs="24" v-for="item in contactData.QRcode" :key="item.url" class="text_center">
          <img :src="item.url"/>
          <p class="font16">{{item.desc}}</p>
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
    props: ['contactData'],
   
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .contact_panel {  
     background-color: #f5f5f5;
      .icon_panel{
        color:#666;
        img{
          width: 150px;
          height:150px;
        }
      }
      
   }
</style>

