<!--Chart js Examples -->
<template>
  <div>
    <div class="small">
      <line-chart :chart-data="datacollection"></line-chart>
      <button v-on:click="fillData()">ChangeData</button>
    </div>
  </div>
</template>

<script>
import LineChart from "../../BarChart.js";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Bugs","Enhancements","Testing","Deployment"],
        datasets: [
          {
            label: "High",
            backgroundColor: "#fc0362",
            data: [this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()],
            stack: 'Stack 0'
          },
          {
            label: "Low",
            backgroundColor: "#edd455",
            data: [this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()],
            stack: 'Stack 0',
          },
          {
            label: "Open",
            backgroundColor: "#8beb6e",
            data: [this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()],
            stack: 'Stack 1',
          },
          {
            label: "Overdue",
            backgroundColor: "#ff8375",
            data: [this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()],
            stack: 'Stack 1',
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>