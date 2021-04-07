import React from "react";
import ReactDom from "react-dom";

const name = "ram"
const number = 9
const imageURL = "https://picsum.photos/200"
const inlineStyling = {
    color: "red",
    fontSize: "20px",
    border: "1px sloid black"
}
ReactDom.render(
    <div>
        //using js const in the jsx html element
        <h1 className="heading">Hello {name}</h1>
        <ul>
            <li>{number}</li>
            <li>{Math.random()}Tea</li>
            <li>Milk</li>
        </ul>
        <img src={imageURL}></img>
        <p style={inlineStyling}>If the width property is set to a percentage and the height property is set to "auto",
        the image will be responsive and scale up and down
        </p>
    </div>,
    document.getElementById("root")
);