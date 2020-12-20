//using object "myTodos" for updating a meeting scenario by using fucntion logic a small project"
let myTodos ={
   // day:'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo, meet){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meet){
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryofDay = function(todo){
    let meetLeft = todo.meetings + todo.meetDone
    return `you have ${meetLeft} meeting today`
}

//passing parameters to the method
addMeeting(myTodos, 4)

meetDone(myTodos, 3)

console.log(myTodos)

console.log(getSummaryofDay(myTodos))



