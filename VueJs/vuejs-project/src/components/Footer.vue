<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
    <p>{{ copyright }} {{ titleEventbus }}</p>
  </footer>
</template>

<script>
//importing the event bus from main.js
import {eventBus} from "../main";

export default {
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
      copyright: "Copyright 2021"
    };
  },
  //life cycle hook
   created(){
       //listing for the event emitted from the header
       eventBus.$on('titlechangedWithEventBus', (data)=>{
           this.titleEventbus = data;
       })
   }
};
</script>

<style scoped>
footer {
  padding: 6px;
}

p {
  color: blue;
  text-align: center;
}
</style>
