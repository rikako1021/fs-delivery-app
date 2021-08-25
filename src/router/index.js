import Vue from 'vue'
import Router from 'vue-router'
import userTop from '../components/user/userTop.vue' 
import signup from '../components/user/signup.vue'
import signin from '../components/user/signin.vue' 
import signout from '../components/user/signout'
import shopTop from '../components/shop/shopTop.vue' 
import shopsignup from '../components/shop/shopsignup.vue'
import shopsignin from '../components/shop/shopsignin.vue' 
import shopsignout from '../components/shop/shopsignout'
import myShop from '../components/shop/myShop.vue' 
import myItems from '../components/shop/myItems.vue'
import myOrders from '../components/shop/myOrders.vue'


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
    {
      path: '/shop/shopsignout',
      name: 'shopsignout',
      component: shopsignout
    },
    {
      path: '/shop/shopsignin',
      name: 'shopsignin',
      component: shopsignin
    },
    {
      path: '/shop/shopsignup',
      name: 'shopsignup',
      component: shopsignup
    },
    {
      path: '/shop/shopTop',
      name: 'shoptop',
      component: shopTop
    },
    {
      path: '/shop/myShop',
      name: 'myshop',
      component: myShop
    },
    {
      path: '/shop/myItems',
      name: 'myitems',
      component: myItems
    },
    {
      path: '/shop/myOrders',
      name: 'myorders',
      component: myOrders
    }

];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;