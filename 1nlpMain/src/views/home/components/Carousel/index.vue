<template>
    <!-- <el-carousel class="carouserStyle" :autoplay="false"> -->
      <!-- :interval="5000"  -->
      <!-- <el-carousel-item v-for="(item, index) in datalist" :key="index">
        <template v-if="item.link == ''" >
          <img :src='item.imgUrl' class="carouse-img"/>
        </template>
        <template v-else>
          <a  @click="jumpPage(item)" target="_blank" class="carouse-img">
            <img :src='item.imgUrl' class="carouse-img"/>
          </a>
        </template>
      </el-carousel-item>
    </el-carousel> -->
    <div class="swiper-container">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide" v-for="(item, index) in datalist" :key="index">
          <div 
            @click="jumpPage(item)"
            class="swiper-img"
            :style="'background: #ccc url('+item.imgUrl+') center center no-repeat;background-size:cover'">
          </div>
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>   
    </div> 
</template>

<script>
  import Cookies from 'js-cookie'
  import { getCarouselData } from "@/api/localData"
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components:{
      swiper, 
      swiperSlide
    },
    data() {
      return {
        datalist:[],
        swiperOption: {
          autoplay: {
            delay:2000,
            disableOnInteraction:false
          }, //可选选项，自动滑动
          speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
          loop:false, //循环切换
          grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          // autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。   
          height:300,
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
          observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
          pagination: {
            el: '.swiper-pagination',
            // type : 'progressbar', //分页器形状
            clickable :true, //点击分页器的指示点分页器会控制Swiper切换
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }       
      }
     },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      jumpPage(item){
        if(item.type == 1){
          Cookies.set("service_id","001001")
          console.log(item.link)
          this.$router.push({
            name: item.link+'',
            params:{ 
              randomValue: Math.random().toString(36).substr(2),
            },
            query:{
              isCharge:"false"
            }
          })
          console.log(Cookies.get("service_id"))
        }else{
          if(item.link != ''){
            window.open(item.link,"_blank")
          }
          
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
// pc
@media screen and (min-width:1280px) {
  .swiper-img{
    height: 30rem;
    width: 100%;
  }
}
// mb
@media screen and (max-width:1280px) {
  .swiper-img{
    height: 17rem;
    width: 100%;
  }
}
  
 
</style>

