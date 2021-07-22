//creating vue instance to control the app
var defau = new Vue({
  //which element it will control
  el: "#vue-app",
  //storing all the data for this instance which is object form
  data: {
    error:false,
    suc: false,
    characters:['Mario','Luigi','Yoshi','Sower'],
    ninjas:[
        {name:'kim', age:30},
        {name:'jim', age:12},
        {name:'cool', age:23}
    ],
    title:"vue app with frist instances"
  },
  //creating a computed for this instance
  computed: {
    greet: function(){
      return 'hello from frist instance'
    }
  }
});
//creating vue instance two to control the app- one
var one = new Vue({
  //which element it will control
  el: "#vue-app-one",
  //storing all the data for this instance which is object form
  data: {
    title:"vue app one with second instances"
  },
  //creating a computed for this instance
  computed: {
    greet: function(){
      return 'hello from second instance'
    }
  },

  methods:{
    changeTitleFristInstance: function(){
      //accessing the vue instance one data
      defau.title = "Title changed";
    }
  }
});
