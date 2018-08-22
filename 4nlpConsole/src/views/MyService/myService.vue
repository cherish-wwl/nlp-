<template>
  <div>
    <title-tool @querySearch="querySearch"></title-tool>
    <el-row>
        <el-button 
          v-for=" item in applicationList" 
          :key="item.id" 
          class="selfbutton2"
          :class="currentApplicationId== item.appId ?'active':''"
          @click="changeApplication(item)">
          <span :title="item.appName">{{ item.appName | formatString}}</span>
          <br/>
          <span>接入服务({{item.serviceCount}}) </span>
        </el-button>
        <!-- <el-button         
          class="selfbutton2"
          @click="clickTool($event)"
         > -->
        <div class="selfbutton2 text_center">
          <br/>
          <span class="font18"><i class="el-icon-circle-plus-outline"></i></span>
          <a class="underline font14" v-on:click.prevent="jumpApplicationPage('add')" >创建应用 </a>
          <br/>
          <a class="underline font14"   v-on:click.prevent="jumpApplicationPage">查看更多应用 </a>
        
          
        </div>
        <!-- </el-button> -->
    </el-row>
    <br />
    <br />
    <el-row>
      <a class="underline" @click="showAllService">我的服务</a>
      >
      <span>{{applicationName}}</span>
      <el-select v-model="currentServiceClassId" @change="changeServiceClass" placeholder="请选择">
        <el-option label="全部" value=""></el-option>
        <el-option
          v-for="item in serviceClassData"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-input  
        class="inputwidth1" 
        @change="querySearch" v-model="keyword" 
        suffix-icon="el-icon-search" 
        placeholder="输入想要检索的关键字">
      </el-input>
    </el-row>
    <br/>
    <el-row>
      <el-table :data="tableData" border style="width: 100%" :max-height="tableHeight">
        <el-table-column prop="serviceName" label="服务名称" min-width="180"></el-table-column>
        <el-table-column prop="className" label="所属类型" min-width="180"></el-table-column>
        <el-table-column prop="allCount" label="调用次数"></el-table-column>
        <el-table-column prop="failCount" label="调用失败"></el-table-column>
        <el-table-column prop="failRate" label="失败率">
          <template slot-scope="scope">
            {{scope.row.failRate}}%
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="seeDetails(scope.row)">查看详情</el-button>
            <el-button size="mini" type="text" @click="seeDocument(scope.row)">接口文档</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <br />
    <el-row class="text_center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalNum">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
import titleTool from "@/components/TitleTool"
import { getApplicationListbyNum, getRootServiceClass, getServicesListByAId} from "@/api/myService"
export default {
  components:{
    titleTool
  },
  filters:{
    formatString(val){
      if(val.length > 10){
        return val.substring(0,8)+"..."
      }else{
        return val
      }
    }
  },
  data(){
    return {
      currentPage:1,
      pageSize:10,
      totalNum:8,
      tableHeight:"250",
      currentApplicationId:'',
      applicationName:'全部应用',
      currentServiceClassId:'',
      keyword:'',
      applicationList:[],
      serviceClassData:[],
      tableData:[]
    }
  },
  methods:{
    // 查询
    querySearch(keyword){
      console.log("触发查询："+keyword)
      this.currentPage = 1
      this.loadingTableData()
    },
    // 点击应用
    changeApplication(item){
      console.log("更改应用："+item.appName)
      this.currentApplicationId = item.appId
      this.applicationName = item.appName
      this.currentPage = 1
      this.loadingTableData()
    },
    // 改变一级服务分类
    changeServiceClass(val){
      this.currentPage = 1
      this.loadingTableData()
    },
    // 展示所有服务
    showAllService(){
      this.currentApplicationId = ""
      this.applicationName = "全部应用"
      this.currentServiceClassId = ""
      this.keyword = ''
      this.currentPage = 1
      this.loadingTableData()
    },
    // 跳转到应用页面
    jumpApplicationPage(val){
      console.log("!1111111111111111111111")
      if(val == "add"){
        this.$router.push({name:"consoleMyApplicantionAdd"})
      }else{
        this.$router.push({path:"/myApplicantion"})
      }
     
    },
    clickTool(e){
      console.log(e)
    },
    handleCurrentChange(val){
      this.currentPage = val
      this.loadingTableData()
    },
    handleSizeChange(val){
      this.pageSize = val
      this.currentPage = 1
      this.loadingTableData()
    },
    loadingTableData(){
      // 加载表格数据
      console.log("加载表格数据")
      let params = {
        pageSize: this.pageSize,
        pageNum: this.currentPage,
        aId: this.currentApplicationId,
        rootClassId: this.currentServiceClassId,
        keyword: this.keyword
      }
      getServicesListByAId(params).then(res => {
        this.tableData = res.data
        this.totalNum = res.total
      })
    },
    seeDetails(row){
      this.$router.push({name:'consoleServiceDetail',query:{cId:row.classId,sId:row.serviceId}})
    },
    seeDocument(row){
      this.$router.push({name:'consoleTechDocument',query:{cId:row.classId,id:row.serviceId}})
    }

  },
  mounted(){
    setTimeout( () =>{
      this.tableHeight = document.getElementById("app-main").offsetHeight-300
    },500)
    
    // 加载应用列表
    getApplicationListbyNum({number:4}).then(res => {
      // console.log(res)
      this.applicationList = res.data
    })
    // 加载一级分类列表
    getRootServiceClass().then(res =>{
      // console.log(res)
      this.serviceClassData = res.data
    })
    // 加载所有服务
    this.loadingTableData()
  }
}
</script>
