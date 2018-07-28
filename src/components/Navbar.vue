<template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/register">
          <i class="material-icons right">cloud</i>register
        </router-link></li>
        <li><router-link to="/login">
          <i class="material-icons right">cloud</i>login
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
        
        }
    }
}

// <router-link to="/login" class="brand-logo right"><button>login</button></router-link> -->
</script>
