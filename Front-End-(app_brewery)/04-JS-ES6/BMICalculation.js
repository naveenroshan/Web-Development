// function bmiCalculator(weight, height){
//     var BMI = weight/Math.pow(height, 2);
//     return BMI;
// }
// console.log( bmiCalculator(2,2));
// }

function bmiCalculator(weight, height) {
    var BMI = weight / (height * height);
    if (BMI < 18.5) {
        return "YOUR BMI is " + BMI + ", so you are underweight";
    }
    if (BMI == 18.5 && BMI == 24.9) {
        return "YOUR BMI is " + BMI + ", so you are normal weight";
    }
    if (BMI > 24.9) {
        return "YOUR BMI is " + BMI + ", so you are over weight";
    }
}
bmiCalculator(1, 2);