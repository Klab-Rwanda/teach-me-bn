import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/AllAssignmentsPage.css";
function AllAssignmentsPage() {
  const [Assignment, setAssignments] = useState([]);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        const response = await axios.get(
          "https://teachmeapi.onrender.com/api/v1/getAllAssignment"
        );
        console.log(response.data.Assignment);
        // console.log(response.data);
        setAssignments(response.data.Assignment);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAssignments();
  }, []);

  return (
    <div className="all-assignments-page">
      <h1>All Assignments</h1>
      { Assignment?.map((Assignment) => (
          <div className="assignment-card" key={Assignment?._id}>
            <h2>{Assignment?.assignmentName}</h2>
            <p>{Assignment?.courseName}</p>
            <p>{Assignment?.contentofcourse}</p>
            <p>Due Date:{Assignment?.publishDate}</p>
          </div>
        ))}
    </div>
  );
}

export default AllAssignmentsPage;
