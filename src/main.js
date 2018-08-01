import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import wysiwyg from "vue-wysiwyg";


Vue.use(wysiwyg, {});
Vue.use(firebase)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
