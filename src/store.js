import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/fb.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oneBlog : '',
    idComment : '',
    content:'',
    title:''
  },
  mutations: {
    oneBlog(state,payload){
      state.oneBlog = payload
    },
    idComment(state,payload){
      state.idComment = payload
    },
    content(state,payload){
      state.content = payload
    },
    title(state,payload){
      state.title = payload
    }
  },
  actions: {
    getBlog({commit},payload){
      commit('idComment',payload)
      var ref = db.ref('blog/blogs/'+payload)
      
      ref.on('value',function(snapshot){
        var oneBlog = snapshot.val()
        commit('oneBlog',oneBlog)
      })
    },
    addBlog({commit}){
      db.ref('blog/blogs').push({
        title:this.state.title,
        content:this.state.content,
        // comments:''
      },function(err){
        if(err){
          console.log(err);
        }
        else{
          console.log("berhasiiilll");
          
        }
      })
      
    }
  }
})
