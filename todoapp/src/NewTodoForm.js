import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">task:</label>
      <input
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />

      <button>Add a new Todo!</button>
    </form>
  );
};

export default NewTodoForm;
