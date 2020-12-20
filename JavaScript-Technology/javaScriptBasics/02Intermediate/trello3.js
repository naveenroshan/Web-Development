//using object "myTodos" for updating a meeting scenario by using fucntion logic a small project"
//creating variable and method with in object for  javaScript
let myTodos ={
     day:'Monday',
     meetings: 0,
     meetDone: 0,
     addMeeting: function(){
         console.log('hey , i am a function')
     },
     addthis: function(){
        console.log(this)
    }
 }
//here we are calling the functions
 myTodos.addMeeting()
 myTodos.addthis()

 //here we can see the use of "this " keyword to use the member in the mytodotwo object.
 let myTodostwo ={
    day:'tuesday',
    meetings: 2,
    meetDone: 1,
    addMeet: function(num){
        this.meetings = this.meetings + num
    },
    summary: function(){
       return `your in the summary function ${this.meetings} meeting today`
   }
}

//here we are calling the functions
myTodostwo.addMeet(21)
console.log(myTodostwo.summary())

 //assigment
 // handle the meeting done 
 let myTodosthree ={
    day:'tuesday',
    meetings: 5,
    meetDone: 0,
    addMeetdone: function(num){
        this.meetDone = this.meetings - num
    },
    summary: function(){
       return `your in the summary function ${this.meetDone} meeting today`
   }
}

//here we are calling the functions
myTodosthree.addMeetdone(1)
console.log(myTodosthree.summary())