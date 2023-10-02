import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import UserList from "./pages/UserList";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Loader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
