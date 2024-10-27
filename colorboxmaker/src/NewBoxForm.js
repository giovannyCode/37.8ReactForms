import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
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
      <label htmlFor="name">width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">background color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new Box!</button>
    </form>
  );
};

export default NewBoxForm;
