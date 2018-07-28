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
  }
 
</style>

