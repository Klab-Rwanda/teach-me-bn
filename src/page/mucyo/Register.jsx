import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
const Register = () => {
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
          <input className="input" type="submit" value="SIGN IN" />
        </div>
        <div className="container2">
          <h1 className="h1">Create Account</h1>
          <input className="input" type="text" placeholder="Name" />
          <br/>
          <input className="input" type="text" placeholder="Email" />
          <br />
          <input className="input" type="password" placeholder="Password" />
          <br />
          <select name="user" placeholder="imsmh jk">
            <option value="UserType" name="UserType" className="placeholder">
              UserType
            </option>
            <option value="red">Parent</option>
            <option value="blue">Teacher</option>
          </select>

          <select name="user" placeholder="imsmh jk">
            <option value="red" className="placeholder" placeholder="gender">
              Gender
            </option>
            <option value="red">Female</option>
            <option value="blue">Male</option>
          </select>

          <Link to="/Studentinfo">
            {" "}
            <input className="input" type="submit" value="SIGN UP" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
