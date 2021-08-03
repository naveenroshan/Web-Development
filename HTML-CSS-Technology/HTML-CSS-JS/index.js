//color change
var count = 1;
var property = document.getElementById("colorChange");
console.log(property);
function setColor() {
  if (count == 0) {
    property.style.borderColor = "blue";
    count = 1;
  } else {
    property.style.borderColor = "black";
    count = 0;
  }
}

//hidding a div element
function setHide() {
  var x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
