import Vue from 'vue'
import Router from 'vue-router'
import userTop from '../components/user/userTop.vue' 
import signup from '../components/user/signup.vue'
import signin from '../components/user/signin.vue' 
import signout from '../components/user/signout'
import firebase from 'firebase'

Vue.use(Router)
const routes = [
    /*{
      path: '/',
      name: 'app',
      component: App
    } */
    {
    path: "/about",
    name: "About",
    component: () => 
    import("../components/user/userTop")
    },
    {
      path: '/user/userTop',
      name: 'usertop',
      component: userTop,
      meta: { requireAuth: true }
    },
    {
      path: '/user/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/user/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/user/signout',
      name: 'signout',
      component: signout
    },

];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;