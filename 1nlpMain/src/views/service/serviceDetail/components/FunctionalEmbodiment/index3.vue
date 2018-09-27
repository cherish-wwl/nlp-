<template>
   <el-container class='functionalEmbodiment'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="font30">功能体验</h2>  
        <!-- <p class="small font_color_grey">采用双向最大匹配方法实现最长分词匹配</p>     -->
      </el-col>
    </el-row>
    <br />
    <br />
    <el-row class='panel'>
      <el-col :span='20'>
        <div class='viewPanel'>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="beforeValue">
          </el-input>
        </div>
      </el-col>
      <el-col :span="20">
        <pre class="JSONhtmlStyle viewPanel" v-html="disposeValue"> </pre>
      </el-col>
      <el-col :span='20' class="text_center">
        <el-button type="primary" :loading="waiting" @click.native="execute">&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;&nbsp;&nbsp;&nbsp; </el-button>
      </el-col>
      <el-col :span='20'>
        <pre class="JSONhtmlStyle viewPanel" v-html="afterValue"> </pre>
      
      </el-col>
    </el-row>
   </el-container>
</template>

<script>
  import { serviceDetailsExecute , serviceGetCertificate} from '@/api/serviceLists'
  import { syntaxHighlight } from '@/utils/index'
  export default {
    data () {
      return {
        beforeValue: null,
        disposeValue:null,
        afterValue: null,
        executeUrl:'',
        waiting:false
      }
    },
    props:["inArg",'type'],
    watch:{
      inArg(val){
        this.beforeValue = val
        this.disposeValue = this.disposeData(val)
      }
    },
    methods:{
      execute () {
        this.waiting = true
        serviceGetCertificate().then( res=>{
          
          let params ={'serviceId':this.$route.params.service_id,'type':this.type,'certificate': res.data,'param': this.beforeValue,}
      
          serviceDetailsExecute(params).then( response =>{
            if(response.data.data){
              this.afterValue = this.disposeData(response.data.data)
            }else{
              this.afterValue = this.disposeData(response.data)
            }
            this.waiting = false
          })
        })
        
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
    mounted () {
      // this.init()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .functionalEmbodiment {
    display: block;
    background-color: #f2f2f2;
    padding-bottom: 50px;
    h2{
      font-weight:500;
      margin: 45px 0;
    }
    .panel{
      display: flex;
      align-items: center;
      flex-direction: column;
      .viewPanel{
        height: 200px; // float: left;
        background-color: #fff;
        overflow: scroll;
        overflow-x: hidden;
        padding: 10px;
        color: #606266;
        font-size: 14px;
        border: 1px solid #ddd;
        line-height: 21px;
      }
      
    }
    
    
  }
</style>

