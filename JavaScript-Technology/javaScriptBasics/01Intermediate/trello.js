//Task one-----------------------------------------------------------
//adding elements to empty array myTodos by using push method
const myTodos = []
myTodos.push('buy bread')
myTodos.push('record youtube videos')
myTodos.push('go to gym')

//retriving the elements from mytodos by for each loop
myTodos.forEach(function(todo , index){
    console.log(`your task no. ${index +1 } is : ${todo}`)
})

//Task two----------------------------------------------------------
const myTodos = []
myTodos.push('buy bread')
myTodos.push('record youtube videos')
myTodos.push('go to gym')

//retriving the elements from mytodos by for loop
for(let index = myTodos.length; index < myTodos.length; index++){
    console.log(myTodos[index])
}

//Task Three---------------------------------------------------------
const days = ['mon','tue','wed','thr', 'fri', 'sat']

//more foreach loop

days.forEach(function(days , index){
    console.log(`starts with ${index + 1} -- ${day}`)
    })

