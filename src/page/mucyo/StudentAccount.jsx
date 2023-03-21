import React, { useState } from 'react';
import '../../css/Studentaccount.css'
function TeacherDashboard() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      subject: "Math",
      grade: "10th",
      attendance: 85,
      assignments: 10,
      exams: 3
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "English",
      grade: "11th",
      attendance: 92,
      assignments: 12,
      exams: 4
    }
  ]);

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Attendance</th>
            <th>Assignments</th>
            <th>Exams</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>{student.grade}</td>
              <td>{student.attendance}%</td>
              <td>{student.assignments}</td>
              <td>{student.exams}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDashboard;

