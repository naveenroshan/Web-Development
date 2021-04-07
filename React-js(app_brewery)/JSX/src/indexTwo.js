//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
import React from "react";
import ReactDom from "react-dom";

const name = "ram"
//getting current year
const number = new Date().getFullYear()
ReactDom.render(
    <div>
        //inline styleing
        <p style={{ color: "red" }}>Created by {name}</p>
        <p>Copyright {number}</p>
        <img src="https://i.pinimg.com/originals/b6/c7/66/b6c766a55337a6549b39933a77560a4a.png"></img>
    </div>,
    document.getElementById("root")
);