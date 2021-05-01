import React from "react";

function Emojis(Props) {
  return (
    
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {Props.emoji}
          </span>
          <span>{Props.name}</span>
        </dt>
        <dd>{Props.meaning}</dd>
      </div>
  );
}

export default Emojis;
