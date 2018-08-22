<template>
   <el-container class='contact_panel container_80'>
    <el-row>
      <el-col :span="24">
        <h2 class="temp_title">联系我们</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <el-col :lg="12" :xl="12" :md="24" :sm="24" :xs="24">
        <p class="font16">沈阳雅译网络技术有限公司</p>
  
        <p class="font14">网址：<a href="http://www.yatrans.com" target='_blank'>http://www.yatrans.com</a></p>
        <p class="font14">联系人：宁义明 </p>
        <br />
    
        <p class="font14">电话：15009885010</p>
        <p class="font14">Email: business@yatrans.com</p>
      </el-col>
      <el-col :lg="12" :xl="12" :md="24" :sm="24" :xs="24">
        <el-col :lg="12" :xl="12" :md="12" :sm="12" :xs="24" class="text_center">
          <img src="static/solution/xiaoniu/u1764.png"/>
          <p class="font16">小牛翻译微信公众号</p>
        </el-col>
        <el-col :lg="12" :xl="12" :md="12" :sm="12" :xs="24" class="text_center">
          <img src="static/solution/xiaoniu/u1766.png"/>
          <p class="font16">扫描下载</p>
          <p class="font16">小牛翻译APP安卓版</p>
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
    props: ['featureData'],
   
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

