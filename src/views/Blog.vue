<template>
  <div class="blog">
      <Navbar/>
      <Container/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Container from '@/components/Container.vue'

export default {
  name: 'blog',
  components: {
    Navbar,
    Container
  }
}
</script>
<style>
  body{
    background-color:#e6eaf2;
    background-image: url("https://shantidyahblog.wordpress.com/wp-content/themes/pub/pachyderm/img/background.png?m=1391151857h");

  }
 
</style>

