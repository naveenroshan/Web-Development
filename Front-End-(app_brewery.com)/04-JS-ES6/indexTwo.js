//execise six
var tweet = "jhon";
var tweetTwo = "julie";
//method to generate random number in 0-0.9
var n = Math.random();
//converting the number upto 1-6
n = n * 100;
//to make sure there is no zero number and float to decimal number
n = Math.floor(n) + 1;

if (n > 70) {
    console.log(tweet + n + tweetTwo + " great lovers")
} else {
    console.log(tweet + n + tweetTwo)
}
