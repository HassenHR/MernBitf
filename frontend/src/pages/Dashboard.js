import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log("Toggle theme");
  };

  const logoutUser = () => {
    console.log("Logout user");
  };

  return (
    <div>
      <Navbar />
      <h1>Dashboard Page</h1>
    </div>
  );
}

export default Dashboard;
