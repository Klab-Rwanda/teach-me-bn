import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ParentDash() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    // Fetch data from API
    console.log('Fetching data...');
    axios.get('https://teachmeapi.onrender.com/users')
      .then(response => {
        console.log('Data received:', response.data.data.users);
        setusers(response.data.data.users);
      })
      .catch(error => console.log(error));
  }, []);

  console.log('Rendering with users:', users);

  return (
    <div>
      <h2>Parent Dashboard</h2>
      <h3>My student</h3>
      <ul>
        {users.map(users => (
          <li key={users.id}>
            <h4>fullName:{users.fullName}</h4>
            <p>course: {users.course}</p>
            <p>email: {users.email}</p>
            <p>level: {users.level}</p> 
            <p>Grade: {users.grade}</p> 
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default ParentDash;
