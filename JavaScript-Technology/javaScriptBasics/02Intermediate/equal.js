// == check for equality
// === check for identity
// when two object are check by == and === the result is false because
// we are check its locatioon reference values 

//comparing == and === in numbers
console.log(1==1)
console.log(1===1)

//comparing == and === string
console.log('p'=='p')
console.log('p'==='p')

//comparing objects in == and ===
let myvar ={}
let myvarTwo ={}
console.log(myvar == myvarTwo)
console.log(myvar === myvarTwo)

//comparing objects in == and ===
let myvarthree = {}
let myvarfour = myvarthree
console.log(myvarthree == myvarfour)
console.log(myvarthree === myvarfour)