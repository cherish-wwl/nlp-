<template>
  <div>
    <title-tool></title-tool>
    <br />
    <br />
    <el-row> 
      <el-col :span="2" class="tltle-panel f16">
        用户名：
      </el-col>
      <el-col :span="22" class="content-panel f16">
        {{ userName }}
      </el-col>
    </el-row>
    <br />
    <el-row> 
      <el-col :span="2" class="tltle-panel f16">
        所属机构：
      </el-col>
      <el-col :span="22"  class="content-panel f16">
        {{ departmentName }}
      </el-col>
    </el-row>
    <br />
    <el-row> 
      <el-col :span="2" class="tltle-panel f16">
        电话：
      </el-col>
      <el-col :span="22"  class="content-panel f16">
        {{ phone }}
         &nbsp;
        &nbsp;
        <el-button type='text' size="mini">修改</el-button>
      </el-col>
    </el-row>
    <br />
    <el-row> 
      <el-col :span="2" class="tltle-panel f16">
        邮箱：
      </el-col>
      <el-col :span="22" class="content-panel f16" >
        {{ email }}
        &nbsp;
        &nbsp;
        <el-button type='text' size="mini">修改</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { titleTool } from "@/views/console/components/index"
import { getToken, getUserName } from '@/utils/auth'
export default {
  data (){
    return {
      departmentName:"神州泰岳",
      phone:"13788883434",
      email:'admin123@cnlp.com'
    }
  },
  components:{
    titleTool
  },
  computed:{
    userName (){
      return getUserName()
    }
  }
}
</script>
<style scoped>
  .tltle-panel{
    font-weight: 400;
    font-style: normal;
    color: rgba(153, 153, 153, 0.949019607843137);
    text-align: right;
  }
  .content-panel{
    font-weight: 400;
    font-style: normal;
    color: rgba(51, 51, 51, 0.949019607843137);
  }
  *{
    padding: 0;
  }
</style>

