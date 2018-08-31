<template>
  <div class="serviceMode container_80">
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="temp_title">服务模式</h2>     
      </el-col>
    </el-row>
    <el-table class="hidden-md-and-down" :data="tableData.data"  border  highlight-current-row style="width: 100%">
      <el-table-column 
      align="center"  
      v-for="(item,index) in tableData.headList" 
      :prop="item.id" 
      :key="index" 
      :label="item.name"> 
      </el-table-column>
    </el-table>
    <el-table class="hidden-lg-and-up" :data="tableData.data" border highlight-current-row style="width:100%;">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item   
              v-for="(item,index) in tableData.headList" 
              :key="index" 
              :label="item.name+'：'">
              <span>{{ props.row[item.id] }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column 
        align="center"  
        v-for="(item,index) in tableData.headList" 
        v-if="index<2"
        :prop="item.id" 
        :key="index" 
        :label="item.name"> 
        </el-table-column>

    </el-table>
    <p class="smaller font_color_grey">{{tableData.remark}}</p>
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

      window.open(this.tableData.jumpURL,"_blank")
    }
  },
  props:["tableData"],

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>

