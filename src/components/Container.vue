<template>
      <div class="container">
        {{details}}
          <div class="row">
            <div class="col s3" align="left">
              <h5>Recent Posts</h5>
               <ul v-for="content in contentBlog" :key='content[key]'>
                  <li ><a href ='#' @click="detail(content.id)">
                    <!-- <router-link to="/detail"> -->
                      {{content.title}}
                      <hr>
                    <!-- </router-link> -->
                  </a></li>
              </ul>
            </div>
            <div class="col s9">
              <div class="card blue-grey darken-1" v-for="content in contentBlog" :key='content[key]'>
                <!-- {{contentBlog}} -->
                <div class="card-content white-text">
                  <span class="card-title">{{content.title}}</span>
                  <p align="justify" v-html="content.content"></p>
                </div>
                <div class="card-action">
                  <a @click="detail(content.id)">
                  <!-- <router-link to="/detail"> -->
                    Read More
                  <!-- </router-link> -->
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>

<style>
    .container{
        /* background-color: red; */
        background-image: url("https://shantidyahblog.wordpress.com/wp-content/themes/pub/pachyderm/img/background.png?m=1391151857h");
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>

<script>
import { mapActions } from 'vuex'
import db from '@/firebase/fb.js'

export default {
  name: 'container',
  data(){
    return{
      contentBlog:[],
      details:''
    }
  },
  created(){
    this.listBlog()

  },
  methods: {
    ...mapActions([
      'getBlog'
    ]),
    listBlog: function(){
      this.contentBlog = []
      var ref = db.ref('blog/blogs')
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
      localStorage.setItem('idComment',id)
      var set = localStorage.getItem('id')
      this.$router.replace(`/detail/${id}`)
      // this.details=set
      // this.getBlog(id)
      // console.log(id);
      
    }
  }
}
</script>


