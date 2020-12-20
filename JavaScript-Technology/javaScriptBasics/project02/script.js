//writting a program for local storage of we data 
localStorage.setItem('hero', 'Batman')
var gethero = localStorage.getItem('hero')
console.log(gethero)
localStorage.setItem('todo','buy ice tea')
var gettodo = localStorage.getItem('todo')
console.log(gettodo);

//removing a stored iteam in local
localStorage.removeItem('hero')

//clear all the stored data in local
localStorage.clear()
var gettodo = localStorage.getItem('todo')
console.log(gettodo);
