<template>
  <!--Email list-->
  <div class="grid-child purple">
    <h1>Email List</h1>
    <ul>
      <li v-for="email in emails">
        <button v-on:click="setCurrentlySelectedEmail(email)">
          {{ email.id }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['emails'],
  data() {
    return{
    SelectedEmail: {}
    }
  },
  //creating a function for this instance
  methods: {
    setCurrentlySelectedEmail(email) {
      this.$emit('SelectedEmail', email)
      //this.currentlySelectedEmail = email;
    },
  },
};
</script>

<style scoped>
</style>