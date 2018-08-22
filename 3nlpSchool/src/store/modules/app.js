
const app = {
  state: {
    userManageBaseUrL:commonData.userManageBaseUrL,
    mainsiteBaseUrL:commonData.mainsiteBaseUrL,
    footerText:commonData.footerText
  },
  mutations: {
    SET_userManageBaseUrL: (state, userManageBaseUrL) => {
      state.userManageBaseUrL = userManageBaseUrL
    },
    SET_mainsiteBaseUrL: (state, mainsiteBaseUrL) => {
      state.mainsiteBaseUrL = mainsiteBaseUrL
    }, 
    SET_footerText: (state, footerText) => {
      state.footerText = footerText
    }
  },
  actions: {
    initCommonData:({commit})=>{
      commonData.init()
      // console.log(commonData)
      commit('SET_userManageBaseUrL', commonData.userManageBaseUrL)
      commit('SET_mainsiteBaseUrL', commonData.mainsiteBaseUrL)
      commit('SET_footerText', commonData.footerText) 
    }
  }
}

export default app
