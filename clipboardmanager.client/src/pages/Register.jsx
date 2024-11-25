import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <RegisterForm />
      <p>Vec ste registrovani?</p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate('/Login')}
      >
        Prijavite se
      </button>
    </>
  );
};

export default Register;
