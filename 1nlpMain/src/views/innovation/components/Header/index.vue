<template>
   <el-header class="innoveation_mbHeaderPanel">
     <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#000"
      >
      <el-menu-item index='0'>
        <!-- <router-link :to="{name:'home'}"><img src='../../../../assets/innovation/u2473.png'/></router-link> -->
        <img src='../../../../assets/innovation/u2473.png'/>
      </el-menu-item>
      <el-menu-item index='5'  class="hidden-md-and-down" @click="scrollAnimation('#innovation_support')">
        扶持计划
      </el-menu-item>
      <!-- <el-menu-item index='4' >
        产品管理
      </el-menu-item> -->
      <el-menu-item index='3' class="hidden-md-and-down" @click="scrollAnimation('#innovation_example')">
        优秀案例
      </el-menu-item>
      <!-- <el-menu-item index='2' >
        AI辅助工具集
      </el-menu-item> -->
      <!-- <el-menu-item index='1' >
        技术咨询
      </el-menu-item> -->
      <div class="rightPanel hidden-md-and-down">
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
      <el-menu-item style="float:right;" class="hidden-lg-and-up" index="99">
        <el-dropdown trigger="click"  @command="handleCommand">
          <span class="el-dropdown-link">
            <a class="fc_fff"><i class="fa fa-bars" aria-hidden="true"></i></a>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">扶持计划</el-dropdown-item>
            <el-dropdown-item command="b">优秀案例</el-dropdown-item>
            <el-dropdown-item command="c">返回开放平台首页</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>  
   </el-header>
</template>

<script>
import { scrollAnimation } from '@/utils/scrollAnimation.js'
  export default {
    data() {
      return {
        isLogin:false,
        showPanel:false
      }
    },
    computed:{
    
    },
    methods: {
      handleCommand(e){
        if(e == "a"){
          this.scrollAnimation('#innovation_support')
        }
        if(e == "b"){
          this.scrollAnimation('#innovation_example')
        }
        if(e == "c"){
          this.jumpPage({name:'home'})
        }
      },
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
    // display: inline-block;
    float: right;
    line-height: 50px;
    font-size: small;
    a{
      color: #409eff;
    }
  }
// mb
@media screen and (max-width: 1280px){
  .header-container {
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    
  }
  .el-dropdown-menu {
    padding: 0;
    margin: 0; 
    // right: 0;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;   
    box-shadow: none; 
    li{
      color: #fff;
    }
    
  }
 
}
</style>
