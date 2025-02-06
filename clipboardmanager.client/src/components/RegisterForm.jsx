import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    lastName: '',
    email: '',
    address: ''
  });

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
      const response = await fetch('http://localhost:5143/api/users/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registracija uspjesna');
        setFormData({
          username: '',
          password: '',
          name: '',
          lastName: '',
          email: '',
          address: ''
        });
      }
      else
      {
        alert('Registracija nije uspjela');
      }
    } catch (error) {
      console.error('Error: ', error);
      alert('Doslo je do greske!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registracija</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <div className="form-group">
          <label htmlFor="username">
            <i className="fa fa-user"></i> Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Unesite username"
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
            value={formData.password}
            onChange={handleChange}
            placeholder="Unesite sifru"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            <i className="fa fa-id-card"></i> Ime:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Unesite ime"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            <i className="fa fa-id-card"></i> Prezime:
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Unesite prezime"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <i className="fa fa-envelope"></i> Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Unesite email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">
            <i className="fa fa-map-marker-alt"></i> Adresa:
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Unesite adresu"
            required />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mt-3"
        >
          <i className="fa fa-user-plus"></i> Registruj se
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
