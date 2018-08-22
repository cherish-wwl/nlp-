const commonData = {
  "techDocmentGlobalDesrc":"&nbsp;&nbsp;&nbsp;&nbsp;Hi，您好，欢迎使用中文信息深度处理开放创新平台的自然语言处理API服务。<br />&nbsp;&nbsp;&nbsp;&nbsp;如您是一位API开发者，请您按照以下步骤做好使用API服务的准备工作：<br />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1.点击服务详情中的立即使用按钮进行注册，生成平台认证账号（邮箱），认证secret（注册密码）；<br />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.POST方式调用API服务，认证账号、认证secret以及所需处理数据构成请求的具体内容。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;具体API服务内容如以下文档所示，如果您对文档内容有任何疑问，可以通过以下几种方式反馈给我们：<br />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;（1）邮箱：China-NLP@ultrapower.com.cn<br />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;（2）联系电话：010-57973555<br />",
  "userManageBaseUrL":"",  //用户登录/注册地址
  "consoleBaseUrl":"", //管控台项目地址
  "mainsiteBaseUrL":'',//主站项目地址
  "footerText":"Copyright 版权©所有神州泰岳 UltraPower&nbsp;&nbsp;&nbsp;京ICP备18006379号-1",
  "developMode":"dev",   //dev：开发环境  prod ：运行环境  test：测试环境  fang_prod:仿运行环境
   init: function () {
    if(commonData.developMode == "dev"){
      commonData.userManageBaseUrL = "http://localhost:9697"
      commonData.consoleBaseUrl = "http://localhost:9698"
      commonData.mainsiteBaseUrL =  "http://localhost:9696"
    }
    if(commonData.developMode == "prod"){
      commonData.userManageBaseUrL = "http://www.china-nlp.com/userManage-font"
      commonData.consoleBaseUrl = "http://www.china-nlp.com/console-font"
      commonData.mainsiteBaseUrL =  "http://www.china-nlp.com"
    }
    if(commonData.developMode == "test"){
      commonData.userManageBaseUrL = "http://192.168.95.57:8090/userManage"
      commonData.consoleBaseUrl = "http://192.168.95.57:8090/console"
      commonData.mainsiteBaseUrL =  "http://192.168.95.57:8090"
    }
    if(commonData.developMode == "fang_prod"){
      commonData.userManageBaseUrL = "http://192.168.95.57:8091/official/userManage"
      commonData.consoleBaseUrl = "http://192.168.95.57:8091/official/console"
      commonData.mainsiteBaseUrL =  "http://192.168.95.57:8091/official"
    }
  }
}

