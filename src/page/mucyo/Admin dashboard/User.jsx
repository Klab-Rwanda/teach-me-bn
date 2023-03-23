
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../css2/user.css';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://teachmeapi.onrender.com/api/v1/users')
      .then(response => {
        console.log(response.data.data.users); 
        setUsers(response.data.data.users); 
      })
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`https://teachmeapi.onrender.com/api/v1/users/${userId}`)
      .then(response => {
        console.log(response.data);
        const updatedUsers = users.filter(user => user._id !== userId);
        setUsers(updatedUsers);
      })
      .catch(error => console.log(error));
  };

  const handleDisable = (userId) => {
    axios.patch(`https://teachmeapi.onrender.com/api/v1/users/${userId}`, { active: false })
      .then(response => {
        console.log(response.data);
        const updatedUsers = users.map(user => {
          if (user._id === userId) {
            return { ...user, active: false };
          } else {
            return user;
          }
        });
        setUsers(updatedUsers);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>All users:</h2>
      <table>
        <thead>
          <tr>
            <th>User Type</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.Usertype}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.name}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(user._id)}>Delete</button>
                {!user.active && (
                  <button className="enable-button" onClick={() => handleDisable(user._id)}>Enable</button>
                )}
                {user.active && (
                  <button className="disable-button" onClick={() => handleDisable(user._id)}>Disable</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;



