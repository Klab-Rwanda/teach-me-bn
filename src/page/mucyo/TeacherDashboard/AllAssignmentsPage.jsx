import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../../../css/AllAssignmentsPage.css";

function AllAssignmentsPage() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        const response = await axios.get(
          "https://teachmeapi.onrender.com/api/v1/getAllAssignment"
        );
        console.log(response.data.Assignment);
        setAssignments(response.data.Assignment);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAssignments();
  }, []);

  async function deleteAssignment(id) {
    try {
      await axios.delete(`https://teachmeapi.onrender.com/api/v1/assignment/${id}`);
      setAssignments(assignments.filter((assignment) => assignment._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  async function updateAssignment(id, updatedAssignment) {
    try {
      await axios.put(`https://teachmeapi.onrender.com/api/v1/updateAssignment/${id}`, updatedAssignment);
      setAssignments(assignments.map((assignment) => assignment._id === id ? updatedAssignment : assignment));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="all-assignments-page">
      <h1>All Assignments</h1>
      <table className="assignments-table">
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Course Name</th>
            <th>Content of Course</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment._id}>
              <td>{assignment.assignmentName}</td>
              <td>{assignment.courseName}</td>
              <td>{assignment.contentofcourse}</td>
              <td>{assignment.publishDate}</td>
              <td>
                <div className="assignment-actions">
                  <button className="edit-button" onClick={() => {
                    const updatedAssignmentName = prompt("Enter new assignment name:", assignment.assignmentName);
                    if (updatedAssignmentName) {
                      updateAssignment(assignment._id, {...assignment, assignmentName: updatedAssignmentName})
                    }
                  }}><FaEdit /></button>
                  <button className="delete-button" onClick={() => deleteAssignment(assignment._id)}><FaTrash /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AllAssignmentsPage;
