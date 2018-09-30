<template>
  <el-main class='service_content' >
    <el-row class='service_tools hidden-md-and-down' >
      <el-col :span='12' class='font16 nowarp'>
        <i class="fa fa-paper-plane font18" aria-hidden="true"></i>
        <span class="font18">{{ serviceInfo.service_title | noMoreThenFonts}}</span>
        &nbsp;&nbsp;
        <span>  
          <el-input placeholder="请输入内容" size="mini" v-model="search_key" v-on:change="searchThirdList" class="search_input font14" suffix-icon="el-icon-search"></el-input>
        </span>
      </el-col>
      <el-col  :span='12' class='text_right'>
        <span class='font14'>排序：</span>
        &nbsp;
        <span class='font16 tool-sort-icon' :class="sortType != 1 ? '' : (countSort ? 'sort_desc' : 'sort_asc')"   @click="sortList(1)">使用次数&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
        &nbsp;
        <span class='font16 tool-sort-icon' :class="sortType != 2 ? '' : (timeSort ? 'sort_desc' : 'sort_asc')" @click="sortList(2)">发布时间&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
      </el-col>
    </el-row>
    <el-row class='service_list' >
        <el-row class='item' v-for="item in thridList" :key='item.id'>
          <el-col :span='8' class='item_img' > 
            <img 
              :src="item.serviceIcon && item.serviceIcon != '' ?item.serviceIcon:'/static/default.png'" 
              onerror="this.src='/static/default.png';return false;" />
          </el-col>
          <el-col :span='16' class='item_info'>
            <h3 class="font18">
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
    <el-row class="text_center service_pager" id="pagination_tools">
      <el-pagination
        layout="sizes,prev, pager, next"
        :total="paginationTotal"
        :pager-count="5"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="paginationPageSize"
        :current-page="paginationCurrentPage"
        @current-change="changePaginationCurrentPage"
        @size-change="handlePaginationPageSize">
      </el-pagination>
    </el-row>
  </el-main>  
</template>
<script>
import { getThirdServiceList } from '@/api/serviceLists'
import { isMobile } from '@/utils/index'
export default { 
  name:"serviceRightPanel",
  props:["serviceInfo","showFreeCharge","thridListFromP", "currentServiceId"],
  data (){
    return {
      countSort: false,
      timeSort: false,
      sortType: 1,
      storeDate: this.$store.state,
      search_key: null,
      paginationPageSize: 2,
      paginationTotal: 0,
      paginationCurrentPage: 1,
      thridList:null
    }
  },
  watch:{
    thridListFromP(val){
      this.thridList = val.data
      this.paginationTotal = val.total
    },
    currentServiceId(val){
      // 刷新分页计数
      this.paginationTotal = 0
      this.paginationCurrentPage = 1
      // 清空搜索栏
      this.search_key = ''
      this.refrushThridList()
    }
  },
  filters: {
    getImage (name) {
      // console.log(name)
       var url ="static/services/"+name.toString()
      return url
    },
    formatTime (time){
      if(time){
        return time.split(" ")[0]
      }
      return ''
      
    },
    noMoreThenFonts(str){
      return str
    }
  },
  methods:{
    // 查询功能
    searchThirdList(e){   
      // 刷新分页计数
      this.paginationTotal = 0
      this.paginationCurrentPage = 1
      this.refrushThridList()
    },
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
    // 刷新列表
    refrushThridList(){
    
      var data = {
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
      // console.log(this.sortType)
      if( this.showFreeCharge == "012001"){
        data.isCharge = this.showFreeCharge
      }
      // 判断是否为移动端访问
      if(isMobile() == true){
        data = { class_id:this.currentServiceId }
        document.getElementById("pagination_tools").style.display = "none"
      }
      // console.log(data)
      getThirdServiceList(data).then(responce =>{
        this.thridList = responce.data 
        this.paginationTotal = responce.total
        // this.getCurrentServiceInfoById ()
      })
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
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
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
// pc
@media screen  and (min-width: 1200px){
  .service_list{
    .item{
      .item_img{
        width: 33rem;
      }
    }
  }
}
// iphone
@media screen  and (max-width: 1200px){
  .service_list{
    .item{
      flex-direction: column;
      align-items: flex-start;
      .item_info {
        width: 100%
      }
      .item_img{
        width: 100%;
      }
    }
  }
  .service_pager{
    margin-left: -1.5rem;
  }
}
</style>
