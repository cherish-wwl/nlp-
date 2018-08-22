<template>
   <el-header height="61px">
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
        <el-menu-item index="10" @click="jumpPage">
          >>返回开放平台首页
        </el-menu-item>
        <el-submenu index="userInfo" class="userInfoItem">
          <template slot="title">{{ name }}</template>
          <el-menu-item index="userInfo-1" @click="jumpMine">账户信息</el-menu-item>
          <el-menu-item index="userInfo-2" @click="logout">退出</el-menu-item>
        </el-submenu>
     </div>      
    </el-menu>
    
   </el-header>
</template>

<script>
  import { getToken } from '@/utils/auth'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        userName:""
      }
    },
    computed:{
      ...mapGetters([
        'name',
        'userManageBaseUrL',
        'mainsiteBaseUrL'
      ])
    },
    methods: {
      // 跳转页面
      jumpPage(){
        window.location.href = this.mainsiteBaseUrL    
      },
      logout(){
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      },
      jumpMine(){
        this.$router.push({ name:"consoleMine" })
      }
    },
    mounted () {
     
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

 
</style>
