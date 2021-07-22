<template>
  <div class="grid-child">
    <div>
      <h1>Ram</h1>
      <ul>
        <li>{{ refValue }}</li>
        <li>{{ currentlySelectedEmail }}</li>
      </ul>
    </div>
    <div class="text">
      <form>
        <input type="text" ref="input" />
        <button v-on:click= "readRefs">Enter</button>
      </form>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  data() {
    return {
      refValue: "",
      currentlySelectedEmail: "",
    };
  },

  methods: {
    readRefs: function () {
      var m = this.$refs.input.value;
      this.refValue = m;
      bus.$emit("ValueOne", this.refValue);
    },
  },

  created() {
    bus.$on("ValueTwo", (data) => {
      this.currentlySelectedEmail = data;
    });
  },
};
</script>

<style scoped>
.grid-child {
  background-color: rgb(208, 208, 209);
}
</style>
