// && - AND operator = both side to be true.
// || - OR operator  = tea or coffee 

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true
if(isVerified && isLoggedIn && hasPaymentToken){
    console.log("welcome")
}else if (isVerified || isGuest){
    console.log("allow free previews")
}else{
    console.log("error")
}