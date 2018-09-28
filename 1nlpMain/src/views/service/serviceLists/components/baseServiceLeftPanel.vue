<template>
  <el-collapse v-model="activeNamesTemp">
    <el-collapse-item  v-for='item in collapseData' :key='item.id'  :name="item.id">
      <template slot="title">
        <svg-icon :icon-class="item.icon" ></svg-icon>
        <span class="font18">{{ item.name }}</span>
      </template>
      <ul>
        <li class='font16' 
          v-for="child in item.children" 
          :class="currentServiceId == child.id ?'active':''" 
          :key="child.id" 
          @click="chooseServiceItem(child)">
          {{ child.name }}
        </li>
      </ul>
    </el-collapse-item>
  </el-collapse>
</template>

<script>

export default {
  props:["activeNames","collapseData","currentServiceId"],
  data (){
    return {
      activeNamesTemp:this.activeNames
    }
  },
  watch:{
    activeNames(val) {
      this.activeNamesTemp = val
    }
  },
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
  list-style: none;
  margin: 0;
  padding: 0;
  li{
    line-height: 35px;
    padding-left: 30px;
    cursor: pointer;
    &:hover,&.active{
      border-right:3px solid blue;
      background-color: #dcdcdf78;
    }
  }
}
.el-collapse .el-collapse-item{
  .el-collapse-item__header , .el-collapse-item__wrap{
    border: none!important;
    .el-icon-arrow-right{
      display: none!important;
    }
  }
}

</style>
