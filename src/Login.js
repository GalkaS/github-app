import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

const Login = ({
  handleChangeUsername,
  handleChangeFirstName,
  handleClick,
  username,
  firstName
}) => (
  <div className="login">
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="Enter your github username"
      value={username}
    />
    <Button value="Login" handleClick={() => handleClick(username)} />
  </div>
);

export default Login;

// <TextField
//   name="firstName"
//   handleChange={handleChangeFirstName}
//   id="user-firstName"
//   label="Your first name"
//   value={firstName}
// />
//
