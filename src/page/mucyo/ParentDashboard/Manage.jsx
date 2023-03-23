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
    <div>
      <h1>Student Account Management</h1>
      <form onSubmit={handleStudentAccountSubmit}>
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={handleStudentNameChange} />
        </label>
        <br />
        <label>
          Student Grade:
          <input type="text" value={studentGrade} onChange={handleStudentGradeChange} />
        </label>
        <br />
        <label>
          Parent Name:
          <input type="text" value={parentName} onChange={handleParentNameChange} />
        </label>
        <br />
        <label>
          Parent Email:
          <input type="email" value={parentEmail} onChange={handleParentEmailChange} />
        </label>
        <br />
        <label>
          Parent Phone:
          <input type="tel" value={parentPhone} onChange={handleParentPhoneChange} />
        </label>
        <br />
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};
export default StudentAccountPage;
