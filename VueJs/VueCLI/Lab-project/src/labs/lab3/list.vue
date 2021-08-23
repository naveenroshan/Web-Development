<template>
  <!--Email list-->
  <div class="grid-child">
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
import { bus } from '../../main';
export default {
  props: ["emails"],
  data() {
    return {
      selectedEmail: {},
    };
  },
  //creating a function for this instance
  methods: {
    setCurrentlySelectedEmail(email) {
      bus.$emit("selectedEmail", email);
    },
  },
};
</script>

<style scoped>
.grid-child {
  background-color: rgb(95, 93, 209);
}
</style>
