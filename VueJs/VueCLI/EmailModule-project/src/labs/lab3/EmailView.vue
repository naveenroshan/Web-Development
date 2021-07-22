<template>
<div>
  <!--Email Body-->
  <div class="grid-child">
    <h2>Email Details</h2>
    <p>{{ currentlySelectedEmail.title }}</p>
  </div>
</div>
</template>

<script>
import {
  bus
} from "../main";

export default {
  data() {
    currentlySelectedEmail: [];
  },
  methods: {},
  created() {
    bus.$on("SelectedEmail", (data) => {
      this.currentlySelectedEmail = data;
    })
  }
};
</script>

<style scoped>

</style>
