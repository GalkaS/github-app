import React from "react";

const TextField =  ({ value, handleChange, label, id, name }) => (
  <React.Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      value={value}
      onChange={handleChange}
      name={name}
      id={id}
    />
  </React.Fragment>
);

export default TextField;