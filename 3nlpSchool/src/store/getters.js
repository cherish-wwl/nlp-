const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  tel: state => state.user.tel,
  name: state => state.user.name,
  email: state => state.user.email,
  userManageBaseUrL: state => state.app.userManageBaseUrL,
  mainsiteBaseUrL: state => state.app.mainsiteBaseUrL,
  footerText:state => state.app.footerText
}
export default getters
