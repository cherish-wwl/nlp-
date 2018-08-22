const getters = {
  // sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  // roles: state => state.user.roles,
  service_id: state => state.services.service_id,
  service_name: state => state.services.service_name,
  service_desrc: state => state.services.service_desrc,
  userManageBaseUrL: state => state.app.userManageBaseUrL,
  consoleBaseUrl: state => state.app.consoleBaseUrl,
  footerText:state => state.app.footerText,
  techDocmentGlobalDesrc:state => state.app.techDocmentGlobalDesrc,
  MbHeaderTopValue:state => state.app.MbHeaderTopValue
}
export default getters
