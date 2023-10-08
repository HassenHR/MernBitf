import React from "react";
import { Link } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../components/protect/HiddenLinks";

function Home() {
  return (
    <div>
      <nav>
        <div className="nav-center">
          <div>
            <h1>
              <Link to="/">LOGO</Link>
            </h1>
          </div>
          <div>
            <ul>
              <ShowOnLogout>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ShowOnLogout>
              <ShowOnLogout>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ShowOnLogout>
              <ShowOnLogin>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ShowOnLogin>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <h1>Home page</h1>
      </section>
    </div>
  );
}

export default Home;
