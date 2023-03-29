import React, { useState, useEffect } from "react";
import axios from "axios";

function TeacherApplicationsTable() {
  const [teacherApplications, setTeacherApplications] = useState([]);

  useEffect(() => {
    const fetchTeacherApplications = async () => {
      try {
        const response = await axios.get(
          "https://teachmeapi.onrender.com/api/v1/getAllprofile"
        );
        setTeacherApplications(response.data.Profile);
        console.log(response.data.Profile)
      } catch (error) {
        console.log(error); // log any errors for debugging
      }
    };
    fetchTeacherApplications();
  }, []);

  async function updateProfileRequestStatus(id, status) {
    try {
      const response = await axios.patch(
        `https://teachmeapi.onrender.com/api/v1/profile/${id}`,
        { status }
      );
      const data = response.data;
      console.log(data); // log the response data for debugging
      // send a confirmation email to the user here
    } catch (error) {
      console.log(error); 
    }
  }

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
          <th>Course</th>
          <th>Address</th>
          <th>status</th>
          <th>Date</th>
          <th>Experience</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {teacherApplications.map((Profile) => (
          <tr key={Profile.id}>
            <td>{Profile.fullname}</td>
            <td>{Profile.email}</td>
            <td>{Profile.course}</td>
            <td>{Profile.adress}</td>
            <td>{Profile.status}</td>
            <td>{Profile.date}</td>
         
            <td>{Profile.exprience}</td>
            <td>{Profile.dateApplied}</td>
            {/* <td>
              <a href={Profile.cvUrl}>View CV</a>
            </td> */}
            
            <td>
              <select
                value={Profile.status}
                onChange={(e) =>
                  handleStatusChange(Profile?.id, e.target.value)
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
