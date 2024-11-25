import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <LoginForm />
      <p>Niste prijavljeni?</p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate('/Register')}
      >
        Registrujte se
      </button>
    </>
  );
};

export default Login;