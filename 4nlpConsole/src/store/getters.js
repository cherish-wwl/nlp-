const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  tel: state => state.user.tel,
  name: state => state.user.name,
  email: state => state.user.email,
}
export default getters
