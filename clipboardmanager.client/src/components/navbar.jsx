import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-right">
        <a href="#">Clipboard Manager</a>
      </div>

      <div className="navbar-center">
        <ul className="navbar-links">
          <li>
            <a href="#">Clipboard</a>
          </li>
          <li>
            <a href="#">Friends</a>
          </li>
          <li>
            <a href="#">Top Clips</a>
          </li>
        </ul>
      </div>

      <div className="navbar-left">
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
