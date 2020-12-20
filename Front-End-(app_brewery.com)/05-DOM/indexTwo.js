document.querySelector("input").click();

document.getElementsByTagName("li")[2].innerHTML = "Naveen"

var nunOfList = document.getElementsByTagName("li").length;
alert("num of list iteams = " + nunOfList);

document.getElementById("title").innerHTML = "love u babe..!!";

//selecting by id 
document.querySelector("#title").innerHTML = "cool";

//selecting by class
setTimeout(function () {
    document.querySelector(".btn").click();
}, 6000);

alert("click ok to change google red");

// give time wait
setTimeout(function () {
    //selecting by combaining the tag value
    document.querySelector("li a").style.color = "red";
}, 3000);


document.querySelector(".btn").style.backgroundColor = "yellow"