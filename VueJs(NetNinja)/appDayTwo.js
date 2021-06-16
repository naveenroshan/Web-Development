//creating vue instance to control the app
new Vue({
  //which element it will control
  el: "#vue-app",
  //storing all the data for this instance which is object form
  data: {
    available: true,
    availableTwo: false,
    nearby: false,
  },
  //creating a computed for this instance
  computed: {
    addClassToDivElement: function () {
      return {
        availableTwo: this.availableTwo,
        nearby: this.nearby,
      };
    },
  },
});
