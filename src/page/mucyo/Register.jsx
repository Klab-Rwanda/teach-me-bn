import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import axios from "axios";

const REGISTER_URL = "https://teachmeapi.onrender.com/api/v1/signup";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Usertype: "",
  
  
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(REGISTER_URL, formData)
      .then((response) => {
        console.log(response.data);
        // Redirect to login page after successful registration
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <Navbar />
      <div className="body">
        <div className="container1">
          <h1 className="h1">Welcome Back!</h1>
          <p className="p">
            “You've been through a lot and we're
            <br />
            just glad you're back with us.”
          </p>
          <Link to="/login">
            <input className="input" type="submit" value="SIGN IN" />
          </Link>
        </div>
        <div className="container2">
          <h1 className="h1">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <select
              name="Usertype"
              placeholder="User Type"
              value={formData.Usertype}
              onChange={handleChange}
            >
              <option value="" className="placeholder">
                User Type
              </option>
              <option value="Parent">Parent</option>
              <option value="Teacher">Teacher</option>
            </select>
            <br />
            <select
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" className="placeholder">
                Gender
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <br />
            <input className="input" type="submit" value="SIGN UP" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

