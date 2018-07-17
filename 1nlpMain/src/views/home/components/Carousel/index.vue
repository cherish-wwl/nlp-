<template>
    <el-carousel height="470px" :interval="5000">
      <el-carousel-item v-for="(item, index) in datalist" :key="index">
        <template v-if="item.link == ''" >
          <img :src='item.imgUrl' class="carouse-img"/>
        </template>
        <template v-else>
          <a  @click="jumpPage(item)" target="_blank" class="carouse-img">
            <img :src='item.imgUrl' class="carouse-img"/>
          </a>
        </template>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  import Cookies from 'js-cookie'
  import { getCarouselData } from "@/api/localData"
  export default {
    data() {
      return {
        datalist:[]
      }
     },
    computed:{
    
    },
    methods: {
      jumpPage(item){
        
        if(item.link == "serviceList"){
          Cookies.set("service_id","001001")
          this.$router.push({
            name: 'serviceLists',
            params:{ 
              randomValue: Math.random().toString(36).substr(2),
            },
            query:{
              isCharge:"false"
            }
          })
          console.log(Cookies.get("service_id"))
        }else{
          window.open(item.link,"_blank")
        }
      }
    },
    mounted () {
      getCarouselData().then( res=>{
        if((typeof res) == "object"){
          this.datalist = res.datalist
        }else{
          console.log("未加载到数据")
        }
      })
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  //  img{
  //    width: 100%;
  //    height: 100%;
  //  }
  .carouse-img{
    // display: flex;
    // justify-content: center;
    left: 50%; 
    top: 50%; 
    transform: translate(-50%,-50%);
    position: absolute;
  }
  .carouse-img{
    width: auto;
    height:470px;
  }
</style>

