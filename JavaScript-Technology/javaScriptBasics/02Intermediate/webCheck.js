let userEmail = 'qwe123rt'
let passWord = 'qwe123rt'

//small if loop to check userEmail
let userChecker = function(MyString){
    if((MyString.includes(123)) && (MyString.length > 6)){
        return true
    }
    return false
}

console.log(userChecker(userEmail))

//small if loop to check password
let userCheckerTwo = function(MyString){
    if((MyString.includes(userEmail)) && (MyString.length > 12)){
        return true
    }
    return false
}
console.log(userCheckerTwo(passWord))