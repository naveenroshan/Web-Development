//creating vue instance to control the app
new Vue({
  //which element it will control
  el: "#vue-app",
  //storing all the data for this instance which is object form
  data: {
    blog: {
      title: "",
      content: "",
      categories: [],
      author: "",
    },
    authors: ["The Net Ninja", "The Angular Avenger", "The Vue Vindic"],
  },

  methods: {},
});
