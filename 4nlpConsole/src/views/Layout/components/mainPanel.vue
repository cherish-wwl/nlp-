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
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      getUserInfo:false
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    ...mapGetters([
      "userManageBaseUrL"
    ])
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
        window.location.href = this.userManageBaseUrL +"/login"
        
      })
    })
   
  }
}
</script>
