<template>
  <el-menu
    :show-timeout="200"
    :default-active="defaultIndex"
    mode="vertical"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    class="el-menu-vertical-demo">
    <child-item v-for="item in menuData" :menuData="item" :key="item.id"></child-item>
  </el-menu>
</template>
<script>
import ChildItem from './ChildItem'
export default {
  props: ['menuData', 'defaultActive'],
  components: {
    ChildItem
  },
  data() {
    return {
      defaultIndex: ""
    }
  },
  mounted() {
    setTimeout(() => {
      this.defaultIndex = this.defaultActive
    },500)  
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
      this.$emit("handleOpen", key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
      this.$emit("handleClose", key, keyPath)
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
      this.$emit("handleSelect", key, keyPath)
    }
  }
}
</script>