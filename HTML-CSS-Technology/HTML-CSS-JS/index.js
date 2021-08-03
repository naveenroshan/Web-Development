//color change
var count = 1;
var element = document.getElementById("colorChange");
console.log(element);
function setColor() {
  if (count == 0) {
    element.style.borderColor = "blue";
    count = 1;
  } else {
    element.style.borderColor = "black";
    count = 0;
  }
}

//hidding a div element
function setHide() {
  var el = document.getElementById("hide");
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}
