import React from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
   //creating a array  base value use state
  const [items, setItems] = React.useState([]);
 
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  function deleteItem(id) {
    setItems((preValue) => {
      //filtering the prevalue with list id which is clicked
      //and set setvalue remainig list
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
