<template>
   <el-container class='popularServices' id="popularServices">
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="font30">基础服务</h2> 
      </el-col>
    </el-row>
    <el-row class="icon_panel hidden-sm-and-down">
      <div class="icon_panel_item" v-for="item in list1" :key='item.id' :class="icon_panel_index == item.id ? 'active':''" v-on:mouseenter="toggleIconPanel(item.id)">
        <div class="grid-content text_center">
          <svg-icon :icon-class="item.icon" ></svg-icon>
          <p class="font20">{{ item.name }}</p>
        </div>
      </div>
    </el-row>
    <el-row class='font_panel hidden-sm-and-down'>
      <div class='font_panel_item' v-for="item in list2" :key='item.id'>
        <label class="font18 classhover" @click="linkServiceListPage(item.id)">
          <i class="fa fa-angle-double-down" aria-hidden="true"></i> 
          {{ item.name }}
        </label>
        <p class="font14">
          {{ item.descr |subStringNoMore3line }}
        </p>
        <ul>
          <li v-for="child in item.children" class="font16" 
          :key='child.id' 
          @click="linkServiceDetialPage(child)">{{ child.serviceName }}</li>
        </ul>
      </div>      
    </el-row>
    <el-row class="mb_panel hidden-md-and-up">
      <el-collapse  accordion @change="changeCollapse">
        <el-collapse-item 
        
        v-for="(item,index) in list1" 
        :key="item.id" 
        :name="index">
          <template slot="title">
            &nbsp;
            &nbsp;
            &nbsp;
            <svg-icon class="font30 f-bold" :icon-class="item.icon" ></svg-icon>
            <span class="font25"> &nbsp; {{ item.name }}</span>
          </template>
          <ul>
            <li v-for="child in item.children" :key='child.id'>
              <span class="font25" @click="linkServiceListPage(child.id)">
                <i class="fa fa-angle-double-right font_gary" aria-hidden="true"></i>
                {{ child.name }}
              </span>
              <ul>
                <li 
                class="font20 service_li font_gary"
                @click="linkServiceDetialPage(child2)"
                v-for="child2 in child.children" 
                :key="child2.id">
                  {{ child2.serviceName }}
                </li>
              </ul>
            </li>
          </ul>
        </el-collapse-item>
       
      </el-collapse>
    </el-row>
   </el-container>
</template>

<script>
  import { getpopularServicesList, getpopularSubServicesList} from '@/api/home'
  import { scrollAnimation } from '@/utils/scrollAnimation.js'
  import { subStringNoMore3line } from '@/utils/index.js'
  import Cookies from 'js-cookie'
  export default {
    data () {
      return {
        icon_panel_index:0,
        font_panel_span:0,
        mbData:[],
        list1:[],
        list2:[]
      }
    },
    filters:{
      subStringNoMore3line (str){
        return subStringNoMore3line(str,35)
      }
    },
    methods:{
      init () {
        // axios  获取全部数据
       getpopularServicesList ().then(response =>{
          this.list1 = response.data
          this.mbData = response.data
          if(this.list1.length !=0 ){
            this.icon_panel_index = this.list1[0].id
            this.refrushIconPanel(0)
          }
          
       })
      },
      changeCollapse(e){
        console.log( 0 === "")
        if( e !== ""){
          this.icon_panel_index = this.mbData[e].id
          this.refrushIconPanel(e)   
        }
      },
      toggleIconPanel (index) {
        // console.log(index)
        this.icon_panel_index = index
        this.refrushIconPanel()
        // 滚动动画
        scrollAnimation(".popularServices",550)
      },

      refrushIconPanel(arrayNum){
       
        getpopularSubServicesList ({ "id": this.icon_panel_index,"size": 3 }).then(response => {
          this.list2 = response.data
          if(arrayNum != null && arrayNum !== ""){
            this.mbData[arrayNum].children = response.data
          }
          
        })
        console.log(this.mbData)
      },
      linkServiceDetialPage(item){
        console.log(item)
        if(item.forwardType == "014002"){//定制详情页面
          this.$router.push({name:item.innerUrl})
        }else if(item.forwardType == "014003"){//跳转外部url
          window.open(item.innerUrl,'_blank')
          return
        }else{//通用详情页
          this.$router.push({name:'serviceDetail',params:{'service_id':item.id}})
        }
      },
      linkServiceListPage (id) {
        Cookies.set("service_id",id)
        //  this.$router.push({name: 'serviceLists', params: { service_id: id }})
        this.$router.push({name: 'serviceLists',params:{ randomValue: Math.random().toString(36).substr(2) }})
        console.log(Cookies.get("service_id"))
      },
    },
    mounted () {
      this.init()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$blueColor:rgba(19, 147, 237, 1);
$fontColor:rgba(255, 255, 255, 0.6);
  .popularServices {
    display: block;
    h2{
      font-weight:500;
      margin: 45px 0;
    }
    .icon_panel{
      display: flex;
      justify-content: space-around;
      padding: 0 8%;
      .icon_panel_item {
          position: relative;
          cursor: pointer;
          padding: 10px 48px;
          .svg-icon{
            font-size: 84px;
            color: #aaaaaa;
          }
          &:hover{
            .svg-icon{
              color:$blueColor;
            }
          }
      }
      .icon_panel_item.active {
        background-color: #F2F2F2;
        color: #1393ed;
        
      }
      .icon_panel_item.active{
        .svg-icon{
          color: #1393ed;
        }
      }
      
      
    }
    .font_panel{
      display: flex;
      display: -webkit-flex; /* Safari */
      justify-content: center;
      background-color: #F2F2F2;
      padding: 20px;
      color: #333;
      min-height: 220px;
      flex-wrap: wrap;
      .font_panel_item {
        padding-right: 20px;
        min-width: 30%;
        max-width: 33%;
        margin-top: 20px;
        margin-bottom: 20px;
        label i, p{
          color:rgba(51,51,51,0.6);
        }
        .classhover:hover{
          cursor: pointer;
          &,& i{
            color:#1393ed ;
          }
        }
      }
      .font_panel_item:not(:first-child){
        border-left: 1px solid #e4e4e4;
        padding-left: 20px;
      }
      ul{
        list-style: none;
        margin: 0;
        padding:0;
        margin-top: 20px;
        margin-bottom: 15px;
        // color: #8a8989;
        li{
          padding-bottom: 10px;
          width: 50%;
          display: inline-block;
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
          &:hover{
            // color:#5c5cf3;
            text-decoration: underline;
          }
        }
      }
    }
  }
  .mb_panel{
    .font_gary{
      color: #666;
    }
    .el-collapse{
      border: none;
    }
    .el-collapse-item {
      margin-bottom: 1rem;    
      border-top: 1px solid #ebeef5;  
    }
    ul, li{
      margin: 0;
      padding: .5rem 1.5rem;
    }
    ul{
      li.service_li{
        display: inline-block;
        width: 50%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>

