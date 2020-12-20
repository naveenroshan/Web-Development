//editing the array

const number = ['one', 'two', 'three', 'four', 'six']

number[1] = 'something'
console.log(number)


//start
//shift a number to index
console.log(number.shift())
console.log(number)

number.unshift('somethings')
console.log(number)

//end
console.log(number.pop())
console.log(number)

number.push('seven')
console.log(number)

//middle

number.slice(2,1,'q')

