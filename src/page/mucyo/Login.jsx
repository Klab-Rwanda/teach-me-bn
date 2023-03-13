import React from "react";
import { Link } from "react-router-dom";
import '../../css/login.css';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
const Login = () => {
  return (
    <div className="main">
      <Navbar/>
    <div className="body">
      <div className="container1">
        <h1 className="h1">Welcome Back!</h1>
        <p className="p">
          “You've been through a lot and we're
          <br />
          just glad you're back with us.”
        </p>
        <Link to="/regiter">
          <input className="input" type="submit" value="SIGN UP" />
        </Link>
      </div>
      <div className="container2">
        <h1 className="h1">Login Here</h1>
        <input className="input" type="text" placeholder="Email" />
        <br />
        <input className="input" type="password" placeholder="Password" />
        <input className="input" type="submit" value="SIGN IN" />
      </div>
    </div>
    <Footer/>
    </div>
  );
};
export default Login;
