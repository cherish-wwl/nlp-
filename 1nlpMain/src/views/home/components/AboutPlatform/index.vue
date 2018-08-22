<template>
  <el-container class='about_platform' id="home">
    <canvas id="canvas" class="canvas hidden-md-and-down"></canvas>
    <div v-on:mouseenter='loadingCount' class="about_platform_content">
      <el-row class="text_center">
        <h2 class="font30">关于平台</h2>
      </el-row>
      <el-row class="display_panel" >
        <div class="display_content"  >
          <p> {{ desrc1 }}<p>
          <p> {{ desrc2 }} </p>
          <div >
            <el-row class='text_center display_count' >
              <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num1 }}</span> +
                </div>
                <div class='item_name'>专家团队</div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num2 }}</span> +
                </div>
                <div class='item_name'>NLP服务</div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num3 }}</span> +
                </div>
                <div class='item_name'>合作院校</div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"  class='item'>
                <div class='item_num'>
                  <span class='countNum'>{{ num4 }}</span> +
                </div>
                <div class='item_name'>解决方案</div>
              </el-col>
            </el-row>
          </div>
        </div>
        <img class='zhehe hidden-sm-and-down' src='../../../../assets/home/zhehe.png'>
        <!-- <img class='qiu' src='../../../../assets/home/qiu.png'> -->
      </el-row>
    </div>
  </el-container>
</template>
<script>
import { getCountBytype } from "@/api/home"
import { getAboutUsData } from "@/api/localData"
import { isMobile } from '@/utils/index'
export default {
  data () {
    return{
      num1:0,
      num2:0,
      num3:0,
      num4:0,
      endNum1:0,
      endNum2:0,
      endNum3:0,
      endNum4:0,
      desrc1:'',
      desrc2:''
    }
  },
  methods: {
    loadingCount(){
      // console.log("进入区域")
      var endNum1 = this.endNum1
      var endNum2 = this.endNum2
      var endNum3 = this.endNum3
      var endNum4 = this.endNum4

      var that = this
      var interval1 = setInterval(function(){
        if(that.num1 >= endNum1){
          clearInterval(interval1)
        }else{
          that.num1 += 1
        }
      }, 10)
      var interval2 = setInterval(function(){
        if(that.num2 >= endNum2){
          clearInterval(interval2)
        }else{
          that.num2 += 1
        }
      }, 10)
      var interval3 = setInterval(function(){
        if(that.num3 >= endNum3){
          clearInterval(interval3)
        }else{
          that.num3 += 1
        }
      }, 10)
      var interval4 = setInterval(function(){
        if(that.num4 >= endNum4){
          clearInterval(interval4)
        }else{
          that.num4 += 1
        }
      }, 10)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 1500){
        var endNum1 = this.endNum1
        var endNum2 = this.endNum2
        var endNum3 = this.endNum3
        var endNum4 = this.endNum4

        var that = this
        var interval1 = setInterval(function(){
          if(that.num1 >= endNum1){
            clearInterval(interval1)
          }else{
            that.num1 += 1
          }
        }, 20)
        var interval2 = setInterval(function(){
          if(that.num2 >= endNum2){
            clearInterval(interval2)
          }else{
            that.num2 += 1
          }
        }, 20)
        var interval3 = setInterval(function(){
          if(that.num3 >= endNum3){
            clearInterval(interval3)
          }else{
            that.num3 += 1
          }
        }, 20)
        var interval4 = setInterval(function(){
          if(that.num4 >= endNum4){
            clearInterval(interval4)
          }else{
            that.num4 += 1
          }
        }, 20)
      }
    },
    loadingCanvas () {
      window.addEventListener('scroll', this.handleScroll);
      // 加载动态图片
      // console.log("加载动态图片")
      var canvas = document.querySelector('canvas'),
        homeDom = document.getElementById("home"),
        ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth;
        canvas.height = homeDom.offsetHeight;
        ctx.lineWidth = .3;
        ctx.strokeStyle = (new Color(150)).style;

      // var mousePosition = {
      // 	x: 30 * canvas.width / 100,
      // 	y: 30 * canvas.height / 100
      // };
      var mousePosition = {
        x:  canvas.width - 100,
        y:  canvas.height  
      };

      var dots = {
        nb: 250,
        distance: 100,
        d_radius: 150,
        array: []
      };

      function colorValue(min) {
        // return Math.floor(Math.random() * 255 + min);
        return "255"
      }

      function createColorStyle(r,g,b) {
        return 'rgba(' + r + ',' + g + ',' + b + ', 0.2)';
      }

      function mixComponents(comp1, weight1, comp2, weight2) {
        return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
      }

      function averageColorStyles(dot1, dot2) {
        var color1 = dot1.color,
        color2 = dot2.color;

        var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
        return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
      }

      function Color(min) {
        min = min || 0;
        this.r = colorValue(min);
        this.g = colorValue(min);
        this.b = colorValue(min);
        this.style = createColorStyle(this.r, this.g, this.b);
      }

      function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random() * 2;

        this.color = new Color();
      }

      Dot.prototype = {
        draw: function(){
          ctx.beginPath();
          ctx.fillStyle = this.color.style;
          ctx.arc(this.x, this.y, this.radius+1, 0, Math.PI *1, false);
          ctx.fill();
        }
      };

      function createDots(){
        for(var i = 0; i < dots.nb; i++){
          dots.array.push(new Dot());
        }
      }

      function moveDots() {
        for(var i = 0; i < dots.nb; i++){

          var dot = dots.array[i];

          if(dot.y < 0 || dot.y > canvas.height){
            dot.vx = dot.vx;
            dot.vy = - dot.vy;
          }
          else if(dot.x < 0 || dot.x > canvas.width){
            dot.vx = - dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      }

      function connectDots() {
        for(var i = 0; i < dots.nb; i++){
          for(var j = 0; j < dots.nb; j++){
            var i_dot = dots.array[i];
            var j_dot = dots.array[j];

            if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
              if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                ctx.beginPath();
                ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }

      function drawDots() {
        for(var i = 0; i < dots.nb; i++){
          var dot = dots.array[i];
          dot.draw();
        }
      }

      function animateDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        moveDots();
        connectDots();
        drawDots();

        requestAnimationFrame(animateDots);	
      }

      //----------------------跟着鼠标动--------------------
      document.getElementById('home').addEventListener('mousemove', function(e){
        // console.log(e)
        mousePosition.x = e.offsetX;
        mousePosition.y = e.offsetY;
      });

      document.getElementById('home').addEventListener('mouseleave', function(e){
        mousePosition.x = canvas.width / 2;
        mousePosition.y = canvas.height / 2;
      });
      //----------------------跟着鼠标动--------------------

      createDots();
      requestAnimationFrame(animateDots);
    }
  },
  mounted(){
    this.loadingCanvas()
    // -------------------加载关于平台数据---------------------
    getAboutUsData().then(response => {
      // console.log(response)
        if((typeof response) == "object"){
          if(response.needCustomAboutUs == true){
            this.endNum1 = response.AboutUsNum.professorCount
            this.endNum2 = response.AboutUsNum.serviceCount
            this.endNum3 = response.AboutUsNum.academyCount
            this.endNum4 = response.AboutUsNum.solutionCount
          }else{
            getCountBytype().then(res => {
              this.endNum1 = res.data.professorCount
              this.endNum2 = res.data.serviceCount
              this.endNum3 = res.data.academyCount
              this.endNum4 = res.data.solutionCount
            })
          }
          this.desrc1 = response.aboutUsDesrc1
          this.desrc2 = response.aboutUsDesrc2

          if(isMobile() == true){
            this.num1 = this.endNum1
            this.num2 = this.endNum2
            this.num3 = this.endNum3
            this.num4 = this.endNum4

          }
        }else{
          console.log("未加载到数据")
        }
    
    })
   

  }

}
</script>
<style lang="scss" scoped>
.about_platform {
  display: block;
  color: #fff;
  background-color: #1393ed;
 
  .about_platform_content{
    position: relative;
    padding: 4.5rem 0 2.0rem 0;
  }
  .display_content {
    z-index: 2;
    .display_count{
      cursor:pointer;
      .item{
        .item_num {
          margin-bottom: 1.7rem;
          margin-top: 3.0rem;
          font-size: 4.8rem;
          .countNum {
            font-size: 9.0rem;
          }
        }
        .item_name {
          font-size: 3.0rem;
        }
      }
    }
    
    p{
      text-indent: 3.3rem;
      // font-weight: 300;
      font-size: 1.6rem;
      line-height: 3.2rem;
      // z-index: 50;
    }
    
  }
  h2{
    font-weight: 500;
  }
  .zhehe{
    position: absolute;
    top: 69%;
    left: 0;
    width: 38%;
  }
  img.qiu {
    position: absolute;
    top: -38px;
    left: 0;
    right: 0;
    margin: auto;
    width: 27%;
    z-index: 1;
  }
  .canvas {
    width: 100%;
    position: absolute;  
    // z-index: 30;
  }
}
// pc端样式
@media screen and (min-width:1280px){
  .about_platform{
    h2{
      margin: 4.5rem 0;
    }
    .display_content{
      padding: 0 14% 10.5rem;
    }
  }
}
// mb样式
@media screen and (max-width:1280px){
  .about_platform{
    h2{
      margin: 0.5rem 0;
    }
    .display_content{
      padding: 0 5% 10.5rem;
    }

  }
}
</style>

