import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import detailBlog from './views/detailBlog.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },   
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },   
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
        path: '/detail',
        name: 'detail',
        component: detailBlog
    }
  ],
  mode: 'history'
})
