<template>
  <div class="sub-meun-panel" >
    <el-row>
      <el-col class="dataSetItem" :span="12" v-for="child in dataSetList" :key="child.id">
        <el-col :span="8" class="item-left"  @click.native="linkSolutionPage(child)" > 
          <img :src="child.solutionIcon" onerror="this.src='/static/default.png'"/>
        </el-col>
        <el-col :span="16" class="item-right">           
            <label>
              <svg-icon icon-class="tag" ></svg-icon> 
              <a  class="font18" @click="linkSolutionPage(child)" href="javaScript:void(0)"> {{ child.solutionName }} </a>
              <!-- <router-link :to="{name:child.solutionUrl,params:{id:child.id}}">{{ child.solutionName }}</router-link> -->
            </label>
          <p class="small font_color_grey2 no_more_line_3 font14" :title="child.solutionDesc"> {{ child.solutionDesc | subStringNoMore3line}} </p>
        </el-col>
      </el-col>
    </el-row>         
  </div>
</template>
<script>
// import { getSolutionList } from '@/api/solutions'
import { subStringNoMore3line } from '@/utils/index'
export default {
  props: [ "dataSetList" ],
  data(){
    return {
      // dataSetList:[]
    }
  },
  filters:{
    subStringNoMore3line (str){
      return subStringNoMore3line(str,68)
    }
  },
  methods:{
    // 跳转到解决方案详情页
    linkSolutionPage(item){
      this.$emit("handleFromHeaderSolutionsPanel",item)
    }
  },
  mounted () {
   
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  .dataSetItem{
    padding: 0 40px 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .item-left{
      img{
        // width: 189px;
        height: 112px;
        transition: all 0.6s;  
        &:hover{  
          transform: scale(1.1);  
        }  
      }  
    }
    
    .item-right {
        padding: 0 30px;
        label{
          // margin-left: 15px;
          .svg-icon[data-v-5d4549d3] {
            color: #969292;
          }
          color: #d7d5d5;
          &:hover{
            color: #4c4cfc;
            cursor: pointer;
          }
        }
        p{
          height: 80px;
          overflow: hidden;
        }
      
    }
  }
  
</style>
