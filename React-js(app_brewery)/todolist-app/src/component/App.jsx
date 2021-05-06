import React from "react";

function App() {
  //creating a string base value use state
  const [inputText, setInputText] = React.useState("");
  //creating a array  base value use state
  const [items, setItems] = React.useState([]);

  function updateDeatils(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateDeatils} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;