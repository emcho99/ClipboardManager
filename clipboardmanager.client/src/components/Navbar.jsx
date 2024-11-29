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
    <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?">
     </input>
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
  <Link to="/Settings">Settings</Link>
   </div>
    </div>
    </div>
</nav>
);
};

export default Navbar;
