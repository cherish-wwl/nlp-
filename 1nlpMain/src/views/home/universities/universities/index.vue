<template>
  <div class="universities-content">
     <!-- 合作院校列表页面 -->
    <el-row>
      <div class="back-img">
        <img  src="static/index/bgimg/u574.jpg" />
      </div>
      <div class="dispaly-font">
        <a class="font16" v-on:click="returnBack">{{title1}}</a> &nbsp;
        <span> > </span> &nbsp;&nbsp;
        <a class="font32" style="margin-bottom: 20px;">{{title2}}</a>
      </div>
    </el-row>
    <br >
    <!-- 合作院校列表展示页面 -->
    <div class="content " v-if="!isDetail">
      <el-row class="col hidden-md-and-down">
        <el-select v-model="currentUnversite" placeholder="请选择" @change="querySearch">
          <el-option value="" label="全部"  key="全部"> </el-option>
          <el-option
            v-for="item in options"
            :key="item.academyId"
            :label="item.academyName"
            :value="item.academyId">
          </el-option>
        </el-select>
        <el-input
          class="ellipse_input"
          placeholder="输入想要检索的关键字"
          v-model="search_word" style="margin-left:15px;"
          v-on:change="querySearch"
          >
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input> 
      </el-row>
      <el-row>
        <el-col :lg="8" :xl="8" :md="24" :xs="24" :sm="24" class="col" v-for="(item,index) in listData" :key="index" >
          <div class="item line-animate-content" v-on:click="seeDetails(item.groupId)">
            <div class="line"></div>
            <div class="img-line">
              <img 
              :src="item.groupImgUrl?item.groupImgUrl:item.academyImgUrl?item.academyImgUrl:'/static/default.png'"  onerror="this.src='/static/default.png'">
            </div>
            <div class="info-line">
              <h3 class="font18 specialistName"><span class="dot"></span>{{item.groupName}}</h3>
              <p class="font14 specialistDesrc height90 hidden-md-and-down">{{ item.groupBriefIntroduction | subStringNoMore3line}}<p>
              <div class="font16 text_right hidden-md-and-down"><a>>查看详情</a></div>
            </div>
            
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="block text_center" id="pagination_tools">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[9, 18, 27, 36]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total='totalsNums'>
          </el-pagination>
        </div>
      </el-row>
    </div>
    <!-- 合作院校详情展示页面 -->
    <div class="content" v-else>
      <el-row  :gutter="20" >
        <el-col :lg="18" :xl="18" :sm="24" :md="24" :xs="24">
          <div class="bordertopbule item1">
              <div class="item1-info">
                <span class="font20 item1-name"> {{ listData.groupName }}</span>
                <img  class="portrait" :src="listData.imageUrl?listData.imageUrl:'/static/nlp_head2.jpg'" onerror="this.src='/static/default.png'"/>
                
              </div>
              <!-- <p class="font14">
                <span class="item1-desrc">{{ listData[currentIndex].desrc }}</span>
              </p> -->
          </div>
          <div class="item1-content">
            <article class="dispaly-content" v-html="listData.groupDesc">
              {{listData.groupDesc}}
            </article>
          </div>
        </el-col>
        <el-col :span="6" class="hidden-md-and-down">
          <div class="specialist-contact bordertopbule">
            <div class="font16">相关专家</div>
            <el-row>
              <template v-for="(item,index) in listData.recommendProfessorList">
                  <el-col :key="index" :span="8" class="specialist-content-item text_center" @click.native="seeSpecialistDetails(item.professorId)">
                    <div class="item3">
                    <img :src="item.imageUrl?item.imageUrl:'/static/nlp_head2.jpg'" onerror="this.src='/static/nlp_head2.jpg'">
                    <p class="font14 text_center"><span>{{ item.professorName }}</span></p>
                    </div>
                  </el-col>
              
              </template>
            </el-row>
          </div>
        </el-col>
        
      </el-row>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import { subStringNoMore3line, isMobile } from '@/utils/index'
import { getAcademyList, getGroupList, getGroupDetail} from '@/api/universities'
export default {
  data () {
    return {
      title1:'首页',
      title2:"合作创新科研机构列表",
      isDetail:false,
      currentNode:1,
      search_word:"",
      currentUnversite:'',
      options:null,
      listData:[],
      currentIndex:'',
      currentPage:1,
      pageSize:9,
      totalsNums:0,
    }
  },
  filters:{
    subStringNoMore3line(str){
      return subStringNoMore3line(str,100)
    }
  },
  methods:{
    handleSizeChange(val){
      this.pageSize = val 
      this.currentPage = 1
      this.getGroupList()
    },
    handleCurrentChange(val){
      this.currentPage = val
      this.getGroupList()
    },
    seeDetails (index) {
      this.$router.push({path:"/universitiesDetails/"+index})
      // this.detailInit(index)
      
    },
    seeSpecialistDetails(id){
      console.log(id)
       this.$router.push({path:"/specialistDetails/"+id})
    },
    returnBack () {
      if(this.title1 == "首页"){
        this.$router.push({name:"home"})
      }else{
        this.$router.push({name:"universities"})
      } 
      // this.init()
    },
    init(){
      this.isDetail = false 
      this.title1 = '首页'
      this.title2 = "合作创新科研机构列表"
      this.currentNode = 1
      // 获取大学下拉选
      getAcademyList().then( res => {
        this.options = res.data
      })
      this.getGroupList()
       
    },
    getGroupList(){
     
      var params= {
        keyword:this.search_word,
        academyId:this.currentUnversite,
        pageNow:this.currentPage,
        pageSize:this.pageSize
      }
      // 判断是否为移动端访问
      if(isMobile() == true){
        params = {}
        document.getElementById("pagination_tools").style.display = "none"
      }
      // 获取学院列表
      getGroupList(params).then( res => {
        this.listData = res.data
        this.totalsNums = res.total
      })
    },
    detailInit(universitiesId){
      this.isDetail = true
      this.title1 = '合作创新科研机构列表'
      // 获取学院详情
      getGroupDetail({groupId:universitiesId}).then( res => {
        this.listData = res.data
        this.title2 = this.listData.groupName
      })
    },
    // 查询
    querySearch(){
      console.log("查询："+this.currentUnversite +"++++++++" +this.search_word)
      this.currentPage = 1
      this.getGroupList()
    }
  },
  watch:{
    $route(){
      // console.log("监听路由：当前创新合作院校id："+this.$route.params.universitiesId)
      // console.log(this.$route.params.universitiesId)
      // if(this.$route.params.universitiesId){
      //   var index = this.$route.params.universitiesId
        
      //   this.detailInit(index)
      // }else{
      //   this.init()
      // }
    }

  },
  mounted(){
    // universitiesDetails
    console.log("当前合作创新科研机构id："+this.$route.params.universitiesId)
    console.log(this.$route.params.universitiesId)
    if(this.$route.params.universitiesId){
      var index = this.$route.params.universitiesId
      this.detailInit(index)
    }else{
       this.init()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-input__inner{
  height:36px;
}
.universities-content{
  margin: 0;
  background-color: rgba(245, 245, 246, 1);
  .height90{
    height: 90px;
    overflow: hidden;
  }
  .dispaly-font {
      position: absolute;
      top: 0;
      display: flex;
      bottom: 0;
      left: 10%;
      align-items: center;
      color: #fff;
      a:first-child:hover{
        text-decoration: underline;
      }
  }
  .back-img {
      // min-width: 1240px;
      // min-height: 100px;
      position: relative;
  }
  .content {
    // padding: 0px 10%;
    .col{
      padding: 0 15px 30px 15px;
      // height: 280px;
    }
    
    .item{
      background-color: #fff;
      padding: 0 24px 12px 24px;
      .img-line{
        // width: 280px;
        height: 13rem;
        display: flex;
        img{
          margin: auto;
          width: auto;
	        height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .info-line{
        .specialistName{
          padding-left: 12px;
          position: relative;
          height: 45px;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
          &:before {
            content: "";
            height: 11px;
            width: 5px;
            background-color: #2b9eeb;
            position: absolute;
            top: 6px;
            bottom: 0;
            left: 0;
      /* margin: auto 0; */
          }
        }
        a{
          color: #389FFF;
          &:hover{
            text-decoration: underline;
           
          }
        }
      }
      
    }
    .item1{
      background-color: #fff;
      p{
        margin: 0;
      }
      .item1-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:15px;
        img{
          max-height: 200px;
          max-width: 100%;
        }
        .item1-name{
          font-weight: bold;
        }
        .portrait{
          width: auto;
          // float: right;
        }
      }
    }
    .item1-content{
      background-color: #fff;
      min-height: 700px;
      line-height: 24px;
      font-size: 14px;
      padding:15px;
    }
    .specialist-contact{
      background-color: #fff;
      padding: 12px 24px;
      min-height: 400px;
      .item3{
        padding: 0 3px;
      }
      img{
        // width: 95px;
        // height: 92px;
        width: 100%;
      }
      .specialist-content-item{
          margin-top: 20px;
          cursor: pointer;
          
      }
    }
   
  }
  
}
// pc
@media screen and (min-width: 1024px){
  .universities-content{
    .back-img {
      min-width: 1240px;
      min-height: 100px;
    } 
    .content{
      padding: 0px 10%;
      .bordertopbule{
        border-top: 4px solid #2b9eeb;
      }
    }
  }
}
// mb
@media screen and (max-width: 1024px){
  .universities-content{
    .back-img {
      img{
        height: 160px;
      }
    }
    .content{
      
      .item .info-line .specialistName{
        height: auto;
      }
      .item1 .item1-info{
        flex-direction: column-reverse;
      }
    }
  }
}
</style>

