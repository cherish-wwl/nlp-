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
        <img src='../../../../assets/innovation/u2473.png'/>
      </el-menu-item>
      <el-menu-item index='5'  @click="scrollAnimation('#innovation_support')">
        扶持计划
      </el-menu-item>
      <!-- <el-menu-item index='4' >
        产品管理
      </el-menu-item> -->
      <el-menu-item index='3' @click="scrollAnimation('#innovation_example')">
        优秀案例
      </el-menu-item>
      <!-- <el-menu-item index='2' >
        AI辅助工具集
      </el-menu-item> -->
      <!-- <el-menu-item index='1' >
        技术咨询
      </el-menu-item> -->
      <div class="rightPanel">
        <el-menu-item index="10" @click="jumpPage({name:'home'})">
          >>返回开放平台首页
        </el-menu-item>
        <!-- <el-menu-item index='controlPanel' class='controlPanel'>
          控制台
        </el-menu-item>
        <el-menu-item index='login' class='loginItem' v-if="!isLogin">
          登录
        </el-menu-item>
        <el-menu-item index='userInfo' class="userInfo" v-if="isLogin">
          {{userName}}
        </el-menu-item> -->
     </div>      
    </el-menu>
    
   </el-header>
</template>

<script>
import { scrollAnimation } from '@/utils/scrollAnimation.js'
  export default {
    data() {
      return {
        isLogin:false,
      }
    },
    computed:{
    
    },
    methods: {
      handleSelect () {
        this.$emit('login', true);
      },
      // 滚动动画
      scrollAnimation(dom){
        scrollAnimation(dom)
      },
      // 跳转页面
      jumpPage(params){
        this.$router.push(params)
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
