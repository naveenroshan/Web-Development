//creating a dice that stating value from 6 to 1.

//declaring the limits
let upper = 6
let lower = 1

//main formula
// Math.random give value between 0 and 1 always
let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower


//result for throwing a dice.
console.log(myRandom)