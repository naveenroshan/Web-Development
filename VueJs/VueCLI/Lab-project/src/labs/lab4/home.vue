<template>
  <div class="main">
    <div class="grid-container">
      <chat-one></chat-one>
      <chat-two></chat-two>
    </div>
  </div>
</template>

<script>
import chatOne from "./chat1.vue";
import chatTwo from "./chat2.vue";

export default {
  components: {
    "chat-one": chatOne,
    "chat-two": chatTwo,
  },
  data() {
    return {};
  },
  //creating a function for this instance
  methods: {},
};
</script>

<style scoped>
.grid-container {
  background-color: rgb(141, 147, 233);
  display: grid;
  grid-template-columns: 10fr 10fr;
  grid-gap: 20px;
  margin: 100px 0;
}
</style>
