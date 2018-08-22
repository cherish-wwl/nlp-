
const app = {
  state: {
    mainsiteBaseUrL:commonData.mainsiteBaseUrL,
    consoleBaseUrl:commonData.consoleBaseUrl,
    footerText:commonData.footerText
  },
  mutations: {
    SET_mainsiteBaseUrL: (state, mainsiteBaseUrL) => {
      state.mainsiteBaseUrL = mainsiteBaseUrL
    },
    SET_consoleBaseUrl: (state, consoleBaseUrl) => {
      state.consoleBaseUrl = consoleBaseUrl
    }, 
    SET_footerText: (state, footerText) => {
      state.footerText = footerText
    }
  },
  actions: {
    initCommonData:({commit})=>{
      commonData.init()
      // console.log(commonData)
      commit('SET_mainsiteBaseUrL', commonData.mainsiteBaseUrL)
      commit('SET_consoleBaseUrl', commonData.consoleBaseUrl)
      commit('SET_footerText', commonData.footerText) 
    }
  }
}

export default app
