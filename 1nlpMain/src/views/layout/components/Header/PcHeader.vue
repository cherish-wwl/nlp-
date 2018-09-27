<template> 
  <div class="pcHeaderPanel">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index='0'>
        <router-link :to="{name:'home'}"><img src='../../../../assets/cnlp_logo.png'/></router-link>
      </el-menu-item>
      <el-submenu index="1" @click.native="isHidePanel(1,$event)">
        <template slot="title">产品服务 </template>
        <el-menu-item index="1-1" style="display:none;"></el-menu-item>
        <!-- 引入服务展示组件 -->
        <header-service-panel @handleFromHeaderServicePanel="handleFromHeaderServicePanel"></header-service-panel>
      </el-submenu>
      <el-submenu index="2" @click.native="isHidePanel(2,$event)">
        <template slot="title">解决方案 </template>
        <el-menu-item index="2-1" style="display:none;"></el-menu-item>
        <!-- 引入解决方案展示组件 -->
        <header-solutions-panel @handleFromHeaderSolutionsPanel="handleFromHeaderSolutionsPanel"></header-solutions-panel>
      </el-submenu>
      <el-menu-item index='3'  @click="jumpPage({name:'dataset'})">
        数据集
      </el-menu-item>
      <el-menu-item index='4'  @click="jumpPage({name:'innovation'})">
        创新平台
      </el-menu-item>
      <el-menu-item index='5' @click="jumpPage({name:'nlpschool'})">
        NLP学院
      </el-menu-item>
      <div class="rightPanel">
        <el-menu-item index='login' class='loginItem'>
          控制台
        </el-menu-item>
        <!-- <el-submenu index="userInfo" class="userInfoItem" v-if="isLogin">
          <template slot="title">{{ userName }}</template>
          <el-menu-item index="userInfo-1" @click="jumpToConsole">控制台</el-menu-item>
          <el-menu-item index="userInfo-1" @click="jumpToConsoleMine">个人中心</el-menu-item>
          <el-menu-item index="userInfo-2" @click="logout">退出</el-menu-item>
        </el-submenu> -->
     </div>      
    </el-menu>
  </div>
</template>
<script>
import store from '../../../../store'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
import HeaderServicePanel  from './HeaderServicePanel'
import HeaderSolutionsPanel from './HeaderSolutionsPanel'
export default {
   computed: {
      ...mapGetters([
        'userManageBaseUrL',
        'consoleBaseUrl',
      ])
    },
    components:{
      HeaderServicePanel,
      HeaderSolutionsPanel,
    },
    data() {
      return {
        activeIndex: '1',
        userName:"",
        isLogin:false,
      }
    },
    methods: {
       // 切换菜单事件
      handleSelect (key, keyPath) {
        // console.log(key, keyPath);
        // console.log(this.userManageBaseUrL)
        if(key == "login"){
          window.location.href = this.consoleBaseUrl
        }
      },
      // 点击判断是否显示下拉面板
      isHidePanel(index,e){
        if(e){
          if(e.target.className == "el-submenu__title"){
            var displayValue = document.querySelectorAll(".el-menu")[index].style.display
            if(displayValue == "none"){
              document.querySelectorAll(".el-menu")[index].style.display = ""
            }else{
              document.querySelectorAll(".el-menu")[index].style.display = "none"
            }
          }
        }
        
      },
      // 跳转页面
      jumpPage(params){
        this.activeIndex = "0"
        if(params.name == "innovation"|| params.name == "nlpschool"){
          let routeData = this.$router.resolve({
            name: params.name,
          });
          window.open(routeData.href, "_blank");
        }else{
          this.$router.push(params)
        }
        
      },
      // 处理从HeaderServicePanel组件传来的 跳转到服务列表页面 事件
      handleFromHeaderServicePanel (id) {
        // console.log("跳转到服务详情页面")
        document.querySelectorAll(".el-menu")[1].style.display="none" 
        this.isHidePanel(1)
        this.activeIndex = "1-1"
        Cookies.set("service_id",id)
        this.$router.push({name: 'serviceLists',params:{ rid: id.substring(0,3)}})
      },
      // 处理从HeaderSolutionsPanel组件传来的 跳转到解决方案列表页面
      handleFromHeaderSolutionsPanel(item){
        this.activeIndex = "2-1"
        document.querySelectorAll(".el-menu")[2].style.display="none"
        if(item.forwardType == '011002'){
          this.$router.push({name:item.solutionUrl,params:{id:item.id}})
        }else{
          window.open(item.solutionUrl)
        }
        document.querySelectorAll(".el-menu")[2].style.display="none"
        this.isHidePanel(2)
      },  
      // 退出登录
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      },
      // 跳转到管控台
      jumpToConsole(){
        window.location.href = this.userManageBaseUrL
      },
      // 跳转到个人中心
       jumpToConsoleMine(){
         window.location.href = this.consoleBaseUrl +"/#/mine"
       }
    },
    mounted () { 
      // console.log(getToken())
      if(getToken() != "" && getToken()){
        // store.dispatch('GetInfo').then(res => { // 拉取用户信息
        //   console.log("拉取用户信息")
        //   console.log(res)
          this.isLogin = true
        //   this.userName = res.data.userName
        // }).catch(() => {
        //   this.isLogin = false
        // })
       
      }else{
        this.isLogin = false
      }
     
    }
}
</script>

