//mouse press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
};

//keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(eventS) {
    switch (eventS) {
        case "w":
            //playing the sound
            var audioW = new Audio("sounds/crash.mp3");
            audioW.play();
            break;
        case "a":
            //playing the sound
            var audioA = new Audio("sounds/kick-bass.mp3");
            audioA.play();
            break;
        case "s":
            //playing the sound
            var audioS = new Audio("sounds/snare.mp3");
            audioS.play();
            break;
        case "d":
            //playing the sound
            var audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
            break;
        case "j":
            //playing the sound
            var audioJ = new Audio("sounds/tom-1.mp3");
            audioJ.play();
            break;
        case "k":
            //playing the sound
            var audioK = new Audio("sounds/tom-2.mp3");
            audioK.play();
            break;
        case "l":
            //playing the sound
            var audioL = new Audio("sounds/tom-3.mp3");
            audioL.play();
            break;
        default: console.log("wrong")
    }
};

function buttonAnimation(current) {
    var active = document.querySelector("." + current);
    //adding css value to a element by using JS
    active.classList.add("pressed");
    //setting timeout to remove the added css value by using Js
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100)
};