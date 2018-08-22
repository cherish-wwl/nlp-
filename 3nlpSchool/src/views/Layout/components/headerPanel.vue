<template>
   <el-header>
     <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff"
      >
      <el-menu-item index='0'>
        <img src='../../../assets/nlpScloolLogo.png'/>
      </el-menu-item>
      <el-menu-item index='5' >
        <!-- <a>AI课程</a> -->
      </el-menu-item>
      <!-- <el-menu-item index='4' >
        智能问答
      </el-menu-item> -->
      <el-menu-item index='3' >
        <!-- <a >专家互动</a> -->
      </el-menu-item>
      <div class="rightPanel">
        <el-menu-item index="10" @click="jumpPage({name:'home'})">
          >>返回开放平台首页
        </el-menu-item>
       
     </div>      
    </el-menu>
    
   </el-header>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },
    computed:{
    
    },
    methods: {
      // 跳转页面
      jumpPage(params){
        // this.$router.push(params)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  .loginDiv{
    color: #9f9696;
    // display: inline-block;
    float: right;
    line-height: 50px;
    font-size: small;
    a{
      color: #409eff;
    }
  }
</style>