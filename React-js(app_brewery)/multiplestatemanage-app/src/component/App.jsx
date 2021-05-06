import React, { useState } from "react";

function App() {
  const [fullDeatil, setFullName] = useState({
    fName: "",
    lName: "",
    eMail: "",
  });

  function updateDeatils(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          eMail: prevValue.eMail,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          eMail: prevValue.eMail,
        };
      } else if (inputName === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          eMail: newValue,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello{fullDeatil.fName}
        {fullDeatil.lName}
      </h1>
      <p>{fullDeatil.eMail}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={updateDeatils}
          value={fullDeatil.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={updateDeatils}
          value={fullDeatil.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={updateDeatils}
          value={fullDeatil.eMail}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
