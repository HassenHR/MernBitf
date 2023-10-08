import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, selectName } from "../redux/features/auth/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

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
              <h4>Welcome, {name}</h4>
              <li>
                <Link to="/add-product">Add product</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
