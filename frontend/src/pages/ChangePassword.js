import React, { useState } from "react";
import PageMenu from "../components/pageMenu/PageMenu";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

function ChangePassword() {
  const [formData, setFormData] = useState(initialState);

  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {};

  return (
    <div className="center">
      <PageMenu />
      <h1>Change Password</h1>
      <form>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm new Password"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit">Update profile</button>
      </form>
    </div>
  );
}

export default ChangePassword;
