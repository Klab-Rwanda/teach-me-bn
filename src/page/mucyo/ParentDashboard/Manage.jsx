import React, { useState, useEffect } from "react";
import axios from "axios";
import "./manage.css";

const Manage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://teachmeapi.onrender.com/users")
      .then((response) => {
        setUsers(response.data.data.users);
        console.log(response.data.data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete(`https://teachmeapi.onrender.com/users/${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleEnableUser = (id) => {
    axios
      .patch(`https://teachmeapi.onrender.com/users/${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
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
                <button onClick={() => handleEnableUser(user._id)}>
                  Enable
                </button>
                <button onClick={() => handleDeleteUser(user._id)}>
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
