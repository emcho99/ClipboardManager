import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const username = location.state?.username || localStorage.getItem('username');
  //const username = localStorage.getItem('username');

  if (!username) {
    return (
      <div>
        <Navbar />
        Settings
        <div className="options d-flex flex-column">
          <Link className="btn btn-primary my-2" to="/Login" style={{ width: 'fit-content' }}>Prijavi se</Link>
          <Link className="btn btn-secondary my-2" to="/Register" style={{ width: 'fit-content' }}>Registruj se</Link>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div>
        <Navbar />
        <h2>Dobrodosli, {username}!</h2>
        <button
          className="btn btn-danger mt-3"
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            navigate('/Login');
          }}
        >
          Odjavite se 
        </button>
      </div>
    );
  }

}

export default Settings;
