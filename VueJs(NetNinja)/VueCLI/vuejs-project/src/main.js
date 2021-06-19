import Vue from 'vue'
import App from './App.vue'

//creating the instance of event bus
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
