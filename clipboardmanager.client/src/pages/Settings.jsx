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
        <Link to="/Login">Prijavi se</Link>
        <Link to="/Register">Registruj se</Link>
      </div>
    </div>
  );
}

export default Settings;
