<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
    <h1 v-on:click="emittingWithEventBus">{{ titleEventbus }}</h1>
  </header>
</template>

<script>
//importing the event bus from main.js
import { eventBus } from "../main";

export default {
  //props from the root components
  props: {
    title: {
      type: String
    },
     titleEventbus: {
      type: String
    }
  },
  data() {
    return {
      // title: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    changeTitle: function() {
      //emitting a event to the root component to update the primvitive data type
      this.$emit("changeTitle", "Vue Wizards");
    },

    emittingWithEventBus: function() {
      //emitting a event to the event bus to update the primvitive data type
      this.titleEventbus = "Vue Event bus";
      eventBus.$emit("titlechangedWithEventBus", "Vue Event bus");
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: red;
  text-align: center;
}
</style>
