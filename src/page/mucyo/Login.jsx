import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // import Axios library
import '../../css/login.css';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    // Make a POST request to the API endpoint with user's email and password
    axios.post("https://teachmeapi.onrender.com/api/v1/signin", {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
     console.log(response.data.userSign.Usertype );
     console.log(response.data.userSign.Usertype );
     // Redirect to teacherinfo page if usertype is " Teachers", otherwise redirect to studentinfo page
      if (response.data.userSign.Usertype === "parents"  || response.data.userSign.Usertype === "PARENTS") {
        navigate("/parentdashboard");
      } else {
        navigate("/teacherinfo");
      }
    })
    .catch((error) => {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
      console.log(error);
    });
  };
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
        <form onSubmit={handleSubmit(onSubmit)} className="container2">
          <h1 className="h1">Login Here</h1>
          <input className="input" {...register("email")} type="text" placeholder="Email" />
          <br />
          <input className="input" {...register("password")} type="password" placeholder="Password" />
          <input className="input" type="submit" value="SIGN IN" />
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;

