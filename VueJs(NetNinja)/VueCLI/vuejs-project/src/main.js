import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Router from './router'
//using vue route
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueResource({
  routes:Router
});

//creating the instance of event bus
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
