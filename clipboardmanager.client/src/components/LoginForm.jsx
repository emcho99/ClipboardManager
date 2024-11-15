import React, { useState, useEffect } from 'react';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Prijava</h2>
      <form className="bg-light p-4 rounded shadow-sm">
        <div className="form-group">
          <label htmlFor="email">
            <i className="fa fa-envelope"></i> Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Unesite email"
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
            name="email"
            placeholder="Unesite sifru"
            required
          />
        </div>

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
