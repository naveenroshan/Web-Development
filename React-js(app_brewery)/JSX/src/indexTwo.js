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
        <p>Created by {name}</p>
        <p>Copyright {number}</p>
    </div>,
    document.getElementById("root")
);