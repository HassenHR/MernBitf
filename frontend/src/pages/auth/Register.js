import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      const data = await registerUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center">
      <h1>Register</h1>
      <form onSubmit={register}>
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleInputChange}
          required
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
