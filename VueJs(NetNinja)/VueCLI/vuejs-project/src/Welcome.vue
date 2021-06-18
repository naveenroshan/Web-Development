<template>
  <div>
    <h1>List of note</h1>
    <ul>
      <li v-for="wel in one">{{ wel }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      one: ["hello", "good", "kind"]
    };
  }
};
</script>

<style scoped>
h1{
    color:seagreen
}
</style>
