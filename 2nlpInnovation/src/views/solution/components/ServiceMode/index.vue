<template>
  <div class="serviceMode container_80">
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="temp_title">服务模式</h2>     
      </el-col>
    </el-row>
    <el-table :data="list"  border  highlight-current-row style="width: 100%">
      <el-table-column 
      align="center"  
      v-for="(item,index) in tableData.headList" 
      :prop="item.id" 
      :key="index" 
      :label="item.name"> 
      </el-table-column>
    </el-table>
    <p class="smaller font_color_grey">注：每套翻译引擎部署在一张GPU卡上，一个语言方向的机器翻译引擎为1套机器翻译引擎，比如中译英为一套机器翻译引擎，英译中为另一套机器翻译引擎。</p>
    <el-row class="text_center">
      <br />
      <br />
      <el-button type="primary" @click="jumpPage">马上使用</el-button>
      <br />
      <br />
    </el-row>
  </div>
</template>

<script>


export default {
  data() {
    return {
      list: this.tableData.data,
    }
  },
  methods:{
    jumpPage(){
      window.open("http://fanyi.niutrans.com/","_blank")
    }
  },
  props:["tableData"],

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>

