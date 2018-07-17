<template>
   <el-header>
     <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index='0'>
        <router-link :to="{name:'home'}"><img src='../../../../assets/cnlp_logo.png'/></router-link>
      </el-menu-item>
      <div class="loginDiv">
        <a @click="rebackPage"> >返回上一页 </a>
      </div> 
      <!--
      <div class="loginDiv">
        已有帐号，<a @click="handleSelect">立即登录</a>
      </div> -->

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
      handleSelect () {
        this.$emit('login', true);
      },
      rebackPage () {
        this.$emit("rebackPage")
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  .loginDiv{
    color: #9f9696;
    display: inline-block;
    float: right;
    line-height: 50px;
    font-size: small;
    a{
      color: #409eff;
    }
  }
</style>
