//explaning the above concept for scope problems:

//king's problem

//let King = "jhon"
if(true){
   // let King = "sam"
    if(true){
       var King = "Ram"
        console.log(King)
    }
}
if(true){
    console.log("I am gobal king : " + King)
}

// var is not recommended for many time use for variables