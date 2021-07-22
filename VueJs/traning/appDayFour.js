//creating a component
Vue.component("greeting", {
  template:
    '<p>Hey there, I am {{name}}. <button v-on:click="changeName">changeName</button></p>',
  //creating a data holder for this component only
  data: function () {
    return {
      name: "yoshi",
    };
  },
  //creating a method for only into this component.
  methods: {
    changeName: function () {
      this.name = "mara";
    },
  },
});

//creating vue instance to control the app
var one = new Vue({
  //which element it will control
  el: "#vue-app-one",
});

//creating vue instance two to control the app- one
var two = new Vue({
  //which element it will control
  el: "#vue-app-two",
  data:{
    refValue:""
  },
  methods:{
    readRefs:function(){
      //getting all the reference from html element which belong to this instances
     var m = this.$refs.input.value;
     this.refValue = m
    }
  }
});

