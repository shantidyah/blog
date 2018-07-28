import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oneBlog : 'abc',
    idComment : ''
  },
  mutations: {
    oneBlog(state,payload){
      state.oneBlog = payload
    },
    idComment(state,payload){
      state.idComment = payload
    }
  },
  actions: {
    getBlog({commit},payload){
      commit('idComment',payload)
      var ref = firebase.database().ref('blog/blogs/'+payload)
      
      ref.on('value',function(snapshot){
        var oneBlog = snapshot.val()
        commit('oneBlog',oneBlog)
      })
    }
  }
})
