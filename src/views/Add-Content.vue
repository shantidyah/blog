<template>
  <div class="add">
    <div class="container">
      <!-- {{title}} -->
    <h1>This is a content page</h1>
    TITLE:
    <input type="text" v-model='inputTitle'>
        <wysiwyg v-model="inputContent" />
        <input type="button" value="save" @click="add">
    </div>
  </div>
</template>


<script>
  import {mapActions,mapState} from 'vuex'

export default {
    methods: {
      ...mapActions([
        "addBlog"
      ]),
      add:function() {
        var status = localStorage.getItem('status')
        if(status){
          this.addBlog()
        }
        else{
          swal("", "You dont have an access to add article!", "warning");
        }
      }
    },
    computed: {
      ...mapState([
        'content','title'
      ]),
      inputContent:{
        get(){
          return this.$store.state.content
        },
        set(value){
          this.$store.commit('content',value)
        }
      },
      inputTitle:{
        get(){
          return this.$store.state.title
        },
        set(value){
          this.$store.commit('title',value)
        }
      }
    },

}
</script>

<style>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css"

</style>


