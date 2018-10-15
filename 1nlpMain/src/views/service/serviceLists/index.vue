<template>
  <div class="serviceLists-container">
    <!-- 服务列表页面-top简介组件-->
    <service-top-panel 
      :service_title = "serviceInfo.service_title" 
      :service_desc = "serviceInfo.service_desc"
      :service_bg_img = "service_bg_img"
    ></service-top-panel>
    <el-container class='service_class'>
      <el-aside width="230px" class='aside_style hidden-md-and-down'>
        <!-- 左侧组件 --> 
        <left-mnue :menuData="collapseData" :defaultActive="currentServiceId" @handleSelect="chooseServiceItem"/>
      </el-aside>
      <!-- 服务列表组件 -->
      <service-right-panel
        ref = "serviceRightPanel"
       :service-info = "serviceInfo"
       :show-free-charge = "showFreeCharge"
       :thrid-list-from-p = "thridList"
       :current-service-id = "currentServiceId">
      </service-right-panel>
    </el-container>
  </div>
</template>

<script>
import { serviceTopPanel, baseServiceLeftPanel, serviceRightPanel, applicateServiceLeftPanel } from './components'
import { getMenus } from '@/api/header'
import { isMobile } from '@/utils/index'
import { getThirdServiceList } from '@/api/serviceLists'
import  LeftMnue  from '@/components/LeftMnue'
import Cookies from 'js-cookie'
export default {
  components:{
    serviceTopPanel,
    baseServiceLeftPanel,
    serviceRightPanel,
    applicateServiceLeftPanel,
    LeftMnue
  },
  data (){
    return {
      service_bg_img: '',
      activeNames: ['1'],
      collapseData: [],
      search_key: '',
      currentServiceId: "",
      activeItemId: 0,
      thridList: null,
      serviceInfo: {
        service_title: '',
        service_desc: ''
      },  
      showFreeCharge: '',
      rootId: null
    }
  },
  methods:{
    // 点击左侧，刷新右侧列表
    chooseServiceItem(id) {
      Cookies.set("service_id", id)
      this.currentServiceId = id
      // 获取当前服务分类信息
      this.getCurrentServiceInfoById()
      this.getInfoById(id, this.collapseData)    
    },
    getInfoById(id, data) {
      for(let i = 0; i<data.length;i++){
        if(data[i].children){
          this.getInfoById(id, data[i].children)
        }else{
          if(data[i].id == id){
            console.log(data[i].img)
            this.service_bg_img= data[i].img
            break
          }
        }
      }
    },
    // 初始化
    init(){
      // 获取是否免费字段
      if( this.$route.query.isCharge && this.$route.query.isCharge == "false"){
        this.showFreeCharge = "012001"
      }else{
        this.showFreeCharge = ""
      }
      console.log(Cookies.get("service_id"))
      // 获取服务id
        // 从路径中获取服务id
      if(this.$route.query.sid){
        // this.currentServiceId = this.$route.query.sid
        this.rootId = this.currentServiceId.substring(0,3)
      }
        // 从cookies中获取服务id
      if(Cookies.get("service_id")){
        this.currentServiceId = Cookies.get("service_id") 
        this.rootId = this.currentServiceId.substring(0,3)
      }

      
      // 获取所有服务分类列表
      getMenus().then(response => {
        if(response.data.length == 0 ) return
        // 获取默认值
        if(this.currentServiceId == ""){
          // 设置默认值为返回的第一个分类下的第一个服务分类
          this.rootId = response.data[0].children[0].id.substring(0,3)
          this.currentServiceId = response.data[0].children[0].id
        }
        var parentId 

        
        
        // 遍历 获取二级数据
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].id == this.rootId){
            this.collapseData = response.data[i].children 
          }
        } 
        parentId = this.currentServiceId.substring(0,6) 
        this.activeNames = [ parentId + ""]

        if( this.rootId =="001"){
          // 基础服务列表
            this.initBaseService(parentId)
        }else{
          // 应用服务列表
            this.initApplicationService()
        }
        // 获取当前服务分类信息
        this.getCurrentServiceInfoById()
      }) 
    },
    // 初始化应用服务列表
    initApplicationService(){
        // 暂无
    },
    // 初始化基础服务列表
    initBaseService(parentId){
      // 获取三级服务分类数据
        for(let j=0; j< this.collapseData.length;j++){
          if(this.collapseData[j].id == parentId){
            if(this.currentServiceId.length <= "6"){
              // 当前服务id 不正确  默认加载第一条数据
              this.currentServiceId = this.collapseData[j].children[0].id
              this.service_bg_img = this.collapseData[j].children[0].img
            }else{
              for(var c = 0; c<this.collapseData[j].children.length;c++){
                if(this.collapseData[j].children[c].id == this.currentServiceId){
                  this.service_bg_img = this.collapseData[j].children[c].img
                }
              }
            }
          }
        }    
    },
    // 获取当前服务的基础信息
    getCurrentServiceInfoById () {
      // console.log("123=================")
      // console.log(this.currentServiceId)
      var secondId = this.currentServiceId.substring(0,6)
      for( let i=0; i < this.collapseData.length; i++ ){
        if(secondId === this.collapseData[i].id){
          let Third = this.collapseData[i]
          if( Third.children ){
            for(let j = 0 ; j < Third.children.length; j++){
              if(this.currentServiceId == Third.children[j].id){
                  this.serviceInfo.service_title = Third.children[j].name 
                  this.serviceInfo.service_desc = Third.children[j].descr 
                  break 
              }
            }
          }else{
            this.serviceInfo.service_title = this.collapseData[i].name 
            this.serviceInfo.service_desc = this.collapseData[i].descr 
            break 
          }
        }
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.serviceLists-container {
  background-color: #fafafa; 
  .service_class{
    padding:22px 8%;
  }
  .aside_style{
    overflow: hidden;
  }
}
// iphone
@media screen  and (max-width: 1280px){
  .service_class{
    padding: 0;
  }
}
</style>
