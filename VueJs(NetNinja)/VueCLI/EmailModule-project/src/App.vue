<template>
  <div>
    <email-display></email-display>
  </div>
</template>

<script>
import EmailDisplay from "./components/EmailDisplay.vue";

export default {
  //defining the component in the main app component
  components: {
    "email-display": EmailDisplay
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped></style>
