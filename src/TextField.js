import React from "react";

const TextField = ({ value, handleChange, label, id, name }) => (
  <React.Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      className="text-field"
      type="text"
      value={value}
      onChange={handleChange}
      name={name}
      id={id}
    />
  </React.Fragment>
);

export default TextField;

// <TextField
//   name="firstName"
//   handleChange={handleChangeFirstName}
//   id="user-firstName"
//   label="Your first name"
//   value={firstName}
// />
//
