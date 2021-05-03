import React from "react";

function AppTime() {
  let localTime = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(localTime);
  function getTime() {
      const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  //automatic time update
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h2>{time}</h2>
      <button className="btn" onClick={getTime}>Get Time</button>
    </div>
  );
}

export default AppTime;
