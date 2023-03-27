import React, { useState } from "react";
import axios from "axios";

function TeacherApplicationsTable() {

  async function updateProfileRequestStatus(id, status) {
    try {
      const response = await axios.patch(`https://teachmeapi.onrender.com/api/v1/profile/${id}`, { status });
      const data = response.data;
      console.log(data);        // log the response data for debugging
                            // send a confirmation email to the user here
    } catch (error) {
      console.log(error); // log any errors for debugging
    }
  }
  
   console.log("data")


  const [teacherApplications, setTeacherApplications] = useState([
    {
        id: 2,
        fullName: "niganze",
        email: "niganze@example.com",
        timeAvailable: "Weekends, 10am - 2pm",
        course: "Mathematics and Physics",
        address: "456 Elm St, kigali, RWANDA",
        gender: "Female",
        status: "pending",
        studyingStyle: "online studying",
        experience: "7 years",
        dateApplied: "2022-03-67",
        cvUrl: "/cv/janesmith.pdf",
        description: "l am one the most popular teachers and helpers for",
        status: "pending"
      }
  ]);

  const handleStatusChange = (id, status) => {
    const updatedApplications = teacherApplications.map((application) => {
      if (application.id === id) {
        updateProfileRequestStatus(id, status); // call the updateProfileRequestStatus function here
        return { ...application, status };
      }
      return application;
    });
    setTeacherApplications(updatedApplications);
  };
  

  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Time Available</th>
          <th>Course</th>
          <th>Address</th>
          <th>status</th>
          <th>Gender</th>
          <th>Studying Style</th>
          <th>Experience</th>
          <th>Date Applied</th>
          <th>CV</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {teacherApplications.map((application) => (
          <tr key={application.id}>
            <td>{application.fullName}</td>
            <td>{application.email}</td>
            <td>{application.timeAvailable}</td>
            <td>{application.course}</td>
            <td>{application.address}</td>
            <td>{application.status}</td>
            <td>{application.gender}</td>
            <td>{application.studyingStyle}</td>
            <td>{application.experience}</td>
            <td>{application.dateApplied}</td>
            <td>
              <a href={application.cvUrl}>View CV</a>
            </td>
            <td>{application.description}</td>
            <td>
              <select
                value={application.status}
                onChange={(e) =>
                  handleStatusChange(application.id, e.target.value)
                }
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TeacherApplicationsTable;
