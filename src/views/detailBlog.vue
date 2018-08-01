<template>
    <div>
        <Navbar/>
        <div class="container">
        <!-- {{comments}} -->
        <!-- {{test}} -->
          <div class="row">
            <!-- <div class="col s3" style="background-color: black">
            </div> -->
            <div class="col s12">
              <div class="card blue-grey darken-1">
                <!-- {{contentBlog}} -->
                <div class="card-content white-text">
                  <span class="card-title">{{oneBlog.title}}</span>
                  <p align="justify" v-html="oneBlog.content"></p>
                </div>
                <div class="card-action">
                    <div class="row">
                        <div class="col s12 m12">
                            <input type="text" v-model="addComment" placeholder="add comment here ...">
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
import { mapActions } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import db from '@/firebase/fb.js'


export default {
    name:'detail',
    data(){
        return{
            comments:[],
            seen:false,
            addComment: '',
            test:'test',
            idComment: ''
        }
    },
    computed:{
        ...mapState({
            oneBlog : 'oneBlog'
        })
    },
    created(){
        this.detailContent()
        this.pushComment()
    },
    components:{
      Navbar
    },
    methods:{
        ...mapActions([
            'getBlog'
        ]),
        send:function(){
            var self = this
            swal("Input your username:", {
                content: "input",
            })
            .then((username) => {
                if(username.length<1){
                    alert("username must have minimal 6 characters")
                }
                else{
                    // var database = firebase.database()
                    var postsRef = db.ref(`blog/blogs/${self.idComment}/comments/${username}`)
                    postsRef.set({
                        username:username,
                        comment:self.addComment
                    })
                    self.addComment = ''
                    self.pushComment()
                    swal("Your comment successfully added!", {
                        icon: "success",
                    });
                }
            })
        },
        pushComment:function(){
            this.comments=[]
            for(var key in this.oneBlog.comments){
                this.comments.push(this.oneBlog.comments[key])
            }
        },
        deleteComment: function(id){
            // var database = firebase.database()
            var postsRef = db.ref(`blog/blogs/${this.idComment}/comments/${id}`)
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
        },
        detailContent: function(){
            var idComm = localStorage.getItem('idComment')
            this.idComment = idComm
            this.getBlog(idComm)
        }
    }
    
}
</script>
