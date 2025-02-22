import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GiveYour's</div>
      <div className="nav-content">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Campaign</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
