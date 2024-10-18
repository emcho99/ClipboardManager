import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
    <div classname="navbar-right">
        <a>Clipboard Manager</a>
    </div>

    <div classname="navbar-center">
        <ul classname="navbar-links">
            <li>
                <a>Clipboard</a>
              </li>
            <li>
                <a>Friends</a>
              </li>
            <li>
                <a>Top Clips</a>
              </li>
        </ul>
    </div>

    <div classname="navbar-left">
        <a>Settings</a>
    </div>
</nav>
);
};

export default Navbar;
