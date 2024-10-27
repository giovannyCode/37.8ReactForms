import React from "react";
import "./Todo.css";

function Todo({ task, onRemove, id }) {
  return (
    <div className="todo">
      <span>{task}</span>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
}
export default Todo;
