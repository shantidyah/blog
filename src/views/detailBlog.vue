<template>
    <div>
        <Navbar/>
        <div class="container">
        <!-- {{comments}} -->
        {{test}}
          <div class="row">
            <div class="col s3" style="background-color: black">
            </div>
            <div class="col s9" style="background-color: green">
              <div class="card blue-grey darken-1">
                <!-- {{contentBlog}} -->
                <div class="card-content white-text">
                  <span class="card-title">{{oneBlog.title}}</span>
                  <p>{{oneBlog.content}}</p>
                </div>
                <div class="card-action">
                    <div class="row">
                        <div class="col s12 m12">
                            <input id="icon_telephone" type="tel" class="validate" v-model="addComment"><label for="icon_telephone">email</label>
                            <input type="button" value="send" @click="send">
                            <div class="card blue darken-1" v-for="comment in comments" :key=comment[key]>
                                <div class="card-content white-text">
                                    <span class="card-title">{{comment.username}} :</span>
                                    <p>{{comment.comment}}</p>
                                </div>
                                <button @click="deleteComment(comment.username)">delete</button>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
        <!-- {{oneBlog}} -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import firebase from 'firebase'


export default {
    name:'detail',
    data(){
        return{
            comments:[],
            seen:false,
            addComment: '',
            test:'test'
        }
    },
    computed:{
        ...mapState({
            oneBlog : 'oneBlog',
            idComment : 'idComment'
        })
    },
    created(){
        this.pushComment()
    },
    components:{
      Navbar
    },
    methods:{
        send:function(){
            var self = this
            swal("Input your username:", {
                content: "input",
            })
            .then((username) => {
                var database = firebase.database()
                var postsRef = database.ref(`blog/blogs/${self.idComment}/comments/${username}`)
                postsRef.set({
                    username:username,
                    comment:self.addComment
                })
                self.addComment = ''
                self.pushComment()
                swal("Your comment successfully added!", {
                    icon: "success",
                });
            })
        },
        pushComment:function(){
            this.comments=[]
            for(var key in this.oneBlog.comments){
                this.comments.push(this.oneBlog.comments[key])
            }
        },
        deleteComment: function(id){
            var database = firebase.database()
            var postsRef = database.ref(`blog/blogs/${this.idComment}/comments/${id}`)
            // this.test = id
            var self = this
            postsRef.set({})
            swal("Your comment successfull deleted!")
            .then((value) => {
            // swal(`The returned value is: ${value}`);
                self.addComment = ''
                this.pushComment()
            });
            // swal("Good job!", "You clicked the button!", "success");
        }
    }
    
}
</script>
