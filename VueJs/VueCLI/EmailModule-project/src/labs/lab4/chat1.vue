<template>
  <div class="grid-child">
    <h1>Ram</h1>
    <div class="container">
      <template v-for="msg in listOfMessages">
        <p>{{ msg}}</p>
      </template>
    </div>
    <div class="container dark">
      <p>{{ currentlySelectedEmail }}</p>
    </div>
    <div class="text">
      <form>
        <input type="text" v-model="chatInput" />
        <button v-on:click="sendChatMessage">Enter</button>
      </form>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  data() {
    return {
      listOfMessages: [],
      chatInput: "",
      currentlySelectedEmail: "",
    };
  },

  methods: {
    sendChatMessage: function () {
      //var m = this.$refs.input.value;
      //this.chatInput = m;
      this.listOfMessages.push(this.chatInput);
      bus.$emit("ValueOne", this.chatInput);
      this.chatInput = "";
    },
  },

  mounted() {
    bus.$on("ValueTwo", (data) => {
      this.currentlySelectedEmail = data;
    });
  },
};
</script>

<style scoped>
.grid-child {
  background-color: burlywood;
  border-radius: 30px;
  padding: 20px;
  margin: 100px 0;
}
.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 20px;
  padding: 10px;
  margin: 20px 0;
  width: 50%;
}

p{
  background-color: bisque;
  margin-bottom: 10px;
}
.dark {
  border: #ccc;
  background-color: rgb(121, 230, 117);
  margin-left: 300px;
}

input {
  margin: auto;
  border: 2px solid #dedede;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
}

button {
  background-color: cadetblue;
  border: orangered;
  padding: 10px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 50%;
}

h1 {
  color: rgb(13, 27, 153);
  font-family: Arial, Helvetica, sans-serif;
}
</style>
