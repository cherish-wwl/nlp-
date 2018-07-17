<template>
  <div class="innovation"> 
      <el-row>
        <img src="../../../../assets/innovation/u2303.png"/>
      </el-row>
      <el-row class="content content_feather">
        <el-col class="inline_flex item" :span="6" v-for="item in featherData" :key="item.id">
          <div class="dateDiv">
            <div class="md font28">{{ item.date}}</div>
            <div class="year font18">{{ item.year}}</div>
          </div>
          <div class="fea_info">
            <label class="font18">{{ item.title }}</label>
            <p class="font14">{{ item.descr }}</p>
          </div>
        </el-col>
      </el-row>
      <br />
      <el-row class="content content_support" id="innovation_support">
        <h2 class="text_center font30">扶持计划</h2>
        <p class="text_center" style="color:#666666;">集平台合作伙伴优势，为自然语言处理技术创新团队提供优质的研究资源；为业务创新团队提供全面的自然语言处理技术支撑</p>
        <el-row class="item">
          <el-col :span="12">
            <ul class="font-desc-ul">
              <span class="font20">为技术创新团队提供研究资源支持</span>
              <li>多样的自然语言处理基础服务</li>
              <li>丰富的自然语言处理相关数据资源</li>
              <li>随需提供的计算力资源</li>
              <li>创新成果的产业实践、效果评估及迭代优化</li>
            </ul>
          </el-col>
          <el-col :span="12">
            <img src="../../../../assets/innovation/u2491.png"/>
          </el-col>
        </el-row>
        <el-row class="item">
          <el-col :span="12" style="width:450px;height:450px;">
            <img src="../../../../assets/innovation/u2527.png"/>
          </el-col>
          <el-col :span="12">
            <ul class="font-desc-ul">
              <span class="font20">为业务创新团队提供自然语言处理技术支撑</span>
              <li>全面、成熟、领先的中文信息处理技术</li>
              <li>技术专家团队线上线下指导</li>
              <li>随需提供的技术实验环境</li>
              <li>神州泰岳广泛丰富的行业经验与项目实施经验</li>
            </ul>
          </el-col>
        </el-row>
         <!-- <el-row class="item">
          
          <el-col :span="12">
            <img src="../../../../assets/innovation/u2503.png"/>
          </el-col>
          <el-col :span="12">
            <ul class="font-desc-ul">
              <span class="font20">提供NLP相关的知识讲解，从理论到应用</span>
              <li>多样的自然语言服务</li>
              <li>自然语言相关的资源（行业数据、测试数据等）</li>
              <li>成熟的解决方案模版</li>
            </ul>
          </el-col>
        </el-row> -->
         <!-- <el-row class="item">
          <el-col :span="12">
            <ul class="font-desc-ul">
              <span class="font20">为创新的成果提供产业实践机会，反馈结果、二次优化</span>
              <li>多样的自然语言服务</li>
              <li>自然语言相关的资源（行业数据、测试数据等）</li>
              <li>成熟的解决方案模版</li>
            </ul>
          </el-col>
          <el-col :span="12">
            <img src="../../../../assets/innovation/u2527.png"/>
          </el-col>
        </el-row> -->
      </el-row> 
      <br />
      <el-row class="content text_center" id="innovation_example">
        <el-row>
          <h2 class="font30">优秀案例</h2>
        </el-row>
        <el-row>
          <div class="colums-3 grid" v-for="(item,index) in exampleData" :key="index" style="width:33%;">
            <!-- <img :src="item.img"/>
            <div class="example-panel">
              <span>{{ item.title }}</span>
              <p>{{ item.descr1 }}</p>
              <p class="hidden-panel">{{ item.descr2 }}</p>
            </div> -->
            <figure class="effect-sadie">
              <img :src="item.img" onerror="this.src='/static/default.png'"/>
              <figcaption>
                <h4>
                  <span>
                    {{ item.title }}
                    <br>
                    {{item.descr4}}
                    <br>
                    {{ item.descr1 }}
                    <br>
                    {{item.descr3}}
                  </span>
                </h4>
                <p>
                  <span>
                    
                     {{ item.descr2 }}
                  </span>
                 </p>
              </figcaption>			
            </figure>
            
          </div>
          
        </el-row>
      </el-row>
      <br />
      <br />
      <!-- <cooperation :cooperation-data="cooperationData"></cooperation> -->
      
  </div>
</template>
<script> 
import cooperation  from '@/components/cooperation'
import { scrollAnimation } from '@/utils/scrollAnimation.js'
export default {
  components:{
    cooperation
  },
  data (){
    return {
      featherData:[{id:1,year:"2018",date:"5/28",title:'首批中文信息处理专家入驻平台',descr:''},
      {id:2,year:"2018",date:"5/21",title:'首批自然语言处理技术服务上线',descr:''}
      ,{id:3,year:"2018",date:"5/18",title:'深度学习服务上线',descr:''}
      ,{id:54,year:"2018",date:"5/13",title:'中文蒙文翻译服务上线',descr:''}
      ],
      cooperationData:{
        title:'合作伙伴',
        data:[
          {
            activeImg:"static/cooperation/u469.png",
            img:'static/cooperation/u469_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u471.png",
            img:'static/cooperation/u471_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u473.png",
            img:'static/cooperation/u473_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u475.png",
            img:'static/cooperation/u475_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u477.png",
            img:'static/cooperation/u477_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u479.png",
            img:'static/cooperation/u479_mouseOver.png',
          },
           {
            activeImg:"static/cooperation/u481.png",
            img:'static/cooperation/u481_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u483.png",
            img:'static/cooperation/u483_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u485.png",
            img:'static/cooperation/u485_mouseOver.png',
          },
          {
            activeImg:"static/cooperation/u487.png",
            img:'static/cooperation/u487_mouseOver.png',
          }
        ]
      },
      exampleData:[
        {
          title:'DINFO-OEC',
          descr1:'',
          descr2:'DINFO-OEC非结构化文本分析挖掘平台具有非结构化文本的分析、挖掘的超凡能力，是企业实施大数据战略的强大利器，也是业界首款完全面向业务建模的非结构化文本分析挖掘平台',
          descr3:'业界首款完全面向业务建模的文本分析挖掘开发工具',
          descr4:'非结构化文本分析挖掘平台',
          img:require('../../../../assets/innovation/u2535.jpg')
        },
        {
          title:'泰岳语义云',
          descr1:'合作伙伴、企业用户和应用开发者提供基于应用场景的大数据语义分析云服务平台',
          descr2:'泰岳语义云是为合作伙伴、企业用户和应用开发者提供基于应用场景的大数据语义分析云服务平台。其旨在培养和完善中文语义解析领域生态系统，最终实现神州泰岳在中文语义解析领域的领导地位',
          descr3:'',
          descr4:'',
          img:require('../../../../assets/innovation/u2537.jpg')
        },
        {
          title:'DINFO-XIAOFU',
          descr1:'',
          descr2:'小富机器人是采用国内领先的智慧语义认知技术和DINFO-OEC非结构化大数据分析挖掘技术研发的智能人机互动系统',
          descr3:'超强语义识别能力的智能人机互动系统',
          descr4:'小富机器人',
          img:require('../../../../assets/innovation/u2539.jpg')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .innovation{
    .content{
      padding: 0 10%;
    }
    .content_feather{
      background-color:  rgba(243, 243, 243, 1);
      margin-top: -4px;
      .item{
        padding: 22px 17px;
        border-left: 1px solid #DDD;
      }
      .item:last-child{
        border-right: 1px solid #DDD;
      }
      .dateDiv{
        .md{
          color: rgb(153, 204, 51);
        }
        .year{
          color:rgb(204, 204, 204);
        }
      }
      .fea_info{
        padding-left: 7px;
        label{
          color: rgb(51, 51, 51);
        }
        p{
          color: rgb(51, 51, 51);
        }
      }
    }
    .content_support{
      text-align: center;
      .font-desc-ul{
        margin-top: 140px;
        margin-left: 35px;
        text-align: left;
        img{
          min-width: 419px;
          max-width: 449px;
          max-height: 437px;
        }
        span:first-child{
          color:#333333;
          margin-left: -15px;
          border-left: 4px solid #2b9eeb;
          padding-left: 11px;
          line-height: 60px;
        }
        li{
          color:#999;
          line-height: 40px;
        }
      }
    }
  }
  .colums-3{
    width: 30%;
    display: inline-block;
    position: relative;
  }
  .grid {
   
    figure {
      position: relative;
      float: left;
      overflow: hidden;
      margin: 0;
      background: #3085a3;
      text-align: center;
      cursor: pointer;
      img {
        position: relative;
        display: block;
        min-height: 100%;
        max-width: 100%;
        opacity: 0.8;
      }
      figcaption, figcaption > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      figcaption {
        padding: 2em;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.25em;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        &::before,&::after {
          pointer-events: none;
        }
      }
      &.effect-sadie figcaption::before, &.effect-sadie p {
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
      }
      &.effect-sadie {
        p{
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 2em;
          width: 100%;
          font-size: 14px;
          opacity: 0;
          line-height: 22px;
          -webkit-transform: translate3d(0,10px,0);
          transform: translate3d(0,10px,0);
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
          letter-spacing: 1px;
        }
        h2 {
          position: absolute;
          top: 50%;
          left: 0;
          padding:12px;
          font-size: 24px;
          width: 100%;
          color: #FFFFFF;
          opacity: 0.8;
          -webkit-transition: -webkit-transform 0.35s, color 0.35s;
          transition: transform 0.35s, color 0.35s;
          -webkit-transform: translate3d(0,-50%,0);
          transform: translate3d(0,-50%,0);
          margin: 0;
          word-spacing: -0.15em;
          font-weight: 500;
        }
      }
     
      &.effect-sadie figcaption::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
        background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
        content: '';
        opacity: 0;
        -webkit-transform: translate3d(0,50%,0);
        transform: translate3d(0,50%,0);
      }
      &.effect-sadie figcaption::before, &.effect-sadie p {
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
      }
      &.effect-sadie:hover{
        figcaption::before, p {
          opacity: 1;
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        }
        h2 {
          top: 42%;
          color: #fff;
          -webkit-transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
          transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
        } 
      }
    }
  }
  // .colums-3{
  //   width: 30%;
  //   display: inline-block;
  //   position: relative;
  //   .example-panel{
  //     position: absolute;
  //     top: 20%;
  //     color: #fff;
  //     .hidden-panel{
  //       display: none;
  //     }
      
  //   }
  //   &:hover{
     
  //      .example-panel{
  //       top: 0;
  //       bottom:0;
  //       background-color: #2b9eeb;
  //       .hidden-panel{
  //         display: block;
  //       }
  //     }
  //   }
  // }
  
</style>
