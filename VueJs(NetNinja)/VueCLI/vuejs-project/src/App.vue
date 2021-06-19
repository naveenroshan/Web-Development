<template>
  <div>
    <!--the event got trigged from the header component-->
    <app-header
      v-bind:title="title"
      v-on:changeTitle="updateTitle($event)"
    ></app-header>

    <app-header v-bind:titleEventbus="titleEventbus"></app-header>
    <!--passing the props to the welcome components-->
    <!--since the props to be dynamic we are using v-bind -->
    <app-welcome v-bind:ninjas="ninjas"></app-welcome>
    
    <app-footer v-bind:title="title"></app-footer>
    
    <app-footer v-bind:titleEventbus="titleEventbus"></app-footer>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  //defining the component in the main app component
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-welcome": Welcome
  },
  data() {
    return {
      ninjas: [
        { name: "rye", speciality: "vue Components", show: false },
        { name: "crytal", speciality: "HTML", show: false },
        { name: "tom", speciality: "css", show: false },
        { name: "jim", speciality: "js", show: false },
        { name: "jack", speciality: "webpack", show: false },
        { name: "cool", speciality: "node", show: false }
      ],
      title: "Vue Ninjas",
      titleEventbus: "Vue Event bus"
    };
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
