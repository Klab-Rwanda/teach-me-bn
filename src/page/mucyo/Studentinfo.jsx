import React, { useState, useEffect } from "react";
// import myImage from "../../aseets/image1.png";
import "../../css/studentinfo.css";
import axios from "axios";
const initialFormState = {
  fullName: "",
  email: "",
  studyingStyle: "",
  password: "",
  dateOfbirth: "",
  gender: "",
  course: "",
  level: "",
};
const Studentinfo = () => {
  const [data, setData] = useState([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://teachmeapi.onrender.com/signup",
        data,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
        
      console.log('success')
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000); // remove the success message after 3 seconds
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // Display the error message received from the API
        alert(error.response.data.error);
      } else {
        // Display a generic error message
        alert("Submission failed. Please try again later.");
      }
      setSubmitError(true);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="main">
      <div className="body1">
        {/* <div className="container3"> */}
        {/* <img src={myImage} alt="connection failed" /> */}
        {/* </div> */}
        <div className="container4">
          <h1>Student Registration Form</h1>
          {submitSuccess && (
            <div className="success-message">Form submitted successfully!</div>
          )}
          {/* {submitError && (
            <div className="error-message">Error submitting form. Please try again.</div>
          )}   */}
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="fullName"
              name="studentfullName"
              onChange={handleChange}
            />
            <input
              className="input"
              type="email"
              placeholder="email"
              name="studentemail"
              onChange={handleChange}
            />
            <br />
            <input
              className="input"
              type="text"
              placeholder="StudyingStyle"
              name="studyingStyle"
              onChange={handleChange}
            />
            <br />

            <input
              className="input"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <input
              className="input"
              type="date"
              placeholder="Age"
              name="dateOfbirth"
              onChange={handleChange}
            />
            <br />
            <select name="gender" onChange={handleChange}>
              <option value="" className="placeholder">
                Gender
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <select name="course" onChange={handleChange}>
              <option value="" className="placeholder">
                Course
              </option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Math">Math</option>
              <option value="Geography">Geography</option>
            </select>

            <br />

            <select name="level" onChange={handleChange}>
              <option value="" className="placeholder">
                Levels
              </option>
              <option value="Level1">Level1</option>
              <option value="Level2">Level2</option>
              <option value="Level3">Level3</option>
              <option value="Level4">Level4</option>
            </select>
            <select name="Usertype" onChange={handleChange}>
              <option value="student" className="placeholder">
                student
              </option>
            </select>

            <br />
            <input className="input" type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Studentinfo;
