
//execise one
var tweet = prompt("compose your tweet:");
var tweetCount = tweet.lenght;
alert("you have written " + tweetCount + "character you have " + (10 - tweetCount) + "character remaining")



// execise two
var tweet = prompt("compose your tweet:");
var slice = tweet.slice(0, 10);
alert("you have written " + slice)


//execise three
var name = "Naveen"
name = name.toUpperCase();
nametwo = name.toLowerCase();


//execise four
var name = prompt("please enter name");
nameslice = name.slice(0, 1).toUpperCase();
nametwo = nameslice + name.slice(1, name.lenght).toLowerCase();
alert(nametwo);

//execise five
function lifeInWeeks(age) {
    var yearsReaming = 90 - age;
    var days = yearsReaming * 356;
    var weeks = yearsReaming * 52;
    var months = yearsReaming * 12
    console.log("you have" + days + " " + weeks + " " + months);
}

