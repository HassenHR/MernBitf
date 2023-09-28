import React from "react";
import { Link } from "react-router-dom";

function PageMenu() {
  return (
    <div className="profile-nav">
      <Link to="/profile">Profile</Link>
      <Link to="/change-password">Change password</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default PageMenu;
