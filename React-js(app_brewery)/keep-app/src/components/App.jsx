import React from "react";
import notes from "../notesDetails";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notesDetails from "../notesDetails";

function createNotes(note) {
  return <Note title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notesDetails.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
