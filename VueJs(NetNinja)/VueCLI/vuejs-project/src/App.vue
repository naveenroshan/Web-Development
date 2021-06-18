<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <wel></wel>
  </div>
</template>

<script>
import Welcome from "./Welcome.vue";

export default {
  //defining the component in the main app component
  components: {
    'wel': Welcome
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
h1{
  color:red
}
</style>
