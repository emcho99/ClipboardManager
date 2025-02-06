import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const username = location.state?.username || localStorage.getItem('username');
  const tokenData = location.state?.tokenData || localStorage.getItem('token');
  console.log('token data: ', tokenData);
  //const username = localStorage.getItem('username');

  if (!username) {
    return (
      <div className="container mt-5">
        <h2>Dobrodosli na nasu stranicu!</h2>
        <div className="d-flex flex-column">
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate('/Login')}
          >
            Prijavite se
          </button>
          Niste prijavljeni?
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate('/Register')}
          >
            Registrujte se
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      Dobrodosli
    </div>
  )
}

export default Home;