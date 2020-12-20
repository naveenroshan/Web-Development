//Type one

//with out arrow function
const sayHello = function(name){
    return "hey there," + name + "! "
}
console.log(sayHello('ram'));

//with arrow function
const sayHello = (name) => "hey there, " + name + " !"

console.log(sayHello('ram'));

//with arrow function
const sayHello = (name) => `hey there, ${name} !`

console.log(sayHello('ram'));

//type two

const todos = [{
    title: 'mybook',
    isDone: true,
}, {
    title: 'yourbook',
    isDone: true,
}, {
    title: 'herbook',
    isDone: false,
}]

const thingDone = todos.filter((todo) => todo.isDone === true)

console.log(thingDone)


//homeworks

const todos = [{
        title: 'mybook',
        isDone: true,
    }, {
        title: 'yourbook',
        isDone: true,
    }, {
        title: 'herbook',
        isDone: false,
    }, {
        title: 'ourbook',
        isDone: false
    },
    {
        title: 'theirbook',
        isDone: true
    }
]

const thingDone = todos.filter((todo) => todo.isDone === false)

thingDone.forEach((todoo) => console.log(todoo.title));