<template>
<div>
  <div class="grid-container">
    <!--Email list-->
    <email-list v-bind:emails="emails"></email-list>

    <!--Email Body-->
    <email-view></email-view>
  </div>
</div>
</template>

<script>
import EmailList from "./list.vue"
import EmailView from "./view.vue";

export default {
  components: {
    "email-list": EmailList,
    "email-view": EmailView,
  },
  data() {
    return {
      emails: [{
          id: 1,
          title: "Medium Daily",
          body: "Hello Sir Thanks for paying",
        },
        {
          id: 2,
          title: "Apple",
          body: "Apple give you 50% Off",
        },
      ],
    };
  },
  //creating a function for this instance
  methods: {},
};
</script>

<style scoped>
.grid-container {
  background-color: white;
  display: grid;
  grid-template-columns: 10fr 10fr;
  grid-gap: 20px;
}
</style>
