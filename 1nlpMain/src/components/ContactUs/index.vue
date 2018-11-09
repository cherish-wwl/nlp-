<template>
  <div class="contactUS-container hidden-sm-and-down" id="contactUS">
    <div class="phone-btn contactBox" > 
      <div class="btnbox" id="contact-phone">
        <div class="iconBox">
          <svg-icon icon-class="phone"></svg-icon>
        </div>
        <div class="activeBoxDiv">
          <span class="activeBox">010-57973555</span>
        </div>
      </div>
      <div class="phone-line linebox" >
        <span id="phone-line">
        </span>
      </div>
    </div>
    <div class="kufu-btn contactBox">
      <div class="btnbox" id="contact-email">
        <div class="iconBox">
          <svg-icon icon-class="email"></svg-icon>
        </div>
        <div class="activeBoxDiv">
          <span class="activeBox">China-NLP@ultrapower.com.cn</span>
        </div>
      </div>
      <div class="email-line linebox" >
        <span id="email-line">         
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { isMobile } from '@/utils/index'
export default {
  mounted () {
    setTimeout( ()=>{
      let dom = document.getElementById("zhichiBtnBox")
      let right = dom.style.right
      let bottom = dom.style.bottom
      let width = dom.offsetWidth
      let height = dom.offsetHeight
      let backgroundColor = dom.style.backgroundColor 
      // console.log(dom)

      document.getElementById("contact-email").style.width = width + "px"
      document.getElementById("contact-email").style.height = height + "px"
      

      document.getElementById("contact-phone").style.width = width + "px"
      document.getElementById("contact-phone").style.height = height + "px"

      document.getElementById("contact-phone").style.backgroundColor = backgroundColor
      document.getElementById("contact-email").style.backgroundColor = backgroundColor
      // 判断是否为手机端
      if (isMobile()) {
        dom.style.display = 'none'
      } else {
        dom.style.display = 'block'
      }

      setInterval( ()=>{
        let time = 1
        let activeColor = bg3()
        changeColor(time, activeColor)
      },5000)
      function changeColor(time,activeColor){
        let changbg = setTimeout( ()=>{
          var bgcolor = bg3()    
          if( time < 5 ){
            if(time == 1 || time == 3){
              dom.style.backgroundColor = activeColor
            }else{
              dom.style.backgroundColor = backgroundColor
            }
            time = time + 1
            changeColor(time,activeColor)
          }else{
            clearTimeout(changbg) 
          }
         
        },300)
      }
      function bg3(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
      }
      bottom=parseInt(bottom.slice(0,bottom.length-2))
      document.getElementById("contactUS").style.right = right
      document.getElementById("contactUS").style.bottom = bottom + height+"px"
      
    },1000)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .contactUS-container{
    position: fixed;
    z-index: 2147483583;
    .contactBox{
      z-index: 2147483583;
      .btnbox{
        z-index: 2147483583;
        box-shadow: rgba(15, 66, 76, 0.25) 0px 0px 14px 0px;
        border-radius: 50%;
        position: relative;
        .iconBox{
          width: 100%;
          display: inline-flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          .svg-icon,i{
            font-size: 27px;
            color: #fff;
          }
        }
        .activeBoxDiv{
          position: absolute;
          top: 15px;
          right: 34px;
          padding-right: 34px;
        }
        .activeBox{
          box-shadow: rgba(107, 113, 114, 0.15) 0px 2px 4px 0px;
          // border: 1px solid rgb(235, 239, 240);
          border: 1px solid #000;
          font-family: "Microsoft Yahei", Arial, Helvetica;
          padding: 10px;
          color: #000;
          font-size: 16px;
          margin: 0px;
          text-align: right;
          background: rgb(255, 255, 255);
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: normal;
          border-radius: 3px;
          padding: 0px 5px;
          height: 30px;
          line-height: 30px;
          display: none;
          // animation: opacity 500s ;
          &:hover{
             display: block;
          }
        }
        &:hover{
          box-shadow: rgba(15, 66, 76, 0.35) 0px 0px 24px 0px;
          .activeBox{
             display: block;
          }
          .svg-icon{
            animation:rotating 1.2s linear infinite
          } 
        }
      }
      .linebox{
        display: inline-flex;
        width: 100%;
        justify-content: center;
        height: 22px;
      }
    }
    
  }
#zhichiBtnBox{
  animation:rotating 1.2s linear infinite
}
 
@keyframes rotating{
  from{transform:rotate(0)}
  to{transform:rotate(360deg)}
}
  


  
</style>
