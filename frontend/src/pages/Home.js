import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <section>
        <h1>Home page</h1>
        <button>
          <Link to="register">Register</Link>
        </button>
        <button>
          <Link to="login">Login</Link>
        </button>
      </section>
    </div>
  );
}

export default Home;
