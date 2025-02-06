import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "./Clipboard.css";

const Clipboard = () => {
  const navigate = useNavigate();
  const username = location.state?.username || localStorage.getItem('username');

  return (
    <div>
      <Navbar />
      Clipboard
    </div>
  );
}

export default Clipboard;
