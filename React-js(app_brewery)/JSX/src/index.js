import React from "react";
import ReactDom from "react-dom";

const name = "ram"
const number = 9
ReactDom.render(
    <div>
        //using js const in the jsx html element
        <h1>Hello {name}</h1>
        <ul>
            <li>{number}</li>
            <li>{Math.random()}Tea</li>
            <li>Milk</li>
        </ul>
    </div>,
    document.getElementById("root")
);