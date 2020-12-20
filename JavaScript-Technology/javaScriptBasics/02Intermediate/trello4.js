//Search from array of objects in javascript

//type one
// const myTodos =['mybook', 'yourbook', 'herBook'];
// console.log(myTodos.indexOf('yourbook'));

// //type two
const newTodos = [{
    title:'mybook',
    isDone:false,
},{
    title:'yourbook',
    isDone:false,
},{
    title:'herbook',
    isDone:true,
}]
 //type two
// const index = newTodos.findIndex(function(todo, index){
//    // console.log(todo);
//     return todo.title ==='yourbook'
// })
// //console.log(index);

//type 3
// const findTodo = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printme = findTodo(newTodos, 'YourBook')
// console.log(printme)

//type 4

const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned;
}

let printme = findTodo(newTodos, 'YourBook')
console.log(printme)








