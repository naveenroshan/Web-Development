import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './routers'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Router
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
