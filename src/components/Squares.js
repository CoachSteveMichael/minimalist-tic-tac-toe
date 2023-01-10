import React from "react";

function Squares(props) {
  return (
    <div className="squares" onClick={() => props.markBox(props.id)}>
      {props.value}
    </div>
  );
}

export { Squares };
