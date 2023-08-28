import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        <div>
          <p>Don't have an account? </p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
