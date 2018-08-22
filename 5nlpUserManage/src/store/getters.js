const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  // roles: state => state.user.roles,
  mainsiteBaseUrL: state => state.app.mainsiteBaseUrL,
  consoleBaseUrl: state => state.app.consoleBaseUrl,
  footerText:state => state.app.footerText
}
export default getters
