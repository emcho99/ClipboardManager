import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

<nav className="navbar">
    <div className="navbar-right">
        <Link to="/">Clipboard Manager</Link>
    </div>

    <div className="navbar-center">
        <ul className="navbar-links">
            <li>
                <Link to="/Clipboard">Clipboard</Link>
              </li>
            <li>
                <Link to="/Friends">Friends</Link>
              </li>
            <li>
                <Link to="/TopClips">Top Clips</Link>
              </li>
        </ul>
    </div>

    <div className="navbar-left">
        <Link to="/Settings">Settings</Link>
    </div>
</nav>
);
};

export default Navbar;
