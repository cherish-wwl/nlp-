<template>

  <el-container class="detail">
    <el-aside width="350px"> 
      <left-mnue 
        :menuData="menuData" 
        :defaultActive="currentServiceId"
        backgroundColor="#e9edf1"
        textColor="#666666"
        activeTextColor="#099bdf"
        showService=true 
        @handleSelect="chooseServiceItem"/> 
    </el-aside>
    <el-main>
      <el-row>
        <div class="brief">
          <el-row class="font20">
            <h3>简介：</h3>
          </el-row>
          <el-row class="font16" >
            <article v-html="techDocmentGlobalDesrc"></article>
          </el-row>
          <br>
        </div>
        <div>
          <el-row class="font20">
            <h3>{{ classtype == '001'?'基础':'应用'}}服务接口：</h3> <!-- 数据 -->
          </el-row>
          <el-row class="font16">
            {{data.serviceName}} <!-- 数据 -->
          </el-row>
          <el-row class="font20">
            <h3>接口描述：</h3>
            <span class="font16">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ data.interfacetext }}
            </span>
          </el-row>
        </div>
        <div>
          <el-row class="font20">
            <h3>请求说明：</h3>
            <h4>请求示例：</h4>
          </el-row>
          <el-row>
            <span class="font16">HTTP方法：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="Method">{{data.httpmethod}}</span><br><br>
            <span class="font16">HTTP方法路径:&nbsp;&nbsp;</span><span class="Method">{{data.globalurl}}</span><br>
          </el-row>

            <div>
            <el-row>
              <h3><span>Body请求示例:</span></h3>
              <pre class="JSONhtmlStyle" v-html="bodyexample"> </pre>
            </el-row>
            </div>
            <div>
              <el-row>
                <h3>请求参数：</h3>
                <el-col>
                  <el-table :data="tableData1"  border style="width: 100%" class="table">
                    <el-table-column prop="paraname" label="参数"> </el-table-column>
                    <el-table-column prop="needorno" label="是否必填"> </el-table-column>
                    <el-table-column prop="type" label="类型"> </el-table-column>
                    <el-table-column prop="explain_" label="说明"> </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <h3>返回参数：</h3>
                <el-col>
                  <el-table :data="tableData2"  border style="width: 100%" >
                    <el-table-column prop="paraname" label="参数"> </el-table-column>
                    <el-table-column prop="type" label="类型"> </el-table-column>
                    <el-table-column prop="explain_" label="说明"> </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </div>
            <div>
              <h3>返回示例：</h3>
              <el-col>
                <pre class="JSONhtmlStyle" v-html="backexample"></pre>
                <br><br><br>
              </el-col>
            </div>
        </div>
      </el-row>
      <div class="doc_contact">
          <el-row class="font16">
            如果您对文档内容有任何疑问，可以通过以下几种方式联系我们：
          </el-row>
          <el-row class="font16">
            联系电话：010-57973555（9:00-18:00）
          </el-row>
          <el-row class="font16">
            邮箱：China-NLP@ultrapower.com.cn
          </el-row>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { techDocument } from '@/api/techDocument'
import { getServiceDetails } from '@/api/serviceLists'
import { syntaxHighlight } from '@/utils/index'
import  LeftMnue  from '@/components/LeftMnue'
import { getMenus } from '@/api/header'
import { mapGetters } from "vuex"
export default {
  components:{
    LeftMnue
  },
  computed:{
    ...mapGetters([
      "techDocmentGlobalDesrc"
    ])
  },
  data () {
    return {
      data: '',
      tableData1: null,
      tableData2: null,
      backexample: {},
      bodyexample: {},
      classtype: '001',
      menuData: '',
      currentServiceId: ''
    }
  },
  methods:{ 
    // 初始化
    init() {
      getMenus().then(response => {
        if(response.data.length == 0 ) return
        this.getDefaultServiceId(response.data)
        this.currentServiceId = this.$route.params.serviceId || this.currentServiceId
        this.menuData = response.data
        this.refushDoc()
      })  
    },
    // 刷新技术文档
    refushDoc() {
      techDocument({serviceId: this.currentServiceId}).then( res => {
        if(res.data != null){
          this.data = res.data
          this.tableData1 = res.data.requestPara
          this.tableData2 = res.data.responsePara
          let backexample = res.data.backexample
          let bodyexample = res.data.bodyexample
          if( bodyexample && bodyexample != "" ){
            // console.log("bodyexample"+this.disposeData(bodyexample))
            this.bodyexample = this.disposeData(bodyexample) 
          }
          if(backexample && backexample != ""){
            this.backexample = this.disposeData(backexample) 
          }
          
        }else{
          this.data = ''
          this.tableData1 = null
          this.tableData2 = null
          this.backexample = {}
          this.bodyexample = {}
          this.classtype = '001'
        }
      })
      getServiceDetails(this.currentServiceId).then(response =>{
        this.classtype = "001"
        if(response.data.class_id){
          this.classtype= response.data.class_id.slice(0,3)
          this.data.serviceName = response.data.serviceName
        } 
      })
    },
    // 递归获取第一个服务id
    getDefaultServiceId(data){
      if(data[0].children){
        this.getDefaultServiceId(data[0].children)
      }else{
         this.currentServiceId = data[0].serviceList[0].id
        // console.log(result)
        return 
      }

    },
    // 点击左侧菜单事件
    chooseServiceItem(id){
      this.$route.params.serviceId = id
      this.currentServiceId = id
      this.refushDoc()
    },
    // json数据 结构化展示
    disposeData(str){
      if(typeof str == 'string'){
        try {
            var obj=JSON.parse(str.trim('"').toString());
            if(typeof obj == 'object' && obj ){
              return syntaxHighlight(obj);
            }else{
                return '"'+str+'"';
            }

        } catch(e) {
            console.log('error：'+str+'!!!'+e);
            return '"'+str+'"';
        }
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .detail {
    width: 1200px;
    margin: 1px 0px auto;
  }
  .el-aside{
    background-color: #e9edf1;
  }
  .Method{
    border: solid 1px;
    border-color: #EAEAEA;
    padding: 5px 10px;
    background-color: #f5f5f5
  }
  .doc_contact{
    text-align: center; 
    color: rgb(165, 164, 164)
  }
  .brief{
    line-height: 26px
  }
  .JSONhtmlStyle{
    font-size: medium;
    line-height: normal
  }
  .table{
    color: #333
  }

</style>
