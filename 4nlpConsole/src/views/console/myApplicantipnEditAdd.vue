<template>
  <div class="myApplicantipnEditAdd">
    <title-tool></title-tool>
    <br />
    <el-row>
      <el-form ref="applicantionForm" :model="applicantionInfo" label-width="120px" :rules="rules">
        <el-form-item label="应用名称：" prop="name">
          <el-input class="customwidth1" v-model="applicantionInfo.name" placeholder="请填写应用名称"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="应用类型：" prop="type">
              <el-select v-model="applicantionInfo.type" placeholder="请选择">
                <el-option v-for="item in aTypeList"  :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="应用平台：" prop="platformArray">
              <el-select
                v-model="applicantionInfo.platformArray"
                multiple
                filterable
                default-first-option
                placeholder="请选择">
                <el-option v-for="item in aPlatformList"  :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>  

        <el-form-item label="服务选择：">   
            <el-checkbox-group class="font16 serviceBox" v-model="applicantionInfo.serviceArray">
              <el-col :span="6" v-for="(i,a) in 4" :key="i">
                <ul v-for="(item,index) in serviceList" 
                  v-if="index>=(0+a*serviceClassRowsCount)&&index<(parseInt(serviceClassRowsCount)+parseInt(a*serviceClassRowsCount))" :key="item.id" >
                  <li><label :title="item.name"> {{ item.name }}</label></li>
                  <li v-for="child in item.children" :key="child.id" >
                    <el-checkbox :label="child.id" name="serviceIds">{{ child.name }}</el-checkbox>
                  </li>
                </ul>
              </el-col>
              
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input type="textarea" v-model="applicantionInfo.desrc"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="text_center">
      <el-button
        type="primary"
        @click="submitForm"
        v-loading.fullscreen.lock="fullscreenLoading">
        保存
      </el-button>
      <el-button @click="returnPage">
        返回
      </el-button>
    </el-row>
  </div>
</template>
<script>
import { titleTool } from "@/views/console/components/index"
import { getApplicationTypeList, getSevicesListOfTree, getApplicationPlatformList, addApplication,editApplication, getAppliactionDetailsByAId} from "@/api/myApplicantion"
export default {
  data () {
    return {
      fullscreenLoading:false,
      columnCount:'4',
      serviceClassRowsCount:'5',
      applicantionInfo:{
        name:'',
        type:'',
        platformArray:[],
        desrc:'',
        serviceArray:[]
      },
      rules:{
        name: [
          { required: true, message: '请输入应用名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择应用类型', trigger: 'change' },
        ],
        platformArray: [
          { required: true, message: '请选择应用平台', trigger: 'change' }
        ],
      },
      aTypeList:[],
      aPlatformList:[],
      serviceList:[]
    
    }
  },
  components:{
    titleTool
  },
  methods:{
    init(){
      // 获取服务列表
      getSevicesListOfTree().then(res=>{
        this.serviceList = res.data 
        // 每列展示多少条数据
        this.serviceClassRowsCount = Math.round(this.serviceList.length/4)
      })
      
      // 获取类型列表
      getApplicationTypeList().then(res=>{
        this.aTypeList = res.data 
      })
      // 获取平台列表
      getApplicationPlatformList().then(res=>{
        this.aPlatformList = res.data 
      })
      if(this.$route.name == "consoleMyApplicantionEdit" && this.$route.query.id){
        // 获取应用详情
        getAppliactionDetailsByAId({appId:this.$route.query.id}).then(res =>{
          this.applicantionInfo.desrc = res.data.appDesc
          this.applicantionInfo.name =res.data.appName
          this.applicantionInfo.type = res.data.appType

          let platformArray =  res.data.platformArray
          let platformArrayIds = []
          platformArray.forEach(element => {
            platformArrayIds.push(element.platformId)
          });
          this.applicantionInfo.platformArray = platformArrayIds

          let serviceArray = []
          res.data.serviceList.forEach(element => {
            serviceArray.push(element.serviceId)
          });
          this.applicantionInfo.serviceArray = serviceArray
        })
      }
    },
    submitForm(){
      this.$refs.applicantionForm.validate(valid => {
        if(valid){
          this.fullscreenLoading = true
          let params = {
            platformArray: this.applicantionInfo.platformArray.join(","),
            serviceArray: this.applicantionInfo.serviceArray.join(","),
            name: this.applicantionInfo.name,
            type: this.applicantionInfo.type,
            desrc: this.applicantionInfo.desrc
          }
          console.log(params)
          if(this.$route.name == "consoleMyApplicantionAdd"){
            addApplication(params).then( res => {
              this.fullscreenLoading = false
              this.$message({
                message: '创建成功！',
                type: 'success'
              })
              this.returnPage()
            }).catch(()=>{
              this.fullscreenLoading = false
            })
          }else if(this.$route.name == "consoleMyApplicantionEdit"){
            params.id = this.$route.query.id
            editApplication(params).then( res => {
              this.fullscreenLoading = false
              this.$message({
                message: '保存成功！',
                type: 'success'
              })
              this.returnPage()
            }).catch(()=>{
              this.fullscreenLoading = false
            })
          }else{
            // 其他未知状态 返回我的
            this.returnPage()
          }
         
        }else{
          this.$message('请您完整填写数据！');
        }
      })
    },
    returnPage() {
      this.$router.push({name:'consoleMyApplicantion'})
    }
  },
  mounted(){
    this.init()
    
  }
}
</script>

