<template>
  <el-main>
     <section class="app-main" id="app-main" v-show="getUserInfo">
        <transition name="fade" mode="out-in">
          <router-view :key="key"></router-view>
        </transition>
      </section>
  </el-main>
</template>
<script>
import store from '../../../store'
import { Message } from 'element-ui'
import { getCommonData } from "@/api/localData" //获取路径
export default {
  data(){
    return{
      getUserInfo:false
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  mounted(){
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });

    store.dispatch('GetInfo').then(res => { // 拉取用户信息
      this.getUserInfo = true
      loading.close()
    }).catch(() => {
      loading.close()
      store.dispatch('LogOut').then(() => {
        Message.error('验证失败,请重新登录')
        getCommonData().then(res => {
          window.location.href = res.userManageBaseUrL +"/login"
        })
      })
    })
  }
}
</script>
