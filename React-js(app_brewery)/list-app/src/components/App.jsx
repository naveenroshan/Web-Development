import React from "react";
import Card from "./Card";
import contactdetails from "../contacts";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactdetails.map(createCard)}
    </div>
  );
}

export default App;
