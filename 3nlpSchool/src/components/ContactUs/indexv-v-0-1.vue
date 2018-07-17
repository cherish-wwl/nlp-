<template>
  <div class="floating_ck">
			<dl>
				<dt></dt>
				<dd class="consult">
					<span>
            <svg-icon icon-class="handshake"></svg-icon>
					</span>
					<span class="font14">合<br/>作<br/>咨<br/>询<br/></span>
					<div class="floating_left">
						<ul>
              <li id="rcs-app"> 
                <el-row :gutter="20" onclick="RCS.showCommon()">
                  
                  <el-col :span='4'>
                    <svg-icon icon-class="kefu"></svg-icon>
                  </el-col>
                  <el-col :span='20'>
                    <span class="font16" >在线客服</span>
								    <span class="font16">9:00-18:00&nbsp;(工作日)</span>
                  </el-col>
                </el-row>			
              </li>
							<li>  
                <el-row :gutter="20">
                  <el-col :span='4'>
                    <svg-icon icon-class="phone"></svg-icon>
                  </el-col>
                  <el-col :span='20'>
                    <span class="font16">咨询电话：</span>
								    <span class="font16">010-57973555</span>
                  </el-col>
                </el-row>						
							</li>
							<li>
                <el-row :gutter="20">
                  <el-col :span='4'>
                    <i class="fa fa-envelope-o fa-fw"></i>
                  </el-col>
                  <el-col :span='20'>
                    <span class="font16" >邮箱地址：</span>
								    <span class="font16 nowrap">China-NLP@ultrapower.com.cn</span>
                  </el-col>
                </el-row>									
							</li>
						</ul>
					</div>
				</dd>
        <dd class="online_kefu">
            <!-- <a onclick="RCS.showCommon()"><svg-icon icon-class="kefu"></svg-icon></a> -->
           
        </dd>
				<dd class="return" @click="scrollToTop" id="top_view" style="dispaly:none">
					<span>       
            <svg-icon icon-class="returntop"></svg-icon>
          </span>
				</dd>
			</dl>
       <div class="customer-service" style="display: none;"></div>
		</div>
</template>

<script>
import { customerGetToken } from '@/api/kefu.js'
export default {
  created() {
    window.onscroll = function () {
      // 变量t就是滚动条滚动时，到顶部的距离
      const t = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(t)
      const top_view = document.getElementById('top_view');
      if (top_view !== null) {
          top_view.style.display = t >= 400 ? 'block' : 'none';
      }
    };
  },
  data() {
    return {
      appKey:'uwd1c0sxup8k1',
      token:'enQoedAJsZxVLZX/F7DZaTxrOboCQBOsCxCQleK3vfWogJfMvFIL8hNGSxwyIx32twfJ//QnfAAwM66+37zoTQ==',
      customerServiceId:'KEFU152902816515418'
    }
  },
  watch: {
    
  },
  methods: {
   scrollToTop(){
     window.scrollTo(0, 0);
   },
   kefuInit(){
     var that = this
     RCS.init({
          appKey: that.appKey,
          token:that.token,
          target: document.getElementById('rcs-app'),
          customerServiceId: that.customerServiceId, // 客服Id
          userIcon: 'http://7xo1cb.com1.z0.glb.clouddn.com/rongcloudkefu2.png',//用户默认头像，在用户没有头像的时候显示
          csIcon: 'http://fsprodrcx.cn.ronghub.com/UQRxDVEHcD6_gHENUQRxDUs9XOZRBH25PGECfjBjFA/base64.png',//客服默认头像，在客服没有头像的时候显示,建议线上地址
          showButton: true,
          //是否需要按钮主动发起，设为false的时候，init()方法直接唤起聊天窗口,需客户自己编写按钮，点击之后调用init(),templates中的button模板不可用;设为true的时候，init()首先唤起客服咨询按钮，点击之后才连接客服，唤起聊天窗口，在进入页面之后就需调用init()方法。此参数是为了方便客户在点击客服按钮后自行获取token，在获取到token之后，执行init()即可。
          connectingCallback: function(){
              console.log('连接中');
          },//连接中的执行的方法，例如显示加载页面,可不传
          connectedCallback: function(){},//连接成功之后的方法，例如关闭加载页面,可不传
          disconnectedCallback: function(){
              console.log('连接断开');
          },//断开连接之后的操作,可不传
          templates: {
              //"templates/button.html",
              // chat: "templates/chat.html",
              // closebefore: 'templates/closebefore.html',
              // conversation: 'templates/conversation.html',
              // endconversation: 'templates/endconversation.html',
              // evaluate: 'templates/evaluate.html',
              // imageView: 'templates/imageView.html',
              // leaveword: 'templates/leaveword.html',
              // main: 'templates/main.html',
              // message: 'templates/message.html',
              // messageTemplate: 'templates/messageTemplate.html',
              // userInfo: 'templates/userInfo.html', 
          }
      });
   }
  },
  mounted(){
    customerGetToken().then( res=>{
      this.token = res.data.token
      this.kefuInit()
    })
   
  } 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  dl, dd, dt, ol, ul { 
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }	
  .floating_ck {
    position: fixed;
    right: 0;
    top: 65%;
    z-index: 1002;
    dl dd {
      position: relative;
      width: 45px;
      background-color: #333;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center 20%;
      padding-bottom: 5px;
      cursor: pointer;
      &:hover{
        .floating_left {
          display: block;
          border: 1px solid #000;
          -webkit-box-shadow: 3px -3px 10px -7px rgba(0, 0, 0, 0.2) inset;
          box-shadow: 3px -3px 10px -7px rgba(0, 0, 0, 0.2) inset;
        }
      }
      span {
				color: #fff;
				display: block;
			}
      i, .svg-icon{
        font-size: 23px;
        margin-top: 10px;
        margin-bottom: 3px;
      }
    }
    .floating_left {
				position: absolute;
				right: 45px;
        text-align: left;
				top: 0px;
				background-color: #fff;
				border-bottom: solid 1px #fff;
				display: none;
        li{
          padding: 12px 50px 12px 12px;
        }
        i, .svg-icon{
          font-size: 23px;
          color: #000;
          margin-top: 11px;
        }
        span {
          color: #000;
          display: block;
          font-weight: 500;
        }
        span:first-child{
          color: #000;
          line-height: 27px;
          font-weight: normal;
        }
       
      }
  }
  .lineHeight40{
    line-height: 40px;
  }
		
				
</style>
