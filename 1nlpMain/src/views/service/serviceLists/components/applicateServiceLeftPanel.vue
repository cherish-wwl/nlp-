<template>
    <ul>
      <li 
        class="font18"
        v-for="item in collapseData" 
        :class="currentServiceId == item.id ?'active':''" 
        :key="item.id"
        @click="chooseServiceItem(item)">
        <svg-icon class="font20" :icon-class="item.icon" ></svg-icon>
        <span>&nbsp; {{ item.name }}</span>
      </li>
    </ul>
  
</template>
<script>
export default {
  props:["collapseData","currentServiceId"],
  
  methods:{
    // 调用父类列表刷新事件
    chooseServiceItem(e){
      this.$emit("chooseServiceItem",e)
    }
  }
 
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

ul{
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  li{
    line-height: 3rem;
    cursor: pointer;
    &:not(:first-child),&:not(:last-child){
      padding: 0.75rem 1.5rem 0.75rem 1.5rem;
    }
    &:hover, &.active {
      border-right:3px solid blue;
      background-color: #dcdcdf78;
    }
  }

}
</style>
