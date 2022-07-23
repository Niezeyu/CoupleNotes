import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/login/index.vue"
import Register from "../pages/register/index.vue"
import Home from "../pages/home/index.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
})
