import React from "react";

function ToDoItem(props) {
  return (
    //triggering the parent props functions only when clicked on the list
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
