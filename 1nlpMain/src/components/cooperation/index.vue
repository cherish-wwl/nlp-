<template>
  <el-row class="cooperation-content content">
    <el-row class="text_center">
      <h2 class="font30">{{ cooperationData.title }}</h2>
    </el-row>
    <el-row class="display_panel">
      <div v-for="(item,index) in cooperationData.data" :key="index" class="coulum-3" v-on:mouseenter="currentIndex = index">
        <img v-if="currentIndex == index" :src='item.img'/>
        <img v-else :src='item.activeImg'/>
      </div>
      
    </el-row>
    <br />
    <br />
    <br />
    <br />
  </el-row>
</template>
<script>
export default {
  props:['cooperationData'],
  data () {
    return {
      currentIndex:0
    }
  }
}
</script>
<style lang="scss" scoped>
.cooperation-content{
  background-color: #f3f3f3;
  .display_panel{
    .coulum-3 {
      width: 23%;
      display: inline-block;
      clear: both;
      margin: 8px;
    }
    img{
      width: 100%;
      cursor: pointer;
    }
  }
}
  
</style>


