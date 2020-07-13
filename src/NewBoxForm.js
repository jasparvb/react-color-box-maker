import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
  
    /** Send {width, height, backgroundColor} to parent
     *    & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      addBox({ ...formData, id: uuid() });
      setFormData(INITIAL_STATE);
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  
    /** render form */
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
  
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="color"
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
  
        <button>Add a new box!</button>
      </form>
    );
  };
  
  export default NewBoxForm;
  