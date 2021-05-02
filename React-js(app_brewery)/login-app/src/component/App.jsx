import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function App() {
  return <div className="container">{
    //ternary operator
    isLoggedIn ? <h1>Hello!!</h1> : <Login/>
  }</div>;
}

export default App;
