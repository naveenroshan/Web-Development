//checking the jquery is loaded from CDN
$(document).ready(function () {
    //applying style with jquery
    $("h1").css("color", "red");
});

//adding style to the button
$("button").addClass("big-title margin-50")


//removing the class
$("button").removeClass("big-title")

//change the text of the header
$("h1").text("Bye")

//adding the html vaules
$("h1").html("<em>hello</em>")

//setting vaules using attribute
$("a").attr("href", "https://www.yahoo.com")

//Adding Event Listeners with jQuery
$("h2").click(function () {
    $("h2").css("color", "blue")
    $("h1").text("Bye").css("color", "blue")
});

//Adding Event Listeners button
$("button").click(function () {
    $("button").css("color", "purple")
    $("a").css("color", "blue")
})

//Adding Event Listeners keypress
$("input").keypress(function (event) {
    $("h3").text(event.key) 
});

//adding mouse hover using jquery
$("p").on("mouseover", function () {
    $("p").css("color", "purple").html("<em>Mouse overme to change the color</em>");
})

//Adding and Removing Elements with jQuery
$("h1").before("<button>New</button>")

$("pf").prepend("<button>enter to display down</button>")

//Website Animations with jQuery
$("h4").on("click", function () {
    $("h4").fadeout();
})