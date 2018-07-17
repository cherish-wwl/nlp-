<template>
   <el-header>
     <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index='0'>
        <img @click="jumpPage" src='../../../../assets/cnlp_logo.png' />
      </el-menu-item>
      <!-- <div class="loginDiv" v-if="$route.name=='register'">
  
        <a @click="rebackPage">已有账号,立即登录</a>
      
      </div>  -->
      <!--
      <div class="loginDiv">
        已有帐号，<a @click="handleSelect">立即登录</a>
      </div> -->

    </el-menu>
    
   </el-header>
</template>

<script>
  import { getCommonData }  from "@/api/localData"
  export default {
    data() {
      return {
        miansiteUrl:''
      }
    },
    computed:{
    
    },
    methods: {
      handleSelect () {
      },
      rebackPage () {
        this.$router.push({name:'login'})
      },
      jumpPage() {
         window.open( this.miansiteUrl )
      }
    },mounted() {
      getCommonData().then(res => {
        this.miansiteUrl = res.mainsiteUrl
      })
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
