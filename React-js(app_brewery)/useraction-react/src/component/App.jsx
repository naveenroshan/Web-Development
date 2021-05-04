import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [isMousedOver, setMouseOver] = React.useState(false);
  const [name, setname] = React.useState("");

  function handleClick() {
    setHeadingText("Submitted ");
    event.preventDefault();
  }
  function handleMouseHover() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleOnchange(event) {
    setname(event.target.value);
  }
  return (
    <div className="container">
      <h1>{headingText + name + " !!"}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleOnchange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
      </form>
      <button
        //here we are using the expression for change the style
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
