import React, { useState, useEffect } from 'react';
import { data } from './AdminDash';

const StudentApplication = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://teachmeapi.onrender.com/users');
        const data = await response.json();
        setUsers(data.data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
}, []);

const handleApprove = async (id) => {
    try {
        const response = await fetch(`https://teachmeapi.onrender.com/api/v1/student/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'approved',
                access: true
            })
        });
        const data = await response.json();
        console.log(data);
       
    } catch (error) {
      console.log(error);
    }
  };
  console.log (data)

  return (
    <div>
      <h1>All Student Parent Applications</h1>
      <table>
        <thead>
          <tr>
            <th>course</th>
            <th>Email</th>
            <th>dateOfBirth</th>
            <th>Gender</th>
            <th>Fullname</th>
            <th>Password</th>
            <th>Status</th>
            <th>Studying</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.course}</td>
              <td>{user.email}</td>
              <td>{user.dateOfbirth}</td>
              <td>{user.gender}</td>
              <td>{user.fullName}</td>
              <td>{user.password}</td>
              <td>{user.status}</td>
              <td>{user.studyingStyle}</td>
              <td>
                <button onClick={() => handleApprove(user.id)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentApplication;
