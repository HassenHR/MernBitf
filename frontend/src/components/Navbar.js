import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div>LOGO</div>
        <ul>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
