<template>
  <el-aside width="200px" >
    <el-menu :default-active="activeIndex" :router="true">
      <el-menu-item index="/console/myService">
        <i class="el-icon-goods"></i>
        <span slot="title">我的服务</span>
      </el-menu-item>
      <el-menu-item index="/console/myApplicantion">
        <i class="el-icon-tickets"></i>
        <span slot="title">我的应用</span>
      </el-menu-item>
      <el-menu-item index="/console/myDataSet">
        <i class="el-icon-news"></i>
        <span slot="title">我的数据集</span>
      </el-menu-item>
      <el-menu-item index="/console/techDocument">
        <i class="el-icon-document"></i>
        <span slot="title">技术文档</span>
      </el-menu-item>
      <el-menu-item index="/console/mine">
        <i class="el-icon-setting"></i>
        <span slot="title">帐号信息</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  computed:{
    activeIndex (){
      if(this.$route.name == "consoleServiceDetail"){
        return  '/console/myService'
      }
      return this.$route.path
    }
  }
}
</script>
