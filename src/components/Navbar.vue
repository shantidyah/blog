<template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- {{seen}} -->
        <li><router-link to="/">
          <i class="material-icons right">home</i>home
        </router-link></li>
        <li v-if="!seen"><router-link to="/login">
          <i class="material-icons right">person</i>login
        </router-link></li>
        <li v-else>
          <a @click="logout"><i href='#' class="material-icons right">person</i>logout</a>
        </li>
        <li><router-link to="/add">
          <i class="material-icons right">cloud</i>Add
        </router-link></li>
      </ul>
      
      <!-- <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>login</a> -->
    </div>
  </nav>
</template>

<script>
export default {
    name:'navbar',
    data () {
        return {
        seen : false
        }
    },
    created(){
      var show = localStorage.getItem('status')
      if(show){
        this.seen=true
      }
    },
    methods:{
      logout:function(){
        localStorage.removeItem('status')
        // this.$router.replace('/')
        window.location = '/'
      }
    }
}

// <router-link to="/login" class="brand-logo right"><button>login</button></router-link> -->
</script>
