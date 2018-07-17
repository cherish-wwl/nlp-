<template>
  <el-container class='cooperation_platform'>
    <el-row class="text_center">
      <h2 class="font30"> {{ title }}</h2>
    </el-row>
    <el-row class="display_panel">
      <el-carousel 
      :autoplay="false">
        <el-carousel-item v-for="(item, index) in datalist" :key="index">
          <ul>

             <li v-for="(img, index) in item" :key="index"> 
              <a @click="proxyImage(img.link)" :title="img.img_name">
                <img :src="img.img_url" @mouseover="chageImg(img,0,$event)" @mouseout="chageImg(img,1,$event)"/>
              </a>
            </li>
          </ul> 
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </el-container>
</template>

<script>
import { getCooperationList } from "@/api/localData.js"
export default {

  data(){
    return {
      title:"合作创新",
      currentIndex:0,
      datalist:[]
    }
  },
  computed:  {
    
  },
  methods: {
    proxyImage(link){
      window.open(link,'_blank')
    },
    chageImg( imgItem, type ,e){
      // console.log(e)
      if(type == 0){
        e.target.src = imgItem.active_img_url
      }else{
         e.target.src = imgItem.img_url
      }
    }
  },
  mounted () {
    getCooperationList().then(res=>{
      console.log(res)
      if( typeof res  == "object" ){
        this.datalist = res.dataList
        this.title = res.title
      }else{
        console.log("数据格式出问题！请确认 /static/cooperation.json文件")
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.cooperation_platform {
  display: block;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: rgba(242, 242, 242, 1); 
  h2{
    font-weight: 500;
    margin: 55px 0;
  }
  .display_panel{
    width: 1200px;
    margin: 0 auto;
    ul{
      width: 94%;
      margin: 0 auto;
      list-style: none;
    }
    li{
      width: 33%;
      float: left;
      padding: 6px;
    }
  /deep/ .el-carousel__indicators{
      display: none;
    }
  }
 
}
img{
  width:300px;
  height: 84px;
}
</style>

