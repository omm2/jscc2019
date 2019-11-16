import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetups: [],
    likes: 0
  },
  mutations: {
    SET_MEETUPS(state, meetups) {
      state.meetups = meetups
    },
    ADD_LIKES(state, likes) {
      state.likes = likes
    }
  },
  actions: {
    async fetchMeetups({ commit }) {
      const res = await axios.get('http://localhost:3000/meetup/all')
      commit('SET_MEETUPS', res.data)
    },
    addLikes({ commit, state }) {
      const likes = state.likes + 1
      commit('ADD_LIKES', likes)
    }
  },
  modules: {
  }
})
