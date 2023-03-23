import React, { useState } from 'react';
import '../../../css2/studentdash.css';
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
        <div className="dear"><p>Dear <span>student</span></p></div>
        <div className="upcaming">
          <button className='course' onClick={handleOpenModal}>Request Another Course</button>
        </div>
      </div>
      {showModal && (
        <div className="modal" style={{display: !showModal? "none":"flex"}}>
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

              <button type="submit">Submit</button>
              <button type="button" onClick={handleCloseModal}>
                Cancel
              </button>
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
        <div  className='cards'>
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
      <div className="course_card">
             <div className="history">
              <p>history+</p>
              <p>90+</p>
             </div>
             <div className="history">
              <p>biology+</p>
              <p>90+</p>
             </div>
             <div className="history">
              <p>geography+</p>
              <p>90+</p>
             </div>
             <div className="history">
              <p>mathematics+</p>
              <p>90+</p>
             </div>
        </div>

    </div>
    
  );
};

export default StudentDash;

