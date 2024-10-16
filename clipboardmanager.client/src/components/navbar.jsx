import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
    <div classname="navbar-center">
        <div classname="navbar-links">
            <li>
                <a>Clipboard</a>
              </li>
            <li>
                <a>Friends</a>
              </li>
            <li>
                <a>Settings</a>
              </li>
        </div>
    </div>
</nav>
);
};

export default Navbar;
