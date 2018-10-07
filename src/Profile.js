import React from "react";
import Button from "./Button.js";

const Profile = ({ login, avatar_url, handleLogOut}) => (
  <div className="profile">
    <h2 className="logout">Hello {login}</h2>
    <img src={avatar_url} alt={`${login}'s avatar'`} />
    <Button value="Log Out" handleClick={handleLogOut} />
  </div>
)

export default Profile;