<template>
  <el-aside width="200px" >
    <el-menu :default-active="activeIndex">
      <el-menu-item 
      v-for="(item,index) in routes"
      :key="index"
      v-if="item.children && item.children.length > 0"
      :index="item.children[0].name"
      @click="jumpPage(item.children[0].name)">
        <i :class="item.children[0].meta.icon"></i>
        <span slot="title">{{ item.children[0].meta.title }}</span>
      </el-menu-item>
     
    </el-menu>
    <button @click="activeIndex = ''"></button>
  </el-aside>
</template>
<script>
export default {
  data(){
    return {
      activeIndex:"consoleService",
      attrRoute:"",
      routes:''
    }
  },
  watch:{
    $route(val){
      this.init()
    }
  },
  methods:{
    init(){
      this.routes = this.$router.options.routes
      if(this.$route.meta.attr){       
        this.activeIndex = this.$route.meta.attr
      }else{   
        this.activeIndex = this.$route.name
      }  
      console.log(this.activeIndex) 
    },
    jumpPage(name){
      this.$router.push({name: name})
    }
  },
  created(){
    this.init()
  }
}
</script>
