
import React, { useState } from 'react';
import "../../../css2/studentdash.css";
import Calendar from 'react-calendar';
import {render} from 'react-dom';

import {
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Mathematics', 'Biology', 'English', 'Science', 'kinyarwanda', 'Geography', 'Social Studies'];
const ReactCalender = ()  =>{
    const [date, setDate]  =  useState(new Date ());

    const onChange = date => {
      setDate(date);
    };
}

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100})),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const StudentDash = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission logic
    setShowModal(false); // close modal after form submission
  };
  return (
    <div className="home">
      <div className="header">
        <div className="dear">
          <p>
            Dear <span>student</span>
          </p>
        </div>
        <div className="upcaming">
          <button className="course" onClick={handleOpenModal}>
            Request Another Course
          </button>
        </div>
      </div>
      {showModal && (
        <div
          className="modal"
          style={{ display: !showModal ? "none" : "flex" }}
        >
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Add a New Course</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="courseName">Course Name:</label>
              <input type="text" id="courseName" name="courseName" />

              <label htmlFor="courseCode">Course Code:</label>
              <input type="text" id="courseCode" name="courseCode" />
              <div className="add_course">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="dashboard-links">
        <div className="cards">
          <a href="/courses" className="course-link">
            <h3>Your Courses</h3>
            <p>View and manage your enrolled courses here.</p>
          </a>
        </div>
        <div className="cards">
          <a href="/assignments" className="assignment-link">
            <h3>Upcoming Assignments</h3>
            <p>View and manage your upcoming assignments and due dates.</p>
          </a>
        </div>
        <div className="cards">
          <a href="/grades" className="grades-link">
            <h3>Your Grades</h3>
            <p>View and manage your grades and GPA.</p>
          </a>
        </div>
      </div>
       <div className="student_performance">
        <div className="perfomance">
        <table>
      <thead>
        <tr>
          <th>sn</th>
          <th>course</th>
          <th>courseteacher</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>React</td>
          <td>John Doe</td>
        </tr>
        <tr>
          <td>2</td>
          <td>JavaScript</td>
          <td>Jane Smith</td>
        </tr>
        <tr>
          <td>3</td>
          <td>HTML</td>
          <td>Bob Johnson</td>
        </tr>
      </tbody>
    </table>
    <div>
      {/* <Calendar onChange={onChange} value= {date}/> */}
    </div>
        </div>
        <div className="chart-container">
        <Line options={options} data={data} />
        {/* <Calendar/> */}
      </div>
       </div>

       <div className="dashboard-links">
        <div className="cards">
          <a href="/courses" className="course-link">
            <h3>Your Courses</h3>
            <p>View and manage your enrolled courses here.</p>
          </a>
        </div>
        <div className="cards">
          <a href="/assignments" className="assignment-link">
            <h3>Upcoming Assignments</h3>
            <p>View and manage your upcoming assignments and due dates.</p>
          </a>
        </div>
        <div className="cards">
          <a href="/grades" className="grades-link">
            <h3>Your Grades</h3>
            <p>View and manage your grades and GPA.</p>
          </a>
        </div>
      </div>

    </div>
  );
};

export default StudentDash;
