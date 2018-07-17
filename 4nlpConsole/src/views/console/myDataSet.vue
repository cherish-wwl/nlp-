<template>
  <div>
    <title-tool  @querySearch="querySearch"></title-tool>
    <el-row>
      <el-table :data="tableData" :max-height="tableHeight" border style="width: 100%">
        <el-table-column prop="seviceName" label="数据名称" min-width="180"></el-table-column>
        <el-table-column prop="classType" label="数据类型" min-width="180"></el-table-column>
        <el-table-column prop="times" label="提供者"></el-table-column>
        <el-table-column prop="failTimes" label="数据规模"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="download(scope.row)">下载</el-button>
            <el-button type="text" size="small" @click="deleteDataSet(scope.row)">删除</el-button>
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
import { getDataSetList, deleteDataSet, downloadDataSet } from "@/api/myDataSet"
export default {
  data () {
    return {
      currentPage:1,
      pageSize:10,
      totalNum:8,
      tableHeight:"250",
      keyword:'',
      tableData: []
    }
  },
  components:{
    titleTool
  },
  methods:{
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
    deleteDataSet(row){
      this.$confirm('您确定要移除该数据集吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteDataSet({id:row.id}).then( res=>{
          this.$message({
            type: 'success',
            message: '移除成功!'
          });
        })     
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });          
      });
    },
    download(){
      this.$message({
        type: 'info',
        message: '暂未开通'
      });   
    },
    loadingTableData(){
      // 加载表格数据
      let params = {
        pageSize: this.pageSize,
        pageNum: this.currentPage,
        keyword: this.keyword
      }
      getDataSetList(params).then(res => {
        this.tableData = res.data
        this.totalNum = res.total
      })
    }
  },
  mounted() {
    this.tableHeight = document.getElementById("app-main").offsetHeight - 100
    this.loadingTableData()
  }

}
</script>
