//creating new random number
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

var imageOneFolder = "images/" + "dice" + randomNumber1 + ".png";

//creating new random number two same has above in single line
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var imageTwoFolder = "images/" + "dice" + randomNumber2 + ".png";

//now changing the value of the dices
document.querySelectorAll("img")[0].setAttribute("src", imageOneFolder);

document.querySelectorAll("img")[1].setAttribute("src", imageTwoFolder);

//now display the user won
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎌Player1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins!🎌";
}
else {
    document.querySelector("h1").innerHTML = "Draw...🏳️";
}

