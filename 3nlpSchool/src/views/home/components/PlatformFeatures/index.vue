<template>
  <el-container class='platform_features'>
    <el-row style="width: 100%;">
      <el-col :span="6" class="item" >
        <div class="grid-content" @click="jumpPage({name:'specialist'})">
          <label class="font18">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            权威专家学者
          </label>
          <p class="font14">
            国内大部分自然语言专家学者入驻
          </p>
        </div>
      </el-col>
      <el-col :span="6" class="item">
        <div class="grid-content" @click="jumpPage({name:'universities'})">
          <label class="font18">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            合作创新科研机构
          </label>
          <p class="font14">
           20+合作创新院校及科研机构
          </p>
        </div>
      </el-col>  
      <el-col :span="6" class="item">
        <div class="grid-content" @click="jumpCCIC">
          <label class="font18">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            中国中文信息学会
          </label>
          <p class="font14">
           中国权威学术性群众团体指导
          </p>
        </div>
      </el-col>
      <el-col :span="6" class="item" >
        <div class="grid-content" @click="jumpSZTY">
          <label class="font18">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
             神州泰岳
          </label>
          <p class="font14">
            技术落地实施团队
          </p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  
    methods:{
      jumpPage (param) {
        this.$router.push(param)
      },
      jumpCCIC () {
        window.open("http://www.cipsc.org.cn/",'_blank')
      },
      jumpSZTY(){
         window.open("http://www.ultrapower.com.cn",'_blank')
      }

    }
}
</script>
<style lang="scss" scoped>
.platform_features {
    background-color: #f5f5f5;
    padding: 0 8%;
    .el-col:last-child {
      border-right: 1px solid rgba(255,255,255,0.5);;
    }
    .el-col:last-child {
      padding-right:0;
     
    }
    .el-col{
       padding: 15px 30px;
       p{
         color:rgb(153, 153, 153)
       }
       label{
         font-weight:700;
         color: rgb(51, 51, 51);
       }
    }
    .item{
      z-index: 10;
      height: 100%;
      cursor: pointer;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      position: relative;
      border-left: 1px solid rgba(255,255,255,0.5);
      overflow: hidden;
      &:hover::before {
        opacity: 1;
        -webkit-transform: translate(0px,-190px);
        transform: translate(0px,-190px);
      }
      &:hover{
        background-color: #ececec;
      }
      &::before {
        opacity: 0;
        content: '';
        position: absolute;
        top: 158px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 190px solid rgba(255,255,255,0.15);
        z-index: -1;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
      }
      &:hover::after {
        opacity: 1;
        -webkit-transform: translate(0px,-150px);
        transform: translate(0px,-150px);
      }
      &::after {
          opacity: 0;
          -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
      }
      &::after {
          content: '';
          position: absolute;
          top: 82px;
          left: 0;
          right: 0;
          margin: auto;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 190px solid rgba(255,255,255,0.15);
          z-index: -1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
      }
    }
   
}
</style>

