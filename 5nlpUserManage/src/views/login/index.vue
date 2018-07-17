<template>
  <div class="login-container">
    <div class="bg-img">
      <img src="../../assets/regist_bg.jpg" />
    </div>
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">中文信息深度处理开放创新平台</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="email" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入邮箱地址" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="font16" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
       <!-- <el-button type="text" style="width:10%;" class="float_left" :loading="loading" >
          <a>忘记密码？</a>
        </el-button> -->
        <el-button type="text" class="float_right font16" :loading="loading" @click.native="jumpPage({name:'register',params: { serviceId:  1}})">
          立即注册 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
        </el-button>
    </el-form>
    
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import { getCommonData }  from "@/api/localData"
import md5 from 'js-md5';
export default {
  name: 'login',
  data() {
  
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
        username: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur'},
          { type:'email', message: '请输入正确的邮箱地址', trigger: 'blur'},
        ],
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
    jumpPage(params){
      // let routeData = this.$router.resolve(params)
      // window.open(routeData.href, "_blank")
      this.$router.push(params)
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          console.log(this.loginForm)
          let params = {
              username: this.loginForm.username,
              password:md5(this.loginForm.password)
          }
          this.$store.dispatch('Login', params).then((res) => {
            getCommonData().then( res => { 
              window.location.href = res.consoleUrl            
            })
            this.loading = false
          }).catch((e) => {
            this.loading = false
          })
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
  .login-container {
    .bg-img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -10;
    }
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      // color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      // color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #000;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 711px;
      padding: 50px 136px;
      top:30px;
      margin: 0 auto;
      background-color: #fff;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      // color: $dark_gray;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
