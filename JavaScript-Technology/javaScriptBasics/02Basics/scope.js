// let and var scopes

//using let
let iAmGlobal = "someValue"
if(true){
    let iamLocal = "someMoreValue"
    iAmGobal ="superman"
    console.log(iAmGobal)
    console.log(iamLocal)
}
console.log(iamLocal)
console.log(iAmGlobal)

//using var
let iAmGlobal = "someValue"
if(true){
    var iamLocal = "someMoreValue"
    iAmGobal ="superman"
    console.log(iAmGobal)
    console.log(iamLocal)
}
//console.log(iamLocal)
console.log(iAmGlobal)
 
// use let for the scope than var.

