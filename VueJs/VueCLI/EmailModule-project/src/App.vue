<template>
  <div>
    <router-view></router-view>
    <!--<<email-display></email-display>
  <email-home></email-home>
  <email-homeThree></email-homeThree>-->
  </div>
</template>

<script>
import EmailDisplay from "./labs/lab1/EmailDisplay.vue";
import EmailHome from "./labs/lab2/EmailHome.vue";
import EmailHomeThree from "./labs/lab3/EmailHome.vue";

export default {
  components: {
    "email-display": EmailDisplay,
    "email-home": EmailHome,
    "email-homeThree": EmailHomeThree,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
