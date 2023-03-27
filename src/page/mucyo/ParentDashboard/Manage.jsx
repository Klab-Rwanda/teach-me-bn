import React, { useState } from 'react';
// import '../../../css2/manage.css';
const StudentAccountPage = () => {
  const [studentName, setStudentName] = useState('');
  const [studentGrade, setStudentGrade] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleStudentGradeChange = (e) => {
    setStudentGrade(e.target.value);
  };

  const handleParentNameChange = (e) => {
    setParentName(e.target.value);
  };

  const handleParentEmailChange = (e) => {
    setParentEmail(e.target.value);
  };

  const handleParentPhoneChange = (e) => {
    setParentPhone(e.target.value);
  };

  const handleStudentAccountSubmit = (e) => {
    e.preventDefault();
    // code to update student account
  };

  return (
    <div className=''>
    <table border={1} className="manage_table">
      <th colSpan={5}>manage all children account</th>
      <tr>
      <td>Full Name</td>
      <td>Email</td>
      <td>Password</td>
      <td colSpan={2}>Action</td></tr>
      <tr>
      <td>Nisingize Alle</td>
      <td>parent@gmail.com</td>
      <td>12345678</td>
      <td>Update</td>
      <td>Delete</td>
      </tr>
      <tr>
      <td>Nisingize Alle</td>
      <td>parent@gmail.com</td>
      <td>12345678</td>
      <td>Update</td>
      <td>Delete</td>
      </tr>
      <tr>
      <td>Nisingize Alle</td>
      <td>parent@gmail.com</td>
      <td>12345678</td>
      <td>Update</td>
      <td>Delete</td>
      </tr>  
      <tr>
      <td>Nisingize Alle</td>
      <td>parent@gmail.com</td>
      <td>12345678</td>
      <td>Update</td>
      <td>Delete</td>
      </tr>
    </table>
  </div>
  );
};
export default StudentAccountPage;
