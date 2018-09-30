<template>
  <div class="sub-meun-panel">
    <!-- <el-row style='padding-left: 40px; margin-bottom: 20px;'>
      <el-input placeholder="请输入内容" v-model="searchKey" v-on:change='querySearch' @keyup.enter.native="querySearch" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-row> -->
    <el-row class='meunItemDiv'>     
      <el-col :span="child.id == '001'? 13: 11" class="submeunitem" v-for="child in serviceMeunList" :key="child.id">
        <div class='meunItemFont01 font18' ><label ><i class="fa fa-bookmark-o" aria-hidden="true"></i>&nbsp;&nbsp;{{ child.name}}</label></div>
        <div class="itemlist">
          <ul  v-for="item in child.children" :key="item.id">
            <label 
              class='meunItemFont02 font18'
              :class="child.id == '001'?'':'applicattionServicePanelItem'"
              @click="linkServiceListPage(item.id)"
            >{{ item.name }}</label>
            <li class="font16" v-for="subChild in item.children" :key="subChild.id" v-if="(!subChild.show)||subChild.show == true" @click="linkServiceListPage(subChild.id)">
              {{ subChild.name }}  
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { getMenus } from '@/api/header'
export default {
  props:["serviceMeunList"],
  data(){
    return{
      searchKey:'',
      originalMeunList:'',
      // serviceMeunList:''
    }
  },
  methods:{
    //查询
    querySearch(){
      // console.log("当前查询字符串为" + this.searchKey )
      this.getSearchResult(this.serviceMeunList)
    },
    // 对数据进行查询，并添加字段show
    getSearchResult(list){
      for(let i=0;i<list.length;i++){
        if( list[i].children ){
          this.getSearchResult(list[i].children)
        }else{
          if(list[i].name.indexOf(this.searchKey) != -1){
            list[i].show = true
          }else{
            list[i].show = false
          }
        }
      }
    },
    // 跳转到服务详情页面 
    linkServiceListPage (id) {
      // 触发父类事件
     this.$emit("handleFromHeaderServicePanel",id)
    },
    // 初始化
    init(){
      // 初始化
      // getMenus().then(response => {
        // this.initMeunList(response.data)
        // this.serviceMeunList = response.data
        // this.originalMeunList = response.data
      // })
      /**  用于查询  初始化添加字段show 控制显影
      this.initMeunList(this.serviceMeunList)
      this.originalMeunList = this.serviceMeunList
      */
      
    },
    // 用于查询 遍历数据  添加show 字段 用于控制显影
    initMeunList(list){
      for(let i=0;i<list.length;i++){
        if( list[i].children ){
          this.initMeunList(list[i].children)
        }else{
          list[i].show = true
        }
      }
    },
  },
  mounted(){
    // this.init()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .meunItemDiv {
    padding-left: 40px;
    margin-bottom: 20px;
    .submeunitem{
      &:nth-child(1){
        .itemlist{
          column-count: 4;         
        }
      }
      &:nth-child(2){
        .itemlist{
          column-count: 3;
          .applicattionServicePanelItem{
            cursor: pointer;
            &:hover{
              color: #389FFF;
            }
          }      
        }
        border-left: 1px solid #333;
        padding-left: 30px;
      }
      .itemlist{
        margin-top: 15px;
        column-gap: 0;    // 设置列间距
        height: 265px;
      }
      .meunItemFont01{
        color: #9d9a96;
      }
      .meunItemFont02{
        color: #e9e7e3;
      }
      ul{
        break-inside: avoid; 
        box-sizing: border-box; 
        padding: 10px; 
        li{
          width: 100px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-top: 12px;
          color: #9d9a96;
          cursor:pointer;
          &:hover{
            color: #389FFF;
          }
        }
      }
    }    
  }
</style>
