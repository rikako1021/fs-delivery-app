import Vue from 'vue'
import Router from 'vue-router'
import userTop from '../components/user/userTop'
import signUp from '../components/signUp'
import signIn from '../components/signIn' 
import firebase from 'firebase'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'signIn'
    },
    {
      path: '/user/userTop',
      name: 'userTop',
      component: userTop,
      meta: { requireAuth: true }
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some( record => record.meta.requiresAuth)
  // let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signIn',
          query: { redirect: to.fullPath }
    })
  }
})
} else {
  next()
 }
})

export default router