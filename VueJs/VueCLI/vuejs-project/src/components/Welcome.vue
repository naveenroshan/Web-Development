<template>
  <div id="ninjas">
    <h1>List of note</h1>
    <ul>
      <li v-for="value in ninjas" v-on:click="value.show = !value.show">
        <h2>{{ value.name }}</h2>
        <h3 v-show="value.show">{{ value.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //creating Props to get the data from the root component
  props: {
    //creating a validation for the props data coming from the root component
    ninjas: {
      type: Array,
      required:true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
