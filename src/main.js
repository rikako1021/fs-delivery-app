// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDvm_RsTfDS2ek2h-uYZ8n9ShbsyUImPSo",
    authDomain: "fs-delivery-app.firebaseapp.com",
    projectId: "fs-delivery-app",
    storageBucket: "fs-delivery-app.appspot.com",
    messagingSenderId: "773656066046",
    appId: "1:773656066046:web:f571c32a5cab7c1f4f72af",
    measurementId: "G-CTSL664YT8"
};
firebase.initializeApp(config);
firebase.analytics();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
