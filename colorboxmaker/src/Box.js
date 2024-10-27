import React from "react";
import "./Box.css";

function Box({ color, width, height, deleteBox, id }) {
  return (
    <div
      className="box"
      style={{ backgroundColor: color, width: width, height: height }}
    >
      <button onClick={() => deleteBox(id)} className="close-btn">
        X
      </button>
    </div>
  );
}

export default Box;
