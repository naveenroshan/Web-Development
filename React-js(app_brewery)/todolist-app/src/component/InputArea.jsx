import React from "react";

function InputArea(props) {
  //creating a string base value use state
  const [inputText, setInputText] = React.useState("");

  function updateDeatils(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input type="text" onChange={updateDeatils} value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
