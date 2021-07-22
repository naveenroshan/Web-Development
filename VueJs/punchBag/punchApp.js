//creating vue instance to control the app
new Vue({
    //which element it will control
    el: "#vue-app",
    //storing all the data for this instance which is object form
    data: {
     health:100,
     ended:false
    },

    methods:{
        punch: function(){
            this.health -= 5;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        }
    }
  });
  