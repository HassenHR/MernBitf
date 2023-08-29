import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
              <li>
                <p>Hi, Hassen</p>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
