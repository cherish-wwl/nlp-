<template>
  <div>
    <div v-show="!sucessSubmit">
      <el-row class="info-title">
        <h3 class="font20">个人信息</h3>
        <p class="font18">欢迎加入“中文信息（深度）处理开放创新平台”!</p>
        <p class="font18">我们会在平台展示您的简介及学术成果，</p>
        <p class="font18">并及时与您共享商业化合作需求，促成更多技术转化!</p>
      </el-row>
      <el-row>
        <el-col :xl="12" :md="12" :xs="24">
          <el-form :model="joinUs" ref="formName" :rules="rules" label-width="80px">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="joinUs.name"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop="company">
              <el-input v-model="joinUs.company"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="mail"> 
              <el-input v-model="joinUs.mail"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phoneNumber">
              <el-input v-model="joinUs.phoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="研究方向" prop="researchDirectionArray" width="80px">
              <el-checkbox-group class="checkboxPanel" v-model="joinUs.researchDirectionArray"  @change="changeDirection">
                <template v-for="item in getValueByDictCode">
                  <el-col :span="item.dictCode == '024013'?24:11" :key="item.dictCode">
                    <el-checkbox :label="item.dictCode">
                      {{ item.dictName }}
                    </el-checkbox>
                    <el-input class="otherInput" v-model="joinUs.others" v-if="item.dictCode == '024013'" />
                  </el-col>
                </template>   
              </el-checkbox-group>
            </el-form-item>
            <el-row class="btn_panel">
              <el-button :disabled="sucessSubmit" class="font25" type="primary" @click="onSubmit('formName')">提交</el-button>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
     
    </div>
    <div class="suessInfo" v-show="sucessSubmit">
      <p class="font18">提交成功！</p>
      <p class="font18">欢迎加入“中文信息（深度）处理开放创新平台”!</p>
      <p class="font18">我们会在平台展示您的简介及学术成果，</p>
      <p class="font18">并及时与您共享商业化合作需求，促成更多技术转化!</p>
      <router-link :to="{name:'home'}">
        <el-button type="primary" plain class="font18">
          返回首页
        </el-button>
      </router-link>
      
    </div>
    
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { addInfo, getValueByDictCode } from '@/api/home'
export default {
  name: 'plnformation',
  data() {
    var validateResearchDirection = (rule, value, callback) => {
      if(value.length ===  1&& value[0] === "024013"){
        if ( this.joinUs.others === '') {
          callback(new Error('请输入其他研究方向'));
        } else { 
          callback();
        }
      } else {
        callback();
      }
    };
    var validatePhoneNumber = (rule, value, callback) => {
      console.log(value)
      var patrn = /^[0-9]*$/;
      if (patrn.exec(value) == null || value == "") {
        callback(new Error('请输入正确手机号码'));
      } else {
        callback();
      }
    };
    return {
      joinUs: {
        name: '',
        company: '',
        phoneNumber: '',
        mail: '',
        researchDirectionArray: [],
        others: ''
      },
      getValueByDictCode: '',
      sucessSubmit: false,
      rules: {
        name: [
          { required: true, message: '请输入专家名称', trigger: 'blur' },
          { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入单位名称', trigger: 'blur' },
        ],
        researchDirectionArray: [
          { required: true, message: '请输入研究方向', trigger: 'blur' },
          { validator: validateResearchDirection, trigger: 'change' }
        ],
        mail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        phoneNumber: [   
          { required: false, validator: validatePhoneNumber,trigger: 'blur'}
        ]
       },
       
    }
  },
  computed: {
    ...mapGetters([
      'dictList'
    ])
  },
  mounted(){
    getValueByDictCode().then(res => {
        this.getValueByDictCode = res.data
    })
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid){
          let result  = this.joinUs
          result.researchDirection = result.researchDirectionArray.join(',')
          if(this.joinUs.researchDirectionArray.length ===  1&& this.joinUs.researchDirectionArray[0] === "024013"){
            result.researchDirection = null
          }else{
            result.others = null
          }
          addInfo(this.joinUs).then(res=>{
            this.sucessSubmit = true
          })
         
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    changeDirection(val) {
      console.log(val)
      if(val[val.length-1] == "024013"){
        this.joinUs.researchDirectionArray =  ["024013"]
        return
      } 
      if(val.indexOf("024013") !== -1 ){
       
        this.joinUs.researchDirectionArray.splice(val.indexOf("024013"), 1); 
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.info-title{
  padding-left: 50px;
}
.el-form{
  margin-top: 20px;
  padding-right: 25px;
  min-height: calc(65vh)
}
.otherInput{
  width: auto !important;
  margin-left: 10px;
}
.el-footer{
  background: #fff
}
.btn_panel{
  text-align: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 9px;
  z-index: 999;
}
.el-button{
  width: 100%;
}
.checkboxPanel /deep/ .el-checkbox__label {
    white-space: normal;
    vertical-align: text-top;
    padding-right: 22px;
}
.btn_panel{
  padding: 0 12px;
}
.suessInfo {
  height: calc(81vh);
  padding: 12px;
  display: flex;
  flex-direction: column;
}
</style>



