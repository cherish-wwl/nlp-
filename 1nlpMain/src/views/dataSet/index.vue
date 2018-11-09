<template>
  <div class="dataset-container">
    <el-row class='service_info '>
      <img class='service_bg_img' src='../../assets/sevice_details/u536.jpg'/>
      <div class='title_desc'>
        <div class='title_content'>
          <h2 class="nomargin font36"> {{ serviceInfo.service_title }} </h2>
          <p class="font18 hidden-md-and-down"> {{ serviceInfo.service_desc }} </p>
        </div>
      </div>
    </el-row>
    <el-container class='service_class'>
      <el-aside width="200px" class='aside_style hidden-md-and-down'>
        <ul>
          <li v-for="item in levelOneData" class="font18"
            :class="activeLevelOneData.id == item.id?'active':''" :key="item.id" @click="chooseLevelOne(item)">
            {{ item.name }}
          </li>
        </ul>
      </el-aside>
      <el-main class='service_content'>
        <el-row class='service_tools' >
          <el-col :span='12' class='font16 nowrap'>
            <i class="fa fa-paper-plane font20" aria-hidden="true"></i>
            <span class="levelOneName font20">{{ activeLevelOneData.name }}</span>
            &nbsp;&nbsp;
            <span class="hidden-md-and-down">  
              <el-input placeholder="请输入内容" size="mini" v-model="search_key" v-on:change="searchThirdList" class="search_input" suffix-icon="el-icon-search"></el-input>
            </span>
          </el-col>
          <el-col  :span='12' class='text_right hidden-md-and-down'>
            <span class='font14'>排序：</span>
            &nbsp;
            <span class='font16 tool-sort-icon' :class="sortType != 1 ? '' : (countSort ? 'sort_desc' : 'sort_asc')"   @click="sortList(1)">使用次数&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
            &nbsp;
            <span class='font16 tool-sort-icon' :class="sortType != 2 ? '' : (timeSort ? 'sort_desc' : 'sort_asc')" @click="sortList(2)">发布时间&nbsp;<i class="fa fa-sort-desc"></i><i class="fa fa-sort-asc"></i></span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <!-- <span class='tool-style-icon active'><i class="fa fa-bars" aria-hidden="true"></i></span> -->
            <!-- <span class='tool-style-icon'><i class="el-icon-menu" aria-hidden="true"></i></span> -->
          </el-col>
        </el-row>
       
        <el-row>
          <el-radio-group v-model="currentTwoLevelId"  text-color="#409EFF" fill="#fff" @change="chooseServiceItem">
            <el-radio-button class="font14" label="null">全部</el-radio-button>
            <el-radio-button class="font14" v-for="item in levelTwoData" :key="item.id" :label="item.id">{{ item.name }}</el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row class='service_list'>
            <el-row class='item' v-for="item in thridList" :key='item.id'>
              <el-col :xl='8' :lg="8" :md="24" :xs="24" :sm="24" class='item_img' >
                <img :src=" item.image" onerror="this.src='/static/default.png';return false;">
              </el-col>
              <el-col :xl='16' :lg="16" :md="24" :xs="24" :sm="24" class='item_info'>
                <h4 class="font18">
                  {{ item.name }}
                </h4>
                <div class='f_c_grey'>
                  <span class="font14">
                    服务类型:&nbsp;&nbsp; 
                    {{ item.type_name }}&nbsp; &nbsp; &nbsp; 
                    提供者：{{ item.uploader }}&nbsp; &nbsp; 
                    发布时间：{{ item.uploadTime}}
                  </span>
                </div>
                <p class="font16">
                  {{ item.serviceDescr}}
                </p>
                <div>
                  <!-- <el-button class="font16" @click="addToMySolution(item.id)">
                   添加到我的数据集
                  </el-button> -->
                </div>
              </el-col>
            </el-row>
        </el-row>
        <el-row class="text_center" id="pagination_tools">
          <el-pagination
            layout="prev, pager, next"
            :total="paginationTotal"
            :page-size="paginationPageSize"
            :current-page="paginationCurrentPage"
            @current-change="changePaginationCurrentPage">
          </el-pagination>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { getOneLevelList, getTwoLevelListById, getThirdServiceList, addToMySolution } from '@/api/dataset'
import { getToken } from '@/utils/auth'
import { mapGetters } from 'vuex'
import { isMobile } from '@/utils/index'
export default {
  data (){
    return {
      activeLevelOneData:['1'],
      levelOneData:[],
      levelTwoData:[],
      search_key:'',
      // currentServiceId:0,
      activeItemId:0,
      thridList: [],
      serviceInfo:{
        service_title:'语义理解开放数据集',
        service_desc:'语义理解开放是为各类企业及开发者提供的用于文本分析及挖掘的核心工具，自然语言处理API可帮助用户搭建内容搜索、内容推荐、舆情识别及分析、文本结构化、对话机器人等智能产品，也能够通过合作，定制个性化解决方案。'
      },
      paginationPageSize:2,
      paginationTotal:0,
      paginationCurrentPage:1,
      countSort:false,
      timeSort:false,
      sortType:1,
      currentTwoLevelId:"null"
    }
  },
  computed:{
    ...mapGetters([
      'userManageBaseUrL'
    ])
  },
  filters: {
    getImage (name) {
      // console.log(name)
       var url ="static/services/"+name
      return url
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
    chooseLevelOne(item){
      this.activeLevelOneData = item
      this.currentTwoLevelId = "null"
      var params = {'id': item.id}
      getTwoLevelListById( params ).then( response => {
        this.levelTwoData = response.data
        this.chooseServiceItem(this.currentTwoLevelId)
      })
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
    // 点击,更新列表
    chooseServiceItem(id) {
      //  console.log(id);

      this.currentTwoLevelId = id
      // 刷新分页计数
      this.paginationTotal = 0
      this.paginationCurrentPage = 1
      // 清空搜索栏
      this.search_key = ''
      this.refrushThridList ()
    },
    // 初始化
    init (){
     
      var queryId = this.$route.query.id
      getOneLevelList().then( response => {
        this.levelOneData = response.data
        this.activeLevelOneData = this.levelOneData[0] 
        if(queryId || queryId != null){
          this.levelOneData.forEach(element => {
            if(element.id == queryId){
              this.activeLevelOneData = element
            }
          })
        }
        console.log(this.activeLevelOneData)
        // 获取二级列表
        this.chooseLevelOne(this.activeLevelOneData) 
      })  
    },
    refrushThridList(){
      var params1 ={
        'typeId': this.currentTwoLevelId,//id
        'pageNow': this.paginationCurrentPage, //当前页
        'pageSize': this.paginationPageSize,//每页条数
        'keyword': this.search_key,//查询的关键字
        'attr': this.activeLevelOneData.id,
        'useNum':'',
        'relTime':''
      }
    
      if(this.sortType == 1){//使用次数排序
        if(this.countSort){
          params1.useNum = 1//1:倒序排列  2：升序排列
        }else{
          params1.useNum = 2
        }
        params1.relTime = ""
      }else{//接入时间排序
        if(this.timeSort){
          params1.relTime = 1//1:倒序排列  2：升序排列
        }else{
          params1.relTime = 2
        }
        params1.useNum = ""
      }
       // 判断是否为移动端访问
      if(isMobile() == true){
        params1 = { 
          'typeId': this.currentTwoLevelId,
          'attr': this.activeLevelOneData.id
        }
        document.getElementById("pagination_tools").style.display = "none"
      }
      getThirdServiceList(params1).then(responce =>{
        this.thridList = responce.data 
        this.paginationTotal = responce.total
       
      })
    },
    addToMySolution(id){
      // 判断是否登录
      if(getToken() && getToken() !=''){
        addToMySolution({id:this.id}).then( res => {
          this.$message({
            message: '添加成功！可在 管控台-我的数据集 里查看',
            type: 'success',
            time:5000
          })
        })
      }else{
        window.location.href = thi.userManageBaseUrL
      }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  },
  mounted () {
    this.init()
  }
    
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$activeColor: #409EFF;
.dataset-container {
  background-color: #fafafa;
  .service_info{
    position: relative;
    .service_bg_img{
      width: 100%;
      height: 300px;
      background-color: #9d9a96;
    }
    .title_desc {
      position: absolute;
      top: 0;
      bottom:0;
      display:flex;
      align-items:center;
      color: #fff;
      left: 10%;
      right: 35%;
    }
  }
  .service_class{
    padding:22px 12%;
    .aside_style{
      overflow: hidden;
      background-color: #fff;
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
          line-height: 35px;
          padding-left: 30px;
          cursor: pointer;
          &:hover,&.active{
            border-right:3px solid $activeColor;
            background-color: #dcdcdf78;
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
            color: $activeColor;
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
              color: $activeColor;
            }
          }
          &.sort_asc{
            i.fa.fa-sort-asc {
              color: $activeColor;
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
        .item_img{
          width: 330px;
        }
        .item_info{
          padding-left: 10px;
          .f_c_grey{
            color: #827f7f;
          }
        }
        
      }
    }
  }
  
}
// pc
@media screen and (max-width:1200px ){
  .dataset-container {
    .service_info {
      .service_bg_img {
        height: 160px;
      }
       .title_desc{
         right: 0;
       }
    }
    .service_class{

      padding: 2.2rem 0;
      .service_content{
        .service_tools{
          .levelOneName, i{
            font-size: 2.5rem;
          }
        }
        .service_list {
          .item{
            flex-direction: column;
            .item_img{
              width: auto;
            }
          }
        }
      }
      
    }
  }
}

</style>
