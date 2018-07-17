<template>
   <el-container class='contact_panel container_80'>
    <el-row>
      <el-col :span="24">
        <h2 class="temp_title">联系我们</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <el-col :span="12">
        <p>沈阳雅译网络技术有限公司</p>
  
        <p class="small">网址：<a href="http://www.yatrans.com" target='_blank'>http://www.yatrans.com</a></p>
        <p class="small">联系人：宁义明 </p>
        <br />
    
        <p class="small">电话：15009885010</p>
        <p class="small">Email: business@yatrans.com</p>
      </el-col>
      <el-col :span="12">
        <el-col :span="12" class="text_center">
          <img src="static/solution/xiaoniu/u1764.png"/>
          <p >小牛翻译微信公众号</p>
        </el-col>
        <el-col :span="12" class="text_center">
          <img src="static/solution/xiaoniu/u1766.png"/>
          <p>扫描下载</p>
          <p>小牛翻译APP安卓版</p>
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

