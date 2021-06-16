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
    name: "",
    agee: "",
    a: 0,
    b: 0,
    available:true
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

    click: function () {
      alert("you clicked the link");
    },

    logName: function () {
      console.log("Name done");
    },

    logAge: function () {
      console.log("Age done");
    },
  },

  //computed properties kind of a methods
  computed: {
    modifyA: function () {
      return this.a + this.age;
    },

    modifyB: function () {
      return this.b + this.age;
    },
  },
});
