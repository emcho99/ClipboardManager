import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const username = location.state?.username || localStorage.getItem('username');
  const [isHovered, setisHovered] = useState(false);

  if (!username)
  {
    return (
      <nav className="navbar">
        <div className="navbar-right">
          <Link to="/">Clipboard Manager</Link>
        </div>
        <div className="navbar-left">
          <div className="wrap">
            <Link to="/Settings">Settings</Link>
          </div>
        </div>
      </nav>
    );
  }
  else
  {
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
        <div className="navbar-right">
          <div className="wrap d-flex flex-row justify-content-between">
            <div className="search d-flex flex-row input-group">
              <input type="text" className="searchTerm form-control" placeholder="What are you looking for?">
              </input>
              <button type="submit" className="searchButton btn btn-primary">
                <i className="fa fa-search"></i>
              </button>
              <Link to="/Settings">Settings</Link>
            </div>
            <div
              className="profileDiv"
              onMouseEnter={() => { setisHovered(true); }}
              onClick={() => { setisHovered(true); }}
            >
              <button className="profileButton btn btn-success">
                <i className="fa-regular fa-user"></i>
              </button>
              {isHovered && (
                <div id="loginModal"
                  onMouseLeave={() => { setisHovered(false); }}
                >
                  <p>{username}!</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('username');
                      navigate('/Login');
                    }}
                  >
                    Odjavite se
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }

};

export default Navbar;
