import React, { useState } from "react";
import PageMenu from "../components/pageMenu/PageMenu";

const initialState = {
  name: "Hassen",
  emai: "hassen@gmail.com",
};

function Profile() {
  const [profile, setProfile] = useState(initialState);

  const { name, email } = profile;

  const handleInputChange = (e) => {};

  return (
    <div className="center">
      <PageMenu />
      <h1>Profile Page</h1>
      <form>
        <input type="text" value={name} onChange={handleInputChange} />
        <input
          type="email"
          value={email}
          disabled
          onChange={handleInputChange}
        />
        <button type="submit">Update profile</button>
      </form>
    </div>
  );
}

export default Profile;
