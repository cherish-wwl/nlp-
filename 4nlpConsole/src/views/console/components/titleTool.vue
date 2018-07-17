<template>
  <el-row class="margin--bottom-15">
    <i class="el-icon-menu"></i>
    <!-- <i class="fa fa-bars" aria-hidden="true"></i> -->
      <!-- &nbsp;&nbsp; -->
    <span v-if="title2 ==''"> {{ title }} </span>
    
    <div v-else style="display:inline-block"> 
      <a @click="jumpPage"> {{title3}}</a>
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
      keyword:'',
      title3:'',
      backPageName:""
    }
  },
  computed:{
    title (){
      return this.$route.meta.title
    },
    title2(){
      if(this.$route.meta.attr && this.$route.meta.attr !=""){
        let routes = this.$router.options.routes
        this.backPageName = this.$route.meta.attr
        this.getParentTitle(routes)
        return  this.$route.meta.title
      }
      return ''
    },
    
    isShow() {
      if(this.$route.meta.search && this.$route.meta.search == true){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    querySearch () {
      this.$emit("querySearch",this.keyword)
    },
    jumpPage () {
      this.$router.push({name:this.backPageName})
    },
    getParentTitle(routes){
      routes.forEach(element => {
        if(element.children && element.children.length !=0){
          this.getParentTitle(element.children)
        }else{
          if(element.name == this.backPageName){
            this.title3 = element.meta.title
            
          }
        }
      })
      
    },
  }
  
}
</script>
<style scoped>
.margin--bottom-15{
  margin-bottom: 15px;
}

</style>


