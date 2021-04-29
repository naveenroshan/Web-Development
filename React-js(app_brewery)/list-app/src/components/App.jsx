import React from "react";
import Card from "./Card";
import contactdetails from "../contacts";

function App() {    
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
          name={contactdetails[0].name}
          img={contactdetails[0].imgURL}
          tel={contactdetails[0].phone}
          email={contactdetails[0].email}
      />
      <Card
          name={contactdetails[1].name}
          img={contactdetails[1].imgURL}
          tel={contactdetails[1].phone}
          email={contactdetails[1].email}
      />
      <Card
          name={contactdetails[2].name}
          img={contactdetails[2].imgURL}
          tel={contactdetails[2].phone}
          email={contactdetails[2].email}
      />
    </div>
  );
}

export default App;
