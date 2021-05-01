var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x){
    return x * 2;
};
const newNumber = numbers.map(double);
console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.
function filters(num){
    return num > 10;
};
const newFilter = numbers.filter(filters);
console.log(newFilter);

//Reduce - Accumulate a value by doing something to each item in an array.
function reduceValue(accumulate, currentNumber){
    return accumulate + currentNumber;
};
var newReduce = numbers.reduce(reduceValue);
console.log(newReduce);

//Find - find the first item that matches from an array.
const newfind = numbers.find(function(num){
    return num > 10;
})
console.log(newfind);

//FindIndex - find the index of the first item that matches.
const newfindindex = numbers.findIndex(function(num){
    return num > 10;
})
console.log(newfindindex);