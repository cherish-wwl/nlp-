<template>
  <div>
    <title-tool></title-tool>
    <br />
    <el-row>
      <el-select v-model="classId" @change="changClass" placeholder="请选择">
        <el-option
          v-for="item in classList"
          :key="item.classId"
          :label="item.name"
          :value="item.classId">
        </el-option>
      </el-select>
      <el-select v-model="serivceId" @change="triggerChartData" placeholder="请选择">
        <el-option
          v-for="item in serviceList"
          :key="item.serviceId"
          :label="item.serviceName"
          :value="item.serviceId">
        </el-option>
      </el-select>
      <el-date-picker
        v-model="dataRangeArray"
        type="daterange"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions2"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :clearable="false"
        @change="triggerChartData"
        align="right">
      </el-date-picker>
    </el-row>
    <br />
    <el-row>
      <div class="vue-echarts" id="echartContainer" style="width:100%; height:500px"></div>
    </el-row>
  </div>
</template>
<script>
import titleTool from "@/components/TitleTool"
import { getAllSecondServiceClass, getAllThirdServiceClass, getServicesListByCId, getServicesStatisticsBySId} from "@/api/myService"
import echarts  from 'echarts'
import { formatTime } from "@/utils/index"
export default {
  data (){
    return {
      classList: [],
      classId: '' ,
      serviceList: [],
      serivceId: '' ,
      pickerOptions2: {
        disabledDate:(time)=>{
            return time.getTime() > Date.now() - 8.64e7;
        },
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      dataRangeArray:""
    }
  },
  components:{
    titleTool
  },
  methods:{
    loadingCharts(xdata,ysuccessData,yFailData){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echartContainer'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        grid:{
          show:true
        },
        legend: {
          data:['调用成功','调用失败']
        },
        color:["#66cc00","#ff6600"],
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            // saveAsImage: {}
          }
        },
        xAxis:  {
          type: 'category',
          splitLine:{show: true},//网格线
          boundaryGap: false,
          data: xdata
        },
        yAxis: {
          type: 'value',
          boundaryGap: ['0', '20%'],
          splitLine:{show: true},//网格线
          axisLabel: {
            formatter: '{value} '
          },
          name:'次数'
        },
        series: [
          {
            name:'调用成功',
            type:'line',
            data:ysuccessData,
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            },
            itemStyle: {
              normal: {
                  lineStyle: {
                    width:5
                  }
              }
            },
          },
          {
            name:'调用失败',
            type:'line',
            data:yFailData,
            markLine: {
              data: [
                {type: 'average', name: '平均值'},       
              ]
            },
            itemStyle: {
              normal: {
                  lineStyle: {
                    width:5
                  }
              }
            },
          }
        ]
      });
    },
    // 加载服务列表
    loadingServiceList(){
      let params = {
        id: this.classId
      }
      getServicesListByCId(params).then(res => {
        this.serviceList = res.data
        this.serivceId =  this.serviceList[0].serviceId
        this.triggerChartData()   
      })
      
    },
    // 改变服务分类
    changClass(val){
      this.serivceId = ''
      this.serviceList = []
      this.loadingServiceList()
    },
    // 加载表格数据
    triggerChartData(){
      console.log(this.serivceId)
      if(this.serivceId == ""){
        document.getElementById('echartContainer').style.display ="none"
      }else{
        let params = {
          startTime:this.dataRangeArray[0],
          endTime: this.dataRangeArray[1],
          serviceId:this.serivceId,
        }

        getServicesStatisticsBySId(params).then(res => {
            this.loadingCharts(res.data.date,res.data.success,res.data.fail)
        })
      }
      
    }

  },
  mounted() {
    const end = formatTime(new Date(),'{y}-{m}-{d}')
    const start = formatTime(new Date(new Date().getTime() - 3600 * 1000 * 24 * 7),'{y}-{m}-{d}')
    this.dataRangeArray = [start, end]
    // 获取所有分类列表
    getAllThirdServiceClass().then(res => {
      this.classList = res.data
      if(this.$route.query.cId){
        this.classId = this.$route.query.cId        
        getServicesListByCId({id: this.classId}).then(res => {
          this.serviceList = res.data
          if(this.$route.query.sId){
            this.serivceId = this.$route.query.sId
          }else{
            this.serivceId =  this.serviceList[0].id
          }
          // 默认加载最近一周数据
          this.triggerChartData()
        })
        
      }else{
        // 默认加载第一个分类下的服务
        this.classId = this.classList[0].id
        getServicesListByCId({id: this.classId}).then(res => {
          this.serviceList = res.data
          if(this.$route.query.sId){
            this.serivceId = this.$route.query.sId
          }else{
            this.serivceId =  this.serviceList[0].id
          }
          // 默认加载最近一周数据
          this.triggerChartData()
        })
        
      }
     
    })
    
   
    
  }

}
</script>
<style scoped>
 
</style>

