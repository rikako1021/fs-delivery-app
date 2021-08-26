import Vue from 'vue'
import Router from 'vue-router'
import userTop from '../components/user/userTop.vue' 
import signup from '../components/user/signup.vue'
import signin from '../components/user/signin.vue' 
import signout from '../components/user/signout'
import shopTop from '../components/shop/shopTop.vue' 
import shopsignin from '../components/shop/shopsignin.vue' 
import shopsignout from '../components/shop/shopsignout'
import myShop from '../components/shop/myShop.vue' 
import myItems from '../components/shop/myItems.vue'
import myOrders from '../components/shop/myOrders.vue'
import myPage from '../components/user/myPage.vue'
import orderHist from '../components/user/orderHist.vue'
import searchItems from '../components/user/searchItems.vue'
import shopEnter from '../components/shop/shopEnter.vue'


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
    },
    {
      path: '/user/myPage',
      name: 'mypage',
      component: myPage
    },{
      path: '/user/orderHist',
      name: 'orderHist',
      component: orderHist
    },{
      path: '/user/searchItems',
      name: 'searchItems',
      component: searchItems
    },{
      path: '/shop/shopEnter',
      name: 'shopenter',
      component: shopEnter
    }

];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;