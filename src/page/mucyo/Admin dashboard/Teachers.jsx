


import React, { useEffect, useState } from 'react'
import './teachers.css';
import axios from '../../../axios/axios';

const Teachers = () => {
  const [teacher, setTeachers] = useState([]);

  const fetchApproved = async() => {
    try {
      const response = await axios("/getAllprofile");
      setTeachers(response.data.Profile.filter(t => t.status==="approved"));
    } catch (error) {
      console.log(error.response); 
    }
  }

  useEffect(() => {
    fetchApproved();
  }, []);

  return (
    <div className='teachers'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Course</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Studying Style</th>
          </tr>
        </thead>
        <tbody>
          {teacher.map((Profile) => (
            <tr key={Profile.id}>
              <td>{Profile.fullname}</td>
              <td>{Profile.adress}</td>
              <td>{Profile.course}</td>
              <td>{Profile.email}</td>
              <td>{Profile.exprience}</td>
              <td>{Profile.studyingstyle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;
