import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const username = location.state?.username || localStorage.getItem('username');
  //const username = localStorage.getItem('username');

  if (!username) {
    return (
      <div className="container mt-5">
        <h2>Dobrodosli na nasu stranicu!</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/Login')}
        >
          Prijavite se
        </button>
      </div>
    );
  }

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
  )
}

export default Home;