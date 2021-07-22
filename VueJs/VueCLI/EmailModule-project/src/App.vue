<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import EmailDisplay from "./labs/lab1/home.vue";
import EmailHome from "./labs/lab2/home.vue";
import EmailHomeThree from "./labs/lab3/home.vue";
import ChatHome from "./labs/lab4/home.vue";

export default {
  components: {
    "email-display": EmailDisplay,
    "email-home": EmailHome,
    "email-homeThree": EmailHomeThree,
    "chat-home": ChatHome,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
