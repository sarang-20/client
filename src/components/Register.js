import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    hobbies: [],
    fileUpload: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
    firstName: '',
  });

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue =
      type === 'checkbox'
        ? checked
          ? [...user[name], value]
          : user[name].filter((item) => item !== value)
        : value;

    setUser({ ...user, [name]: newValue });
    setValidationErrors({ ...validationErrors, [name]: '' }); 
  };

  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    return email.includes('@');
  };

  const validateFirstName = (firstName) => {
    return firstName.length > 3 && !/^(.)\1+$/.test(firstName);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, gender, hobbies, fileUpload } = user;

    let isValid = true;
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!validatePassword(password)) {
      errors.password =
        'Password must be at least 8 characters long and contain at least one digit and one special character';
      isValid = false;
    }

    if (!validateFirstName(firstName)) {
      errors.firstName = 'First name must be more than 3 characters and not all characters are the same';
      isValid = false;
    }


    if (!isValid) {
      setValidationErrors(errors);
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password, gender, hobbies, fileUpload }),
      });

      const data = await res.json();
      console.log(data);

      if (data.status === 422 || !data) {
        window.alert('Email and/or first name already exist');
      } else {
        window.alert('Registered successfully. Please sign in');
        navigate('/Login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      window.alert('Failed to register. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleInput}
          required
        />
      </label>
      <br />
      {validationErrors.firstName && (
        <p style={{ color: 'red' }}>{validationErrors.firstName}</p>
      )}
  
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleInput}
          required
        />
      </label>
      <br />
  
      <label>
        Email Address:
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleInput}
          required
        />
      </label>
      <br />
      {validationErrors.email && (
        <p style={{ color: 'red' }}>{validationErrors.email}</p>
      )}
  
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInput}
          required
        />
      </label>
      <br />
      {validationErrors.password && (
        <p style={{ color: 'red' }}>{validationErrors.password}</p>
      )}
  
      <label>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={user.gender === 'male'}
            onChange={handleInput}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={user.gender === 'female'}
            onChange={handleInput}
          />
          Female
        </label>
      </label>
      <br />
      {validationErrors.gender && (
        <p style={{ color: 'red' }}>{validationErrors.gender}</p>
      )}
  
      <label>
        Hobbies:
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            checked={user.hobbies.includes('reading')}
            onChange={handleInput}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="sports"
            checked={user.hobbies.includes('sports')}
            onChange={handleInput}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="music"
            checked={user.hobbies.includes('music')}
            onChange={handleInput}
          />
          Music
        </label>
      </label>
      <br />
      {validationErrors.hobbies && (
        <p style={{ color: 'red' }}>{validationErrors.hobbies}</p>
      )}
  
      <label>
        File Upload:
        <input
          type="file"
          name="fileUpload"
          value={user.fileUpload}
          onChange={handleInput}
        />
      </label>
      <br />
      {validationErrors.fileUpload && (
        <p style={{ color: 'red' }}>{validationErrors.fileUpload}</p>
      )}
  
      <button type="submit">Submit</button>
      <a onClick={handleSubmit} style={{cursor:'pointer'}}>

        Already have an account? Sign in.
      </a>
    </form>
  );
      }
export default Register;