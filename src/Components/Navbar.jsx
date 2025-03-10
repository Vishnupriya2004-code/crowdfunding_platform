import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";
import "./Styles/login.css"; // Add styles for modal forms

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
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
            <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
            {/* <button className="signup-btn" onClick={() => setShowSignup(true)}>Sign Up</button> */}
          </div>
        </div>
      </nav>

      {/* Login Form */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowLogin(false)}>&times;</span>
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Form
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowSignup(false)}>&times;</span>
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
