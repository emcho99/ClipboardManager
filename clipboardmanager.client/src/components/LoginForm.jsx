import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      setErrorMessage('');
    } catch (error)
    {
      setErrorMessage(error.message);
    }
  };

  async function login(email, password) {
    const response = await fetch('https://localhost:7286/api/users/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Prijava nije uspjela');
    }

    const data = await response.json();
    localStorage.setItem('token', data.Token);
    localStorage.setItem('username', formData.email);

    navigate('/', { state: { username: data.Username } });
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Prijava</h2>
      <form className="bg-light p-4 rounded shadow-sm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <i className="fa fa-envelope"></i> Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Unesite email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            <i className="fa fa-lock"></i> Sifra:
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Unesite sifru"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-block mt-3"
        >
          <i className="fa fa-user-plus"></i> Prijavi se
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
