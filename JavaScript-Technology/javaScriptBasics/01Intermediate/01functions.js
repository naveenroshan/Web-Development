//creating methode in javaScripts same has java
// here method are called has function.

//function without parameters
let sayHello = function(){
    console.log("hi dude")
}
sayHello()

//function with parameter
let sayHelloo = function(name){
    console.log(`Hey ${name}`);
}
sayHelloo('john')

//function with multi parameters
let fullNameMaker = function(firstname, lastname){
    console.log('welcome')
    console.log(`happy to have you ${firstname} ${lastname} man`)
}
fullNameMaker('ram', 'kumar')

//function with number have parameters
let myAdder = function(number1, number2){
    let added = number1 + number2
    return added
}
console.log(myAdder(1 , 2))


let mymultipler = function(number1, number2){
    return  number1 * number2
}
console.log(mymultipler(1 , 2))

//function with number with default parameters
let NameMaker = function(firstname= 'ram', lastname='ravi'){
    console.log('welcome')
    console.log(`happy to have you ${firstname} ${lastname} man`)
}
NameMaker(console.log())
