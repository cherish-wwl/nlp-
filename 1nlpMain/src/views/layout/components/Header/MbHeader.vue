<template>
  <div class="mbHeaderPanel" :style="'top:'+MbHeaderTopValue+';'">
    <!-- 主导航  固定不动-->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#000">
      <el-menu-item index='0'>
        <router-link class="logo-img" :to="{name:'home'}"><img src='../../../../assets/cnlp_logo.png'/></router-link>
      </el-menu-item>
      <el-menu-item index='9' class="float_right">
        <a class="fc_fff"  @click="showPanel = showPanel?false:true"><i class="fa fa-bars" aria-hidden="true"></i></a>
      </el-menu-item>
    </el-menu>
     <!-- 右侧导航 -->
    <div class="toggleMask" :class="showPanel?'active':''" @click="togglePanel($event)">
      <div class="togglePanel">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff">
          <el-submenu index="1">
            <template slot="title">
              <span>产品服务</span>
            </template>
            <el-submenu :index="'1-'+item.id" v-for="item in serviceList" :key="item.id">
              <template slot="title">{{ item.name }}</template>
              <el-submenu v-if="item.id == '001'" :index="'1-'+item.id+child.id" v-for="child in item.children" :key="item.id+child.id">
                <template slot="title">{{ child.name }}</template>
                <el-menu-item 
                :index="'1-'+item.id+child.id+child2.id" 
                v-for="child2 in child.children" 
                @click="linkServiceListPage(child2.id)"
                :key="child2.id">
                  {{ child2.name }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-if="item.id == '002'" 
                :index="'1-'+item.id+child3.id"
                v-for="child3 in item.children" 
                @click="linkServiceListPage(child3.id)"
                :key="child3.id">
                  {{ child3.name }}
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>解决方案</span>
            </template>
             <el-menu-item 
             @click="linkSolutionPage(item)"
             :index="'2-'+index" 
             v-for="(item,index) in solutionsList" :key="index">
               {{item.solutionName}}
             </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <span slot="title">数据集</span>
              <el-menu-item 
              @click="jumpPage({name:'dataset',query:{'id':item.id+''}})"
              :index="'2-'+index" 
              v-for="(item,index) in datasetList" :key="index">
                {{item.name}}
              </el-menu-item>
          </el-submenu>
          <el-menu-item index="4" @click="jumpPage({name:'innovation'})">
            
            <span slot="title">创新平台</span>
          </el-menu-item>
          <el-menu-item index="5" @click="jumpPage({name:'nlpschool'})">
            <span slot="title">NLP学院</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
export default {
  props: [ "serviceList", "solutionsList", "datasetList" ],
  data () {
    return {
      activeIndex: '1',
      showPanel:false,
      // serviceList:null,
      // solutionsList:null,
      // datasetList:null
    }
  },
  computed:{
    ...mapGetters([
      "MbHeaderTopValue"
    ])
  },
  methods:{
    togglePanel(e){  
      var classNameText = e.target.className
      if( classNameText.indexOf("toggleMask") != -1 ){
        this.showPanel = !this.showPanel
      }
    },
    // 跳转到服务详情页面 
    linkServiceListPage (id) {
      Cookies.set("service_id",id)
      this.showPanel = false
      this.$router.push({name: 'serviceLists',params:{ rid: id.substring(0,3) , ramdom: (new Date()).getSeconds() }})
    },
    // 跳转到解决方案对应页面
    linkSolutionPage(item) {
      if(item.forwardType == '011002'){
        this.showPanel = false
        this.$router.push({name:item.solutionUrl,params:{id:item.id}})
      }else{
        window.open(item.solutionUrl)
      }
    },
    // 跳转页面
    jumpPage(params){
      this.showPanel = false
      this.$router.push(params)
    }
  },
  mounted() {
    
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 

</style>

