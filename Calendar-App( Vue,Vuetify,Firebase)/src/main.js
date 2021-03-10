import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCKz_BunTpjAJF9O_sizZgnRdBE4BvUgA4",
  authDomain: "vue-calender-backend.firebaseapp.com",
  databaseURL: "https://vue-calender-backend.firebaseio.com",
  projectId: "vue-calender-backend",
  storageBucket: "vue-calender-backend.appspot.com",
  messagingSenderId: "576335345625",
  appId: "1:576335345625:web:111c6baacb630420eb8bc8"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
