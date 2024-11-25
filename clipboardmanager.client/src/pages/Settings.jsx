import React from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import "./Settings.css";

const Settings = () => {
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

export default Settings;
