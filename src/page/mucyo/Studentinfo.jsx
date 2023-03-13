import React from "react";
import myImage from "../../aseets/image1.png";
import "../../css/studentinfo.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
const Studentinfo = () => {
  return (
    <div className="main">
      <Navbar/>
    <div className="body">
      <div className="container3">
        <img src={myImage} alt="connection failed" />
      </div>
      <div className="container4">
        <h1>Student Registration Form</h1>
        <input className="input" type="text" placeholder="FirstName" />
        <input  className="input" type="text" placeholder="LastName" />
        <br />
        <input className="input" type="text" placeholder="FatherName" />
        <input  className="input"  type="text" placeholder="MotherName" />
        <br />
        <input  className="input" type="text" placeholder="State" />
        <input className="input" type="file" placeholder="Profile" />
        <br />
        <input className="input" type="password" placeholder="City" />
        <input className="input" type="date" placeholder="Age" />
        <br />
        <select name="user">
          <option value="red" className="placeholder">
            Gender
          </option>
          <option value="red">Female</option>
          <option value="blue">Male</option>
        </select>
        <select name="user">
          <option value="red" className="placeholder">
            Course
          </option>
          <option value="red">Chemistry</option>
          <option value="blue">Biology</option>
          <option value="red">Math</option>
          <option value="blue">Geography</option>
        </select>
        <br />
        <select name="user">
          <option value="red" className="placeholder">
            Level
          </option>
          <option value="red">Level1</option>
          <option value="blue">Level2</option>
          <option value="red">Level3</option>
          <option value="blue">Level4</option>
        </select>
        <input className="input" type="textarea" placeholder="MoreInformation" />
        <br />
        <input className="input" type="submit" value="SUBMIT" />
      </div>
    </div>
  <Footer/>
    </div>
  );
};

export default Studentinfo;
