import React from "react";

function App() {
  //using the use state function from react
  const [count, setCount] = React.useState(0);
  function increase() {
    //now setting the value to setcount function .
    //which is second part of the usestate function.
    setCount(count + 1);
  }
  function decrese() {
    //now setting the value to setcount function .
    //which is second part of the usestate function.
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrese}>-</button>
    </div>
  );
}

export default App;
