import React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading";
import List from "./List";

ReactDom.render(
    <div>
      <Heading/>
        <List/>
    </div>,
    document.getElementById("root")
);