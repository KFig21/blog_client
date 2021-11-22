import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Nav({ userAuth, setUserAuth }) {
  const logout = () => {
    setUserAuth(false);
    localStorage.clear();
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-header-container" title="Back to top">
          <Logo />
        </div>
        <div className="nav-link-container">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          {/* <Link to="./posts">
            <button>Login</button>
          </Link> */}

          {userAuth && (
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
