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
        <!-- <router-link :to="{name:'home'}"><img src='../../../../assets/innovation/u2473.png'/></router-link> -->
        <img src='../../../assets/cnlp_logo.png'/>
      </el-menu-item>
      
      <div class="rightPanel">
        <el-menu-item index="10" @click="jumpPage({name:'home'})">
          >>返回开放平台首页
        </el-menu-item>
        <el-menu-item index='login' class='loginItem' v-if="!isLogin">
          登录
        </el-menu-item>
        <el-submenu index="userInfo" class="userInfoItem" v-if="isLogin">
          <template slot="title">{{userName}}</template>
          <el-menu-item index="userInfo-1">个人中心</el-menu-item>
          <el-menu-item index="userInfo-2" @click="logout">退出</el-menu-item>
        </el-submenu>
     </div>      
    </el-menu>
    
   </el-header>
</template>

<script>
  import { getToken, getUserName } from '@/utils/auth'
  export default {
    data() {
      return {
        isLogin:false,
        userName:getUserName()
        
      }
    },
    computed:{
    
    },
    methods: {
      handleSelect () {
        this.$emit('login', true);
      },
      // 跳转页面
      jumpPage(params){
        this.$router.push(params)
      },
      logout(){
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
    },
    mounted () {
      // console.log(getToken())
      if(getToken() != "" && getToken()){
        this.isLogin = true
      }else{
        this.$emit('login', true);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

 
</style>
