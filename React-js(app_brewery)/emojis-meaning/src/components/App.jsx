import React from "react";
import Emojis from "./Emojis";
import EmojisDetails from "../emojis";

function createEmoji(contact) {
  return (
    <Emojis
      id={contact.id}
      emoji={contact.emoji}
      name={contact.name}
      meaning={contact.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{EmojisDetails.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
