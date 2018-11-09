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
              <el-checkbox-group class="checkboxPanel" v-model="joinUs.researchDirectionArray">
                <template v-for="item in getValueByDictCode">
                  <el-col :span="item.dictCode == '024013'?24:11" :key="item.dictCode">
                    <el-checkbox :label="item.dictCode">
                      {{ item.dictName }}
                    </el-checkbox>
                    <el-input @input="vaildOther" class="otherInput" v-model="joinUs.others" v-if="item.dictCode == '024013'" />                             
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
// var validateResearchDirection
export default {
  name: 'plnformation',
  data() {
      var validateResearchDirection = (rule, value, callback) => {
      if(this.joinUs.researchDirectionArray.length == 0) {
        callback(new Error('请选择其他研究方向'));
      }else{
        if( this.joinUs.researchDirectionArray.indexOf("024013") !== -1){
          if ( this.joinUs.others === '') {
            callback(new Error('请输入其他研究方向'));
          } else { 
            callback();
          }
        } else {
          callback();
        }
      }
    };
    var validatePhoneNumber = (rule, value, callback) => {
      console.log(value)
      var patrn = /^[0-9]*$/;
      if(value != '') {
        if (patrn.exec(value) == null || value == "") {
          callback(new Error('请输入正确电话号码'));
        } else {
          callback();
        }
      }else{
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
          { validator: validateResearchDirection, trigger: ['blur', 'change'] },
          { required: true, message: '请选择研究方向', trigger: 'blur' }
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
          if(this.joinUs.researchDirectionArray.length == 0){
            this.vaildOther()
            return false
          }
          if(this.joinUs.researchDirectionArray.indexOf("024013") !== -1){
            if(this.joinUs.others == ""){
              this.vaildOther()
              return false
            }
          }
          let result  = this.joinUs
          result.researchDirection = result.researchDirectionArray.join(',')
          if(this.joinUs.researchDirectionArray.indexOf("024013") === -1){
            result.others = null
          }
          addInfo(this.joinUs).then(res => {
            this.sucessSubmit = true
          })
         
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    vaildOther(){
      // researchDirectionArray
      this.$refs.formName.validateField('researchDirectionArray');
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



