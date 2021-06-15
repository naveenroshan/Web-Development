//creating vue instance to control the app
new Vue({
  //which element it will control
  el: "#vue-app",
  //storing all the data for this instance which is object form
  data: {
    heading: "Hello",
    Money: 1000,
    GoogleLink: "https://www.google.co.in/",
    inputBinding: "input",
    websiteTab: '<a href="http://www.google.com">google</a>',
    age: 90,
    x: 0,
    y: 0,
  },
  //creating a function for this instance
  methods: {
    greet: function (para) {
      //using the data in this instance in the method using "this" keyword
      var m = this.Money;
      return "Good morning " + para + m;
    },

    ageAdd: function (inc) {
      this.age += inc;
    },

    ageSub: function (des) {
      this.age -= des;
    },

    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
