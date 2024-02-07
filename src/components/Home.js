import React from 'react'

export default function Home() {
  return (
    <div>
        <h1> Welcome Home</h1>
    </div>
  )
}
/*
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [file, setFile] = useState(null);
  const [date, setDate] = useState('');

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("successfully")
    navigate('./login')


    const formData = {
      firstName,
      lastName,
      email,
      password,
      gender,
      hobbies,
      file,
      date,
    };

    console.log(formData);

   
  };
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  

  return (
    <form onSubmit={handleSubmit} >
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
      </label>
      <br />

      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
      </label>
      <br />
      <label>
        Email Address
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </label>
      <br />
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
      </label>
      <br />

      <label>
        Gender:
        <label>
          <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
          Male
        </label>
        <label>
          <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
          Female
        </label>
      </label>
      <br />

      <label>
        Hobbies:
        <label>
          <input type="checkbox" value="reading" checked={hobbies.includes('reading')} onChange={() => setHobbies([...hobbies, 'reading'])} />
          Reading
        </label>
        <label>
          <input type="checkbox" value="sports" checked={hobbies.includes('sports')} onChange={() => setHobbies([...hobbies, 'sports'])} />
          Sports
        </label>
        <label>
          <input type="checkbox" value="music" checked={hobbies.includes('music')} onChange={() => setHobbies([...hobbies, 'music'])} />
          Music
        </label>
      </label>
      <br />

      <label>
        Birthdate:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
      </label>
      <br />

      <label>
        File Upload:
        <input type="file" onChange={handleFileChange} />
      </label>
      <br />

      <button type="submit" >Submit</button> <a onClick={()=>navigate('/')} style={{cursor:'pointer'}}>you have account</a>
    </form>
  );
};

export default Register;
*/ 