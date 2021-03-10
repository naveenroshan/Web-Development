alert("I am js from out side");

alert("Click OK to Say Good Bye");

document.querySelector("h1").innerHTML="Good bye";

//adding the style from css file using js
document.querySelector("h1").classList.add("huge");

//adding the html tag to html by js
document.querySelector("h1").innerHTML = "<em>good bye</em>";

//changing the url of the anger tag
document.querySelector("a").setAttribute("href", "https://www.bing.com/");