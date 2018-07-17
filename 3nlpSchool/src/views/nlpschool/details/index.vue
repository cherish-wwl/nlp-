<template>
  <div class="nlpschool-detail app-wrapper">
    <header-panel @login="login" class="header-container"></header-panel>
    <div class="nlp-cont">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="mt15">
        <el-breadcrumb-item :to="{ path: '/nlpschool' }">NLP学院</el-breadcrumb-item>
        <el-breadcrumb-item>课程详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row>
        <h3>{{ title }}{{ titleDetail == ""?'':'-'+titleDetail }}</h3>
        <el-col class="text_center">
					<video-player  
						class="video-player vjs-custom-skin"
						ref="videoPlayer"
						:playsinline="true"
						:options="playerOptions"
					></video-player>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <h3 v-show="introduction != ''">{{ introductionTitle }}</h3>
          <p>{{ introduction }}</p>
        </el-col>
      </el-row>
    </div>
    <el-footer>Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1</el-footer>
    <login :visible="loginVisible" @login="login"></login>
		<contact-us></contact-us>
  </div>
</template>

<script>
import HeaderPanel from '@/views/nlpschool/components/Header'
import Login from '@/components/Login'// 登录组件
import vue from 'vue'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
vue.use(VideoPlayer)
import ContactUs from "@/components/ContactUs"
import { getNlpSchoolData } from '@/api/localData.js'
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    Login,
		ContactUs
  },
  data () {
    return{
      loginVisible:false,
      title:'',
      titleDetail:'',
      // videoPath:'./static/nlpschool/ai-school-1.flv',
      introduction:'',
			playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [],
        // poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    	},
			videoList:[],
      introductionTitle:''
		}
  },
  created() {
    
  },
  computed: {
   
  },
  mounted(){
    getNlpSchoolData().then(res => {
      console.log(res)
      if((typeof res) == "object"){
        this.videoList = res.videoList
        this.title = res.details.title
        this.introductionTitle = res.details.introductionTitle
      }else{
        console.log("未加载到数据")
      }

      console.log(this.$route.query.id)
      let currentVideoId = this.$route.query.id
      let currentVideo ={
        type: "video/mp4",
        src: "" //url地址     
      }
      if(currentVideoId && this.videoList[currentVideoId]){
        currentVideo.src = this.videoList[currentVideoId].src //url地址
        this.introduction = this.videoList[currentVideoId].introduction
        this.titleDetail = this.videoList[currentVideoId].title
      }else{
        currentVideo.src = this.videoList[0].src //url地址     
        this.introduction = this.videoList[0].introduction
        this.titleDetail = this.videoList[0].title
      }
      this.playerOptions.sources.push(currentVideo)
    })
    
  },
  methods:{
    login(msg){
      console.log(msg)
      this.loginVisible = msg
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.nlp-cont {
  width: 1200px;
  margin: 0 auto;
/deep/ .el-icon-arrow-right {
    font-size: 14px;
  }
}
.mt15 {
  margin-top: 15px;
}
.nlpschool-detail .nlp-cont{
	padding-bottom: 100px;
}

</style>
