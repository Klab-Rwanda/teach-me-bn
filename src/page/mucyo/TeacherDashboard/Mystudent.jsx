

import React, { useState } from "react";
import "../../../css2/mystudent.css";

const Mystudent = () => {
  // Set up some sample data for the students
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      course: "Math",
      parent: "Jane Doe",
      age: 15,
      level: "Intermediate",
    },
    {
      id: 2,
      name: "Jane Smith",
      course: "Science",
      parent: "John Smith",
      age: 16,
      level: "Advanced",
    },
    {
      id: 3,
      name: "Bob Johnson",
      course: "English",
      parent: "Mary Johnson",
      age: 14,
      level: "Beginner",
    },
  ]);

  // Set up state for adding/editing students
  const [newStudent, setNewStudent] = useState({
    id: null,
    name: "",
    course: "",
    parent: "",
    age: "",
    level: "",
  });
  const [editing, setEditing] = useState(false);

  // Handle form submit for adding/editing students
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editing) {
      setStudents(
        students.map((student) =>
          student.id === newStudent.id ? newStudent : student
        )
      );
      setEditing(false);
    } else {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    }
    setNewStudent({
      id: null,
      name: "",
      course: "",
      parent: "",
      age: "",
      level: "",
    });
  };

  // Handle form reset for adding/editing students
  const handleReset = () => {
    setNewStudent({
      id: null,
      name: "",
      course: "",
      parent: "",
      age: "",
      level: "",
    });
    setEditing(false);
  };

  // Handle student deletion
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Handle student editing
  const handleEditStudent = (student) => {
    setNewStudent(student);
    setEditing(true);
  };

  // Handle enrolling another student in a course
  const handleEnrollStudent = (course) => {
    setNewStudent({
      id: null,
      name: "",
      course: course,
      parent: "",
      age: "",
      level: "",
    });
    setEditing(false);
  };

  // Handle creating a group
  const handleCreateGroup = () => {
    // TODO: Implement logic for creating a group
    console.log("Creating group...");
  };

  return (
    <div className="mystudent">
      <h2>My Students</h2>

      <div className="filters">
        <label htmlFor="course">Course:</label>
        <select
          id="course"
          value={newStudent.course}
          onChange={(event) =>
            setNewStudent({ ...newStudent, course: event.target.value })
          }
        >
          <option value="">Select a course</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>
        <button></button>

        <div className="form-row">
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        min="0"
        value={newStudent.age}
        onChange={(event) =>
          setNewStudent({ ...newStudent, age: event.target.value })
        }
      />
    </div>

    <div className="form-row">
      <label htmlFor="parent">Parent:</label>
      <input
        type="text"
        id="parent"
        value={newStudent.parent}
        onChange={(event) =>
          setNewStudent({ ...newStudent, parent: event.target.value })
        }
      />
    </div>

    <div className="form-row">
      <label htmlFor="level">Level:</label>
      <select
        id="level"
        value={newStudent.level}
        onChange={(event) =>
          setNewStudent({ ...newStudent, level: event.target.value })
        }
      >
        <option value="">Select a level</option>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </select>
    </div>
     <form>
    <div className="form-row">
      <button type="submit">{editing ? "Save" : "Add"}</button>
      {editing && <button type="reset">Cancel</button>}
    </div>
  </form>

  <div className="student-list">
    {students.map((student) => (
      <div className="student" key={student.id}>
        <span className="name">{student.name}</span>
        <span className="age">{student.age} years old</span>
        <span className="parent">Parent: {student.parent}</span>
        <span className="level">Level: {student.level}</span>
        <button onClick={() => handleEditStudent(student)}>Edit</button>
        <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
      </div>
    ))}
  </div>
  </div>
</div>

);
};

export default Mystudent;      
