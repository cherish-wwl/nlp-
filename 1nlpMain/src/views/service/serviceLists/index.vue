<template>
  <div class="serviceLists-container">
    <!-- 服务列表页面-top简介组件---->
    <service-top-panel 
      :service_title = "serviceInfo.service_title" 
      :service_desc = "serviceInfo.service_desc"
      :service_bg_img = "service_bg_img"
    ></service-top-panel>
    <el-container class='service_class'>
      <!-- 基础服务左侧组件 -->
      <base-service-left-panel 
        :collapse-data = "collapseData"
        :active-names = "activeNames"
        :current-service-id = "currentServiceId"
        @chooseServiceItem = "chooseServiceItem">
      </base-service-left-panel>
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
import { serviceTopPanel, baseServiceLeftPanel, serviceRightPanel } from './components'
import { getMenus } from '@/api/header'
import { isMobile } from '@/utils/index'
import { getThirdServiceList } from '@/api/serviceLists'
import Cookies from 'js-cookie'
export default {
  components:{
    serviceTopPanel,
    baseServiceLeftPanel,
    serviceRightPanel
  },
  data (){
    return {
      service_bg_img:'',
      activeNames:['1'],
      collapseData:[],
      search_key:'',
      currentServiceId:"",
      activeItemId:0,
      thridList: null,
      serviceInfo:{
        service_title:'',
        service_desc:''
      },  
      showFreeCharge:''
    }
  },
  methods:{
    // 点击左侧，刷新右侧列表
    chooseServiceItem(child) {
      Cookies.set("service_id",child.id)
      this.currentServiceId = child.id
      // 刷新分页计数
      this.paginationTotal = 0
      this.paginationCurrentPage = 1
      // 清空搜索栏
      this.search_key = ''
      console.log("-----------------")
      console.log(child)
      //调用子组件refrushThridList ；刷新右侧服务列表
      this.$refs.serviceRightPanel.refrushThridList(child.id)  
      // 获取当前服务分类信息
      this.getCurrentServiceInfoById()
      // 更换页面背景图片
      if (child.img != "null" && child.img && child.img != null){
        this.service_bg_img = child.img
      }
      
    },
    // 初始化
    init(){
      console.log("初始化"+Cookies.get("service_id"))
      console.log(this.$route.query.isCharge)
      if( this.$route.query.isCharge && this.$route.query.isCharge == "false"){
        this.showFreeCharge = "012001"
      }else{
        this.showFreeCharge = ""
      }
      if(Cookies.get("service_id")){
        this.currentServiceId = Cookies.get("service_id") 
      }
      getMenus().then(response => {
        if(response.data.length == 0 ) return
        var parentId 
        var rootId
        if(this.currentServiceId != ""){
          rootId = this.currentServiceId.substring(0,3)
        }else{
          rootId = response.data[0].children[0].id.substring(0,3)
          this.currentServiceId = response.data[0].children[0].id
        }
        // 获取二级数据
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].id == rootId){
            this.collapseData = response.data[i].children 
          }
        } 
        this.parentId = this.currentServiceId.substring(0,6) 
        // 获取三级数据
        for(let j=0; j< this.collapseData.length;j++){
          if(this.collapseData[j].id == this.parentId){
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
        this.activeNames = [ this.currentServiceId.substring(0,6)+""]
        //调用子组件refrushThridList ；刷新右侧服务列表
        this.$refs.serviceRightPanel.refrushThridList()
        // 获取当前服务分类信息
        this.getCurrentServiceInfoById()
      }) 
    },
    
    getCurrentServiceInfoById () {
      var secondId = this.currentServiceId.substring(0,6)
      for( let i=0; i < this.collapseData.length; i++ ){
        if(secondId === this.collapseData[i].id){
          let Third = this.collapseData[i].children 
          for(let j = 0 ; j < Third.length; j++){
             if(this.currentServiceId == Third[j].id){
              //  console.log(Third[j].name)
                this.serviceInfo.service_title = Third[j].name 
                this.serviceInfo.service_desc = Third[j].descr 
                break 
             }
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
}
// iphone
@media screen  and (max-width: 1280px){
  .service_class{
    padding: 0;
  }
}
</style>
