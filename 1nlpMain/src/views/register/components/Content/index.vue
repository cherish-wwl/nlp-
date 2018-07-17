<template>
  <div class="register-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">欢迎注册</h3>
      <el-form-item prop="userName">
        <el-input name="userName" type="text" v-model="loginForm.userName" autoComplete="on" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="email">
        <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="请输入邮箱地址" />
      </el-form-item>
      <el-form-item prop="pass">
        <el-input name="password" :type="pwdType" v-model="loginForm.pass" autoComplete="on"
          placeholder="输入密码"></el-input>
          <span class="show-pwd" @click="showPwd(0)"> 
            <svg-icon v-if="pwdType == ''" icon-class="eye" />
            <i v-else class="el-icon-view"></i>
          </span>
      </el-form-item>
      <el-form-item prop="repass">
        <el-input name="repassword" :type="rePwdType" v-model="loginForm.repass" autoComplete="on" placeholder="再次输入密码"></el-input>
        <span class="show-pwd" @click="showPwd(1)">
          <svg-icon v-if="rePwdType == ''" icon-class="eye" />
          <i v-else class="el-icon-view"></i>
        </span>
      </el-form-item>
      <el-form-item prop="tel">
        <el-input name="phone" type="text" v-model="loginForm.tel" placeholder="手机号码" autoComplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          注册
        </el-button>
      </el-form-item>
      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div> -->
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername , isPhoneAvailable} from '@/utils/validate'
import { registerUser, checkedEmail } from "@/api/login"
import md5 from 'js-md5';
export default {
  
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validateRePass = (rule, value, callback) => {  
      if (value == '') {
        callback(new Error('请输入密码'))
      } else if(value !==this.loginForm.pass){
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (!isPhoneAvailable(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const validateEmail =(rule, value, callback) => {
      checkedEmail({email:value}).then( res => {
        if(res.code == "0003"){
          callback(new Error("邮箱已被注册"))
        }else{
          callback()
        }
        
      })
      
    }
      
    return {
      loginForm: {
        account:'',
        userName: '',
        pass: '',
        repass:'',
        tel:'',
        email:'',
      },
      loginRules: {
        userName: [
          { required: true, trigger: 'blur', message:"请输入用户名" },
          { min: 2, max:20, message: '长度在 2 到 20 个字符', trigger: 'blur' }],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max:12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        repass: [
            { required: true, trigger: 'blur', validator: validateRePass }
          ],
        email:[
          { required: true, message: '请输入邮箱地址', trigger: 'blur'},
          { type:'email', message: '请输入正确的邮箱地址', trigger: 'blur'},
          { trigger: 'blur', validator: validateEmail }

        ]
      },
      loading: false,
      pwdType: 'password',
      rePwdType:'password',
      countDownValue:60,
      verifiy:false
    }
  },
  methods: {
    showPwd(val) {
      if(val == 0){
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      }
      if(val == 1){
        if (this.rePwdType === 'password') {
          this.rePwdType = ''
        } else {
          this.rePwdType = 'password'
        }
      }
     
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.loginForm.account = this.loginForm.email
          this.loginForm.pass = md5(this.loginForm.pass)
          this.loginForm.repass = md5(this.loginForm.repass)
          registerUser(this.loginForm).then((res) => {
            this.$alert('注册成功！请您到邮箱里激活该帐号！', '提示：', {
              confirmButtonText: '确定',
              callback: action => {
                this.$emit("rebackPage")
              }
            });
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getVerificationCode (){
     
      this.verifiy = true
      let interval=setInterval(()=>{
        if(this.countDownValue == 0){
          this.verifiy = false 
          clearInterval(interval)
          return
        }
        this.countDownValue -= 1
      },1000)
       this.$message({
        message: '验证码发送成功！请注意接收',
        type: 'success'
      });
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
html, body, #app{
  height: 100%;
}
.register-container{
  background-color: rgb(241, 243, 245);
  background-image: url('../../../../assets/registerBg.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  // padding: 40px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 5%;
    font-size: 16px; 
    cursor: pointer;
    user-select:none;
  }
  form.el-form{
    background-color: #fff;
    // margin: 0 20%;
    // padding: 20px 15%;
    position: absolute;
    // width: 50%;
    // margin: auto;
    padding: 20px 100px;
    .el-input__inner{
      width: 400px;
    }
  }
 }
</style>
