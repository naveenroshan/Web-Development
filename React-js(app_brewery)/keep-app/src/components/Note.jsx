import React from "react";

function Note(Props) {
  return (
    <div className="note">
      <h1>{Props.title}</h1>
      <p>{Props.content}</p>
    </div>
  );
}

export default Note;
