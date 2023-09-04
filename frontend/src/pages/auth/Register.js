import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={register}>
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit">Register</button>
        <div>
          <Link to="/">Home</Link>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
