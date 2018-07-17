<template>
  <el-row class="margin--bottom-15">
    <i class="fa fa-bars" aria-hidden="true"></i>
    &nbsp;&nbsp;
    <span v-if="title2 ==''"> {{ title }} </span>
    
    <div v-else style="display:inline-block"> 
      <a @click="jumpPage({name:'consoleService'})"> 我的服务</a>
      >
      <span>{{ title2 }}</span>

    </div>
    &nbsp;&nbsp;&nbsp;
    <el-input  
    class="inputwidth1" 
    @change="querySearch" v-model="keyword" 
    suffix-icon="el-icon-search" 
    v-if="isShow"
    placeholder="输入想要检索的关键字"></el-input>
    <br />
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      keyword:''
    }
  },
  computed:{
    title (){
      
      return this.$route.meta.title
    },
    title2(){
      if(this.$route.name == "consoleServiceDetail"){
        return  this.$route.meta.title
      }
      return ''
    },
    isShow() {
      if(this.$route.name == "consoleMyApplicantion"){
        return false
      }
      if(this.$route.name == "consoleMine"){
        return false
      }
      if(this.$route.name == "consoleServiceDetail"){
        return false
      }
      return true
    }
  },
  methods:{
    querySearch () {
      this.$emit("querySearch",this.keyword)
    },
    jumpPage (params) {
      this.$router.push(params)
    }
  }
  
}
</script>
<style scoped>
.margin--bottom-15{
  margin-bottom: 15px;
}

</style>


