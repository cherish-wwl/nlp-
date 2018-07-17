<template>
  <div>
    <title-tool  @querySearch="querySearch" ></title-tool>
    <div class="text_right">
      <el-button type="primary" class="font14" size="mini" @click.native="addApp">
        <span ><i class="el-icon-plus"></i></span>
        创建应用
      </el-button>
    </div>
    <br />
    <el-row>
      <el-table :data="tableData" :max-height="tableHeight" border style="width: 100%">
        <el-table-column prop="appName" label="应用名称" min-width="120"></el-table-column>
        <el-table-column prop="appId" label="APLKEY" min-width="180"></el-table-column>
        <el-table-column prop="appSecret" label="SecretKey" min-width="180"></el-table-column>
        <el-table-column prop="platforms" label="应用平台" :formatter="arrayToString">
        </el-table-column>
        <el-table-column prop="creatTime" label="创建时间" min-width="180"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
             <el-button type="text" size="small" @click="seeDetails(scope.row)">查看详情</el-button>
            <el-button type="text" size="small" @click="editApp(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
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
import { titleTool } from "@/views/console/components/index"
import { getApplicationList } from "@/api/myApplicantion"
export default {
  data () {
    return {
      currentPage:1,
      pageSize:10,
      totalNum:8,
      tableHeight:250,
      keyword:"",
      tableData: []
    }
  },
  components:{
    titleTool
  },
  methods:{
    arrayToString(row){
      console.log(row)
      console.log(row.platforms)
      let platformArrayNames = []
      row.platforms.forEach(element => {
        platformArrayNames.push(element.appPlatform)
      });
      return platformArrayNames.join(',')
    },
    querySearch(keyword){
      console.log("触发查询："+keyword)
      this.keyword = keyword
      this.currentPage = 1
      this.loadingTableData()
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
        keyword: this.keyword
      }
      getApplicationList(params).then(res => {
        this.tableData = res.data
        this.totalNum = res.total
      })
    },
    seeDetails(row){
      this.$router.push({name:'consoleMyApplicantionDetail',query:{id:row.appId}})
    },
    editApp(row){
      this.$router.push({name:'consoleMyApplicantionEdit',query:{id:row.appId}})
    },
    addApp(){
      this.$router.push({name:"consoleMyApplicantionAdd"})
    }
  },
  mounted(){
    this.tableHeight = document.getElementById("app-main").offsetHeight - 150
    // 加载应用列表
    this.loadingTableData()
  }
}
</script>

