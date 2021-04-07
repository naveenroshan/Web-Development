//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const date = new Date();
//this is 24 hour time
const currentTime = date.getHours();
let greeting;
const inline = {
    color: ""
}

if (currentTime < 12) {
    greeting = "good morning"
    inline.color = "red"
} else if (currentTime < 18) {
    greeting = "good afternoon"
    inline.color = "green"
} else {
    greeting = "good night"
    inline.color = "blue"
}

ReactDom.render(
    <h1 style={inline}>{greeting}</h1>,
    document.getElementById("root")
);