<template>
      <div class="container">
        <!-- {{details}} -->
          <div class="row">
            <div class="col s3" style="background-color: black">
            </div>
            <div class="col s9" style="background-color: green">
              <div class="card blue-grey darken-1" v-for="content in contentBlog" :key='content[key]'>
                <!-- {{contentBlog}} -->
                <div class="card-content white-text">
                  <span class="card-title">{{content.title}}</span>
                  <p>{{content.content}}</p>
                </div>
                <div class="card-action">
                  <a @click="detail(content.id)">
                  <router-link to="/detail">
                    Read More
                  </router-link>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>

<style>
    .container{
        background-color: red;
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'container',
  data(){
    return{
      contentBlog:[],
      details:''
    }
  },
  created(){
    var config = {
    apiKey: "AIzaSyDY5idbtw11RqyGmOwJ2ZBbuoXNSEIqU7o",
    authDomain: "blog-9ae16.firebaseapp.com",
    databaseURL: "https://blog-9ae16.firebaseio.com",
    // projectId: "blog-9ae16",
    storageBucket: ""
    // messagingSenderId: "158136942127"
    };
  firebase.initializeApp(config),
  this.listBlog()

  },
  methods: {
    ...mapActions([
      'getBlog'
    ]),
    listBlog: function(){
      this.contentBlog = []
      var ref = firebase.database().ref('blog/blogs')
      const self = this
      ref.on('value',function(snapshot){
        var result = snapshot.val()
        for(var key in result){
          var sub = result[key].content
          result[key].content = sub.substring(0,500)+'....'
          // self.details.push(result[key].content)
      
          result[key].id = key
          self.contentBlog.push(result[key])
        }
      })
    },
    detail: function(id){
      this.details=id
      this.getBlog(id)
      // console.log(id);
      
    }
  }
}
</script>


