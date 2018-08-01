<template>
  <div class='login'>
    <!-- {{email}} -->
    <div class="input-field col s6">
    <i class="material-icons prefix">mail</i>
    <input id="icon_prefix" type="text" class="validate" v-model="email">
    <label for="icon_prefix">email</label>
    </div>
    <div class="input-field col s6">
    <i class="material-icons prefix">vpn_key</i>
    <input id="icon_telephone" type="password" class="validate" v-model="password">
    <label for="icon_telephone">password</label>
    </div>
    <a class="waves-effect waves-light btn" @click='login'>login</a>
  </div>
</template>


<script>
// import firebase from 'firebase'
import db from '@/firebase/fb.js'

export default {
  name:'login',
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    login: function(){
      var self = this
      var ref = db.ref('blog/user')
      ref.on('value',function(snapshot){
        var user = snapshot.val()
        console.log(user);
        if(user.email==self.email){
          if(user.password==self.password){
            localStorage.setItem('status',true)
            self.$router.replace('/')
            console.log("berhasil masuk");
          }
          else{
            swal("Wrong!", "Your password wrong", "warning");
            console.log("you password wrong");
            
          }
        }
        else{
            swal("Wrong!", "Your email wrong", "warning");
            console.log("you email wrong");
        }
      })
    }
  }
}
</script>
