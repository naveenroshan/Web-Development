<template>
  <div>
    <!--<email-display></email-display>-->
    <email-home></email-home>
  </div>
</template>

<script>
//import EmailDisplay from "../Labs/labOne/EmailDisplay.vue";
import EmailHome from "./Labs/labTwo/EmailHome.vue"

export default {
  //defining the component in the main app component
  components: {
    //"email-display": EmailDisplay,
    "email-home": EmailHome,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
