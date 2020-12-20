//percentage result obtainer
let getMyGrade = function(currentMarks , totalMarks){
    let myPercent = (currentMarks/totalMarks) * 100
    let MyGrade = ''

    if(myPercent >= 90){
        MyGrade = 'A'
    }else if (myPercent >= 80){
        MyGrade = 'B'
    }else if (myPercent >= 70){
        MyGrade = 'C'
    }else if (myPercent >= 60){
        MyGrade = 'D'
    }else{
        MyGrade = 'F'
    }
    return `your grade is : ${MyGrade} and percent is " ${myPercent}`
}
let yourResult = getMyGrade(60 , 100)
console.log(yourResult)