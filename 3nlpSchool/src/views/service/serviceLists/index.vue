<template>
  <div class="serviceLists-container">
    <el-row class='service_info'>
      <img class='service_bg_img' :src="service_bg_img" onerror="this.src='/static/sevice_banner_default.jpg';return false;" />
      <div class='title_desc'>
        <h1> {{ serviceInfo.service_title }} </h1>
        <p> {{ serviceInfo.service_desc }} </p>
      </div>
    </el-row>
    <el-container class='service_class'>
      <el-aside width="200px" class='aside_style'>
        <el-collapse v-model="activeNames" @change="handleChange" >
          <el-collapse-item  v-for='item in collapseData' :key='item.id'  :name="item.id">
             <template slot="title">
               <svg-icon :icon-class="item.icon" ></svg-icon>
               <span class="font18">{{ item.name }}</span>
            </template>
            <ul>
              <li class='font14' 
                v-for="child in item.children" 
                :class="currentServiceId == child.id ?'active':''" 
                :key="child.id" 
                @click="chooseServiceItem(child)">
                {{ child.name }}
              </li>
            </ul>
          </el-collapse-item>
         
        </el-collapse>
      </el-aside>
      <el-main class='service_content' >
        <el-row class='service_tools' >
          <el-col :span='12' class='font16 nowarp'>
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
            <span >{{ serviceInfo.service_title | noMoreThenFonts}}</span>
            &nbsp;&nbsp;
            <span>  
              <el-input placeholder="请输入内容" size="mini" v-model="search_key" v-on:change="searchThirdList" class="search_input" suffix-icon="el-icon-search"></el-input>
            </span>
          </el-col>
          <el-col  :span='12' class='text_right'>
            <span class='smaller'>排序：</span>
            &nbsp;
            <span class='small tool-sort-icon' :class="sortType != 1 ? '' : (countSort ? 'sort_desc' : 'sort_asc')"   @click="sortList(1)">使用次数&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
            &nbsp;
            <span class='small tool-sort-icon' :class="sortType != 2 ? '' : (timeSort ? 'sort_desc' : 'sort_asc')" @click="sortList(2)">发布时间&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <!-- <span class='tool-style-icon active'><i class="fa fa-bars" aria-hidden="true"></i></span>
            <span class='tool-style-icon'><i class="el-icon-menu" aria-hidden="true"></i></span> -->
          </el-col>
        </el-row>
        <el-row class='service_list' >
            <el-row class='item' v-for="item in thridList" :key='item.id'>
              <el-col :span='8' class='item_img' style="width:330px;"> 
                <img 
                  :src="item.serviceIcon && item.serviceIcon != '' ?item.serviceIcon:'/static/default.png'" 
                  onerror="this.src='/static/default.png';return false;" />
              </el-col>
              <el-col :span='16' class='item_info'>
                <h3>
                  {{ item.serviceName }}
                </h3>
                <div class='f_c_grey'>
                  <span class="font14">
                    服务类型:&nbsp;&nbsp;  {{item.className}}&nbsp; &nbsp; &nbsp; 
                    提供者：{{ item.academyName }}&nbsp; &nbsp; 
                    发布时间：{{ item.rel_time | formatTime}}
                  </span>
                </div>
                <p class="font14">
                  {{ item.serviceDescr}}
                </p>
                <div>
                  <!-- <el-button type="primary" class="font14 custom_button_blue">立即使用</el-button> -->
                  <el-button  class="font16" @click="seeDetailPage(item)">
                    查看详情
                  </el-button>
                </div>
                <div class="freeImgBox" v-if="item.isCharge">
                  <img  src="/static/services/freeapi_icon01.png"/>
                </div>
              </el-col>
            </el-row> 
        </el-row>
        <el-row class="text_center">
          <el-pagination
            layout="sizes,prev, pager, next"
            :total="paginationTotal"
            :page-sizes="[2, 5, 10, 20]"
            :page-size="paginationPageSize"
            :current-page="paginationCurrentPage"
            @current-change="changePaginationCurrentPage"
            @size-change="handlePaginationPageSize">
          </el-pagination>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getMenus } from '@/api/header'
import { getThirdServiceList } from '@/api/serviceLists'
import Cookies from 'js-cookie'
export default {
  data (){
    return {
      service_bg_img:'',
      activeNames:['1'],
      collapseData:[],
      search_key:'',
      currentServiceId:"",
      activeItemId:0,
      thridList: [],
      serviceInfo:{
        service_title:'',
        service_desc:''
      },
      paginationPageSize:2,
      paginationTotal:0,
      paginationCurrentPage:1,
      countSort:false,
      timeSort:false,
      sortType:1,
      storeDate:this.$store.state,
      showFreeCharge:''
    }
  },
 
  filters: {
    getImage (name) {
      // console.log(name)
       var url ="static/services/"+name.toString()
      return url
    },
    formatTime (time){
      console.log(time)
      if(time){
        return time.split(" ")[0]
      }
      return ''
      
    },noMoreThenFonts(str){
      return str
    }
  },
  methods:{
    // 排序
    sortList(type){
      if(type == 1){
        // 使用次数
        this.sortType = 1
        this.countSort = !this.countSort
      }else if(type == 2){
        // 发布时间
        this.sortType = 2
        this.timeSort = !this.timeSort
      }
      
      // 刷新分页计数
      this.paginationTotal = 0
      this.paginationCurrentPage = 1
      // 刷新列表
      this.refrushThridList()
    },
    handleChange(val) {
      console.log("handleChange");
    },
    // 按关键字查询
    searchThirdList(){
       console.log("查询关键字："+this.search_key)
      // 刷新分页计数
      this.paginationTotal = 0
      this.paginationCurrentPage = 1
 
      this.refrushThridList()
      
    },
    // 点击第几页
    changePaginationCurrentPage(currentPage){
      console.log(currentPage)
      this.paginationCurrentPage = currentPage
      this.refrushThridList()
    },
    // 显示条数
    handlePaginationPageSize(pageSize){
      console.log(pageSize)
      this.paginationPageSize = pageSize
      this.refrushThridList()
    },
    // 点击左侧，刷新右侧列表
    chooseServiceItem(child) {
      //  console.log(id);

      Cookies.set("service_id",child.id)
      this.currentServiceId = child.id
      // 刷新分页计数
      this.paginationTotal = 0
      this.paginationCurrentPage = 1
      // 清空搜索栏
      this.search_key = ''
      this.refrushThridList ()
      // 更换页面背景图片
      if (child.img != "null" && child.img && child.img != null){
        this.service_bg_img = child.img
      }
      
    },
    // 初始化
    init (){
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
        this.refrushThridList ()
        
      }) 
    },
    refrushThridList(){
      var data ={
        class_id:this.currentServiceId, //id
        pageNow:this.paginationCurrentPage, //当前页
        pageSize:this.paginationPageSize,//每页条数
        keyword:this.search_key,//查询的关键字
        useNum:"",//使用次数排序
        relTime:"",//接入时间排序
      }
      
      if(this.sortType == 1){//使用次数排序
        if(this.countSort){
          data.useNum = 1//1:倒序排列  2：升序排列
        }else{
          data.useNum = 2
        }
        data.relTime = ""
      }else{//接入时间排序
        if(this.timeSort){
          data.relTime = 1//1:倒序排列  2：升序排列
        }else{
          data.relTime = 2
        }
        data.useNum = ""
      }
      console.log(this.sortType)
      if( this.showFreeCharge == "012001"){
        data.isCharge = this.showFreeCharge
      }
      console.log(data)
      getThirdServiceList(data).then(responce =>{
        this.thridList = responce.data 
        this.paginationTotal = responce.total
        this.getCurrentServiceInfoById ()
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
    },
    // 跳转到详情页
    seeDetailPage (item) {
      // 跳转到详情页
      console.log("---------------跳转到详情页--------------------")
      console.log("id:"+item.id)
      if(item.forwardType == "014002"){//定制详情页面
        this.$router.push({name:item.innerUrl})
      }else if(item.forwardType == "014003"){//跳转外部url
        window.open(item.innerUrl,'_blank')
        return
      }else{//通用详情页
        this.$router.push({name:'serviceDetail',params:{'service_id':item.id}})
      }
    },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    
  },
  mounted () {
    this.init()
  },
  watch:{
    '$route': "init"
  }
    
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.serviceLists-container {
  background-color: #fafafa;
  .service_info{
    position: relative;
    .service_bg_img{
      width: 100%;
      max-height: 300px;
      background-color: #9d9a96;
      min-height: 300px;
    }
    .title_desc {
      position: absolute;
      top: 22%;
      color: #fff;
      left: 10%;
    }
  }
  .service_class{
    padding:22px 8%;
    .aside_style{
      overflow: hidden;
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
          line-height: 35px;
          padding-left: 30px;
          cursor: pointer;
          &:hover,&.active{
            border-right:3px solid blue;
            background-color: #dcdcdf78;
          }
        }
      }
      .el-collapse .el-collapse-item{
        .el-collapse-item__header , .el-collapse-item__wrap{
          border: none!important;
          .el-icon-arrow-right{
            display: none!important;
          }
        }
      }
    }
    .service_content{
      .service_tools{
        margin-bottom: 20px;
        margin-top: -12px;
        .smaller{
          color: #827f7f;
        }
        .search_input{
          width: auto;
        }
        .tool-style-icon{
          cursor: pointer;
          &:hover,&.active{
            color: #5454ed;
          }
        }
        .tool-sort-icon{
          cursor: pointer;
          position: relative;
          i.fa.fa-sort-asc {
            position: absolute;
            right: 0;
            top: 1px;
          }
          &.sort_desc{
            i.fa.fa-sort-desc {
              color: blue;
            }
          }
          &.sort_asc{
            i.fa.fa-sort-asc {
              color: blue;
            }
          }
        }
      }
    }
    .service_list{
      .item{
        background-color: #fff;
        padding: 20px 20px 20px 0;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover{
          -webkit-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
          box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
        }
        h4{
          margin-top: 0;
          font-weight: 500;
        }
        img{
          max-width:100%;
        }
        .freeImgBox {
          position: absolute;
          top: 0;
          right: 0;
        }
        .item_info{
          padding-left: 10px;
          padding-bottom: 10px;
          .f_c_grey{
            color: #827f7f;
          }
        }
        
      }
    }
  }
}


</style>
