<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <div class="text_center"> <img src="../../assets/cnlp_logo2.png"/></div>
      <div class="login_tit">用户登录</div>
      <el-form-item prop="username">
        
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">   
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="password"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
         登录
        </el-button>
      </el-form-item>

      <div class="tips">
        <!-- <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span> -->
        <span style="float: right;"><router-link :to="{name:'register'}">>>没有账号？去注册</router-link></span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'loginContent',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm)
          this.$emit("closeDialog",false)
          this.loading = false
          // this.$store.dispatch('Login', this.loginForm).then(() => {
          //   console.log("登录成功！")
          //   this.$emit("closeDialog",false)
          //   this.loading = false
          //   this.$router.push({ path: '/' })
          // }).catch(() => {
          //   this.loading = false
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
 .login-container{
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 5%;
      font-size: 16px; 
      cursor: pointer;
      user-select:none;
    }
    .login_tit {
      font-size: 14px;
      color: #999;
      text-align: center;
      margin-top: 12px;
      margin-bottom: 16px;
      &:before {
        margin-right: 20px;
      }

      &:after, &:before {
          content: "";
          width: 80px;
          height: 1px;
          background-color: #dbdbdb;
          display: inline-block;
          vertical-align: middle;
          position: relative;
      }
    }
    .el-form-item:last-child{
      margin-bottom: 0;
    }
    .tips{
      a:hover,a:focus{
        color: #409EFF
      }
    }
 }
</style>
