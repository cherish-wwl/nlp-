<template>
  <div class="specialist-content">
     <!-- 专家列表页面 -->
    <el-row>
      <div class="back-img">
        <img  src="static/index/bgimg/u574.jpg" />
      </div>
      <div class="dispaly-font">
        <a class="font16" v-on:click="returnBack">{{title1}}</a> &nbsp;
        <span> > </span> &nbsp;&nbsp;
        <a class="font36" style="margin-bottom: 20px;">{{title2}}</a>
      </div>
      <div class="display_sort_way" v-if="!isDetail">
        <span class="font14">以姓氏笔画为序</span>
      </div>
    </el-row>
    <br >
    <!-- 专家列表展示页面 -->
    <div class="content" v-if="!isDetail">
      <el-row>
        <el-col :lg="12" :xl="12" :md="8" :sm="8" :xs="8" class="col" v-for="(item,index) in specialistData" :key="index" >
          <div class="specialist-item line-animate-content">
            <div class="line"></div>
            <div class="left">
              <img :src="item.imageUrl?item.imageUrl:'/static/nlp_head2.jpg'" onerror="this.src='/static/nlp_head2.jpg'">
            </div>
            <div class="right">
              <h3 class="font20 specialistName" v-on:click="seeDetails(index,item.professorId)">{{item.professorName}}</h3>
              <p class="font14 specialistDesrc height135 hidden-md-and-down">{{ item.professorDesc}}<p>
              <div class="text_right hidden-md-and-down font16" v-on:click="seeDetails(index,item.professorId)"><a>>查看详情</a></div>
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
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total='totalsNums'>
          </el-pagination>
        </div>
      </el-row>
    </div>
    <!-- 专家详情展示页面 -->
    <el-container class="content" v-else>
      <el-row  :gutter="20">
        <el-col  :lg="18" :xl="18" :sm="24" :md="24" :xs="24">
          <article class="bordertopbule specialist-item1">
              <p class="font14">
                <img  class="portrait" :src=" specialistData != null && specialistData.imageUrl?specialistData.imageUrl:'/static/default.png'"  onerror="this.src='/static/default.png'" align="left"/>
                <span class="font20 specialistName"> {{specialistData.professorName}}</span>
                <span class="specialistDesrc">{{specialistData.professorDesc}}</span>
              </p>
          </article>
          <div class="specialist-content">
            <div class="btn-tools" >
              <span class="item font14" v-for="(item,index) in specialistData.relateList" 
              :key="item.relateId" :class="currentNode == index?'active':''" 
              @click="currentNode = index">{{ item.relateType }}</span>
            </div>
            <!-- <br /> -->
            <div class="dispaly-content">
              <template v-if="specialistData.relateList && specialistData.relateList[currentNode] && specialistData.relateList[currentNode].relateDesc">
                <article v-html="specialistData.relateList[currentNode].relateDesc">
                  {{specialistData.relateList[currentNode].relateDesc}}
                </article>

              </template>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="specialist-contact bordertopbule hidden-md-and-down">
            <div class="font16">同研究领域相关专家</div>
            <el-row :gutter="15">
              <template v-for="(item,index) in specialistData.recommendProfessorList">
                <el-col :key="index" :span="8" class="specialist-content-item text_center" >
                  <div class="item" @click="seeDetails(index,item.id)">
                    <img :src="item.imageUrl?item.imageUrl:'/static/nlp_head2.jpg'" onerror="this.src='/static/nlp_head2.jpg'">
                    <p class="text_center font14"><span>{{ item.professorName }}</span></p>
                  </div>
                </el-col>
              </template>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import { subStringNoMore3line, isMobile } from '@/utils/index'
import { professorList, professorRelateList } from '@/api/speciallist'
export default {
  data () {
    return {
      title1:'首页',
      title2:"专家列表",
      isDetail:false,
      currentNode:0,
      specialistData:{},
      currentPage:1,
      pageSize:10,
      totalsNums:0,
      currentSpecialistIndex:''
    }
  },
  filters:{
    subStringNoMore3line(str){
      return subStringNoMore3line(str,170)
    }
  },
  methods:{
    handleSizeChange(val){
      this.pageSize = val 
      this.currentPage = 1
      this.init()
    },
    handleCurrentChange(val){
      this.currentPage = val
      this.init()
    },
    seeDetails (index,id) {
      this.$router.push({path:"/specialistDetails/"+id})
      // this.detailInit(id)
    },
    returnBack () {
      if(this.title1 == "首页"){
        this.$router.push({name:"home"})
      }else{
        this.$router.push({name:"specialist"})
      } 
      // this.init()
    },
    init(){
      this.isDetail = false 
      this.title1 = '首页'
      this.title2 = "专家列表"
      this.currentNode = 1
      var params = {pageNow:this.currentPage,pageSize:this.pageSize}
      // 判断是否为移动端访问
      if(isMobile() == true){
        params = {}
        document.getElementById("pagination_tools").style.display = "none"
      }
      professorList(params).then( res => {
        this.specialistData = res.data
        this.totalsNums = res.total
      })
    },
    detailInit(id){
      this.isDetail = true
      this.title1 = '专家列表'
      
      professorRelateList({professorId:id}).then( res => {
        this.specialistData = {}
        if(res.data != null){
          this.specialistData = res.data
        }
        this.title2 = this.specialistData.professorName
      })
    }
  },
  watch:{
    $route(){
      // console.log("监听路由：当前专家id："+this.$route.params.specialistId)
      // console.log(this.$route.params.specialistId)
      // if(this.$route.params.specialistId){
      //   var specialistId = this.$route.params.specialistId
      //   this.detailInit(specialistId)
        
      // }else{
      //   this.init()
      // }
    }

  },
  mounted(){
    // specialistDetails
    
    // console.log("当前专家id："+this.$route.params.specialistId)
    // console.log(this.$route.params.specialistId)
  
    if(this.$route.params.specialistId){
      var specialistId = this.$route.params.specialistId  
      this.detailInit(specialistId)
    }else{
      this.init()
    }
    
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.specialist-content{
  margin: 0;
  background-color: rgba(245, 245, 246, 1);
  .dispaly-font {
      position: absolute;
      top: 0;
      display: flex;
      bottom: 0;
      left: 11%;
      align-items: center;
      color: #fff;
      a:first-child:hover{
        text-decoration: underline;
      }
  }
  .display_sort_way {
    position: absolute;
    /* top: 0; */
    bottom: 20px;
    right: 11%;
    color: #ffffffbf;
    span{
      color: #fff;
    }
  }
  .back-img {
    position: relative;
  }
  .content {
    padding: 0px 10%;
    .col{
      padding: 0 12px 12px 12px;
      // height: 280px;
    }
    
    
    
    
    .specialist-item1{
      background-color: #fff;
      display: inline-block;
      padding: 0 20px 20px 20px;
      width: 100%;
      .specialistName{
        display: block;
        margin: 12px 0;
        color: #333333;
        font-weight: 400;
        
      }
      .portrait{
        max-width: 155px;
        max-height: 191px;
        margin-right: 20px;
      }
      .specialistDesrc{
        color: #868686;
        line-height: 26px;
        height: 135px;
      }
    }
    .specialist-item{
      display: flex;
      background-color: #fff;
      padding: 0 24px 12px 24px;
      // width: 570px;
      // height: 230px;    
      .left{
        margin: auto 0;
        // img{
        //   width: 155px;
        //   height: 191px;
        // }
      }
      .right{
        padding-left: 20px;
        width: 100%;
        .specialistName{
          cursor: pointer;
          color: #333333;
          font-weight: 400;
          &:hover{
            text-decoration: underline;
          }
          
        }
        .specialistDesrc{
          color: #868686;
          line-height: 26px;
        }
        .height135 {
          height: 133px;
          overflow: hidden;
        }
        a{
          color: #389FFF;
          &:hover{
            text-decoration: underline;
           
          }
        }
      }
    }
    .specialist-content{
      background-color: #fff;
      padding: 12px 24px 30px 24px;
      // height: 900px;
      // overflow-y: auto;
      // overflow-x: hidden;
      .btn-tools{
        .item{
          background-color: rgba(234, 234, 234, 1);
          color: #999999;
          padding: 10px 20px;
          border-radius: 4px;
          margin-right: 20px;
          position: relative;
          cursor: pointer;
          &:hover,&.active{
            background-color: rgba(8, 136, 255, 0.949019607843137);
            color: #ffffff;
           
          }
          &.active:after{
              width: 0;
              height: 0;
              overflow: hidden;
              font-size: 0;
              line-height: 0;
              border-width: 10px;
              border-style: solid;
              border-color: #158eff transparent transparent transparent;
              content: "";
              position: absolute;
              bottom: -20px;
              left: 41%;
            }
        }
      }
      .dispaly-content{
        margin-top: 35px;
        min-height: 600px;
        .researchResult{
          .item{
            padding-right: 40px;
            .item-li{
              color: #1e1e1e;
              
            }
            .item-child{
              color: #868686;
              list-style: none;
              padding: 17px 0;
              li{
                line-height: 28px;
                
              }
            }
          }
        }
        .monograph{
          .item{
            padding-right: 40px;
            .item-li{
              color: #1e1e1e;
              
            }
            .item-child{
              color: #868686;
              list-style: none;
              padding: 17px 0;
              li{
                line-height: 28px;
                
              }
            }
          }
        }
        .researchDirection{
          .item{
            margin: 35px;
            .item-title{
              color: #333;
              line-height: 28px;
            }
            .item-content{
              color: #868686;
              line-height: 28px;
            }
          }
        }
        .scientificResearchProject{
          ul{
            // list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
        .thesis{
          ul{
            // list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
        .patentApplication{
          ul{
            // list-style: none;
            li{
              line-height: 32px;
            }
          }
          color: #868686;
        }
      }
    }
    
    .specialist-contact{
      background-color: #fff;
      padding: 12px 24px;
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
@media screen and (min-width: 1280px){
  .specialist-content{
    .back-img {
      min-width: 1240px;
      min-height: 100px;
    }
    .content {
      .bordertopbule{
        border-top: 4px solid #2b9eeb;
      }
      
      .specialist-item{
        .left img {
          width: 155px; 
          height: 191px; 
        }
       }
    }
   
  }
}
// mb
@media screen and (max-width: 1280px){
   .specialist-content{
    .back-img {
      img{
        height: 100px;
      }
    }
    
    .content {
      padding: 0;
      margin: 0 10px;
      .specialist-item{
         flex-direction: column;
         align-items: center;
         padding: 0;
          .left {
            height: 12rem;
            img {
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .right{
            padding-left: 0;
          }
         .specialistName{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
         }
      }
      .specialist-content{
        .btn-tools{
          .item{
            &.active:after{
              content: none;
            }
          }
        }
      }
    }
   
  }
}
</style>

