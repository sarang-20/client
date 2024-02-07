import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8089/Login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      navigate('./Home');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request.');
    }
  };
  

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInput}
            required
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            required
          />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
        <a href="#" style={{ cursor: 'pointer' }}>
          Create account
        </a>
      </form>
    </>
  );
};

export default Login;
