import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./manage.css";

const Manage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://teachmeapi.onrender.com/users')
      .then(response => {
        setUsers(response.data.data.users);
        console.log (response.data.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    axios.delete(`https://teachmeapi.onrender.com/users/${userId}`)
      .then(response => {
        // remove the deleted user from the local state
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>FullName</th>
            <th>level</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.studentfullName}</td>
              <td>{user.level}</td>
              <td>{user.studentemail}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Enable
                </button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage;
