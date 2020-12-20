var arr = [];
var count = 1;

function isFizzBizz() {
    while(count <= 100){
    
    if(count % 3 === 0 && count % 5 === 0 ){
        arr.push("FizzBizz")
    }
    else if(count % 3 === 0){
        arr.push("Fizz")
    }
    else if(count % 5 === 0){
        arr.push("Bizz")
    }
    else{
         arr.push(count)
    }   
    count++;
}
    console.log(arr)
}
isFizzBizz();