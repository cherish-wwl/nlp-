<template>
  <div>
    <title-tool @querySearch="querySearch"></title-tool>
    <el-row>
      <el-button-group>
        <el-button 
          v-for=" item in serviceClassData" 
          :key="item.id" 
          class="selfbutton1"
          :class="currentServiceClass == item.id ?'active':''"
          @click="changeClass(item.id)">
          {{ item.name }}
        </el-button>
      </el-button-group>
    </el-row>
    <br />
    <br />
    <el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="seviceName" label="服务名称" min-width="180"></el-table-column>
        <el-table-column prop="classType" label="所属类型" min-width="180"></el-table-column>
        <el-table-column prop="times" label="调用次数"></el-table-column>
        <el-table-column prop="failTimes" label="调用失败"></el-table-column>
        <el-table-column prop="perOfFail" label="失败率"></el-table-column>
        <el-table-column  label="操作" width="100">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="seeDetails(scope.row)">查看详情</el-button>
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
export default {
  components:{
    titleTool
  },
  data(){
    return {
      currentPage:1,
      pageSize:10,
      totalNum:8,
      currentServiceClass:'001',
      serviceClassData:[
        {
          id:'001',
          name:"基础服务"
        },{
          id:'002',
          name:'应用服务'
        }],
      tableData: [
        {
          seviceName: '最大切割',
          classType: '词性标语',
          times: '34',
          failTimes:'0',
          perOfFail:'0.00%'
        }, {
          seviceName: 'CRF新词发现',
          classType: '分词',
          times: '79',
          failTimes:'0',
          perOfFail:'0.00%'
        }, {
          seviceName: 'CRF',
          classType: '实体识别',
          times: '14',
          failTimes:'0',
          perOfFail:'0.00%'
        }, {
          seviceName: '默认CRF模型',
          classType: '实体识别',
          times: '34',
          failTimes:'0',
          perOfFail:'0.00%'
        },
        {
          seviceName: '最大切割',
          classType: '词性标语',
          times: '34',
          failTimes:'0',
          perOfFail:'0.00%'
        }, {
          seviceName: 'CRF新词发现',
          classType: '分词',
          times: '79',
          failTimes:'0',
          perOfFail:'0.00%'
        }, {
          seviceName: 'CRF',
          classType: '实体识别',
          times: '14',
          failTimes:'0',
          perOfFail:'0.00%'
        }, {
          seviceName: '默认CRF模型',
          classType: '实体识别',
          times: '34',
          failTimes:'0',
          perOfFail:'0.00%'
        }]
    }
  },
  methods:{
    querySearch(keyword){
      console.log("触发查询："+keyword)
    },
    changeClass(id){
      console.log("更改分类："+id)
      this.currentServiceClass = id
    },
    handleCurrentChange(val){
      this.currentPage = val
      this.loadingTableData()
    },
    handleSizeChange(val){
      this.pageSize = val
      this.loadingTableData()
    },
    loadingTableData(){
      // 加载表格数据
      console.log("加载表格数据")
    },
    seeDetails(row){
      this.$router.push({name:'consoleServiceDetail'})
    }

  }
}
</script>
