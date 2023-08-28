import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Register</button>
        <div>
          <p>Already have an account? </p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
