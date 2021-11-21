import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {

    updateData(state, data) {
      state.data = data
    },
  },
  actions: {
    async getData({ commit }) {
      const url = "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json"
      try {
        await fetch(url)
          .then(response => response.json())
          .then(({ response }) => {
            commit('updateData', response)
          })
      } catch (error) {

      }
    }

  },
  modules: {
  },
  getters: {

    getUsers(state) {
      return state.data.users;
    },

    getStores(state) {
      return state.data.stores;
    }

  }
})
