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
export default {
  props: ['currentlySelectedEmail'],
  data() {},
  //creating a function for this instance
  methods: {},
};
</script>

<style scoped>

</style>
