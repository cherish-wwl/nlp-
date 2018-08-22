<template>
  <div>
    <title-tool></title-tool>
    <br />
    <el-row>
      <el-table :data="detailData" border style="width: 100%">
        <el-table-column prop="appName" label="应用名称" min-width="80"></el-table-column>
        <el-table-column prop="appKey" label="App Key" min-width="180"></el-table-column>
        <el-table-column prop="appSecret" label="App Secret" min-width="180"></el-table-column>
        <el-table-column prop="platformArray" label="应用平台"></el-table-column>
        <el-table-column prop="creatTime" label="创建时间" min-width="100"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="jumpPage(scope.row)" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <h4> >服务列表</h4>
    <el-row>
      <el-table :data="serviceData" border style="width: 100%">
        <el-table-column prop="serviceName" label="服务名称" min-width="80"></el-table-column>
        <el-table-column prop="className" label="所属分类" min-width="180"></el-table-column>
        <el-table-column prop="url" label="访问地址" min-width="180"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="frequency" label="限制" min-width="100"></el-table-column>
      </el-table>
    </el-row>
    <h4> >应用描述</h4>
    <el-row>
      <p>
        {{applicationDesrc}}
      </p>  
    </el-row> 
  </div>
</template>
<script>
import titleTool from "@/components/TitleTool"
import { getAppliactionDetailsByAId } from "@/api/myApplicantion"
export default {
  data () {
    return {
      currentPage:1,
      pageSize:10,
      totalNum:8,
      appId:"",
      applicationDesrc:"描述内容实体识别描述内容实体识别，描述内容实体识别",
      detailData:[],
      serviceData: [
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
  components:{
    titleTool
  },
  methods:{
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
      getAppliactionDetailsByAId({appId:this.$route.query.id}).then( res => {
        this.applicationDesrc = res.data.appDesc
        this.appId = res.data.appId
        this.serviceData = res.data.serviceList
        let platformArrayNames = []
        res.data.platformArray.forEach(element => {
          platformArrayNames.push(element.platformName)
        });
        this.detailData= [{
          appId:res.data.appId,
          appKey:res.data.appKey,
          appName:res.data.appName,
          appSecret:res.data.appSecret,
          appState:res.data.appState,
          appType:res.data.appType,
          creatTime:res.data.creatTime,
          platformArray:platformArrayNames.join(','),
          creatTime:res.data.creatTime,
        }]
      })
    },
    jumpPage(row){
      this.$router.push({name:'consoleMyApplicantionEdit',query:{id:row.appId}})
    }
  },
  mounted(){
    if(this.$route.query.id){
      this.loadingTableData()
    }else{
      this.$router.push({name:"consoleMyApplicantion"})
    }
  }
}
</script>

