//Maps and for of loop in javascript

//creating a list of objects
var john = {
    name: 'i am john',
    age: 24,
    isActive: true
}

var Ram = {
    name: 'i am Ram',
    age: 22,
    isActive: true
}

var Ravi = {
    name: 'i am ravi',
    age: 20,
    isActive: false
}

//creating a map object
let users = new Map()
//console.log(typeof users)

//key and values
users.set('john', john)
users.set('ram', Ram)
users.set('ravi', Ravi)

//display map user object
console.log(users)

//size of map
console.log(users.size)

//get a object from users map
console.log(users.get('ram'))

//get only the key of the map object
console.log(users.keys())

//get only the values for the users map objects
console.log(users.values())

//Iterator throught map by "forOf"

//iterator throught only keys in map objects.
for (const key of users.keys()) {
    console.log(key)
}

//iterator throught only values in map objects.
for (const values of users.values()) {
    console.log(values.name)
}

//iterator throught key and  values in map objects.

for (const [key, values] of users.entries()) {
    console.log(values.name + '=' + values.age)
}

//Iterator throught map by "foreach"

users.forEach((values, key) => console.log(key + '=' + values.age + ' ' + 'and i am Active' + ' ' + values.isActive))

//array
var arrofArr = [
    ['one', '1'],
    ['two', '2'],
    ['three', '3']
]

var newMap = new Map(arrofArr)

console.log(newMap)