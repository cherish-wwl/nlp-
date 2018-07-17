

const user = {
  state: {
    service_id: '',
    service_name: '',
    service_desrc: '',
  },

  mutations: {
    SET_SERVICE_ID: (state, service_id) => {
      state.service_id = service_id
    },
    SET_SERVICE_NAME: (state, service_name) => {
      state.service_name = service_name
    },
    SET_SERVICE_DESCR: (state, service_desrc) => {
      state.service_desrc = service_desrc
    }
  },

  actions: {
    getServiceInfo:({commit},serviceInfo)=>{
        console.log(serviceInfo)
        commit('SET_SERVICE_ID', serviceInfo.service_id)
        // commit('SET_SERVICE_NAME', serviceInfo.service_name)
        // commit('SET_SERVICE_DESCR', serviceInfo.service_desrc)
    }
  }
}

export default user