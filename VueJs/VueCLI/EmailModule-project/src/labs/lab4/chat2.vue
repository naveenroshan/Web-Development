<template>
  <div class="grid-child">
    <div>
      <h1>Laxman</h1>
      <ul>
        <li>{{ currentlySelectedEmail }}</li>
        <li>{{ refValue }}</li>
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
      currentlySelectedEmail: "",
      refValue: "",
    };
  },

  methods: {
    readRefs: function () {
      var m = this.$refs.input.value;
      this.refValue = m;
      bus.$emit("ValueTwo", this.refValue);
    },
  },

  created() {
    bus.$on("ValueOne", (data) => {
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
