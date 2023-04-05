import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // import Axios library
import "../../css/login.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import { AuthContext } from "../../context/AppProvider";
import { useContext } from "react";
const Login = () => {
  
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { isLoged, setIsLoged } = useContext(AuthContext);

  console.log("heeloo");

  // const onSubmit = (data) => {
  //   axios
  //     .post("https://teachmeapi.onrender.com/api/v1/signin", {
  //       email: data.email,
  //       password: data.password,
  //     })
  //     .then((response) => {
  //       console.log("alain");
  //       console.log(response.data.userSign.Usertype);
  //       console.log(response.data.userSign.Usertype);

  //       const name = response.data.userSign.name;
  //       localStorage.setItem("name", name);
  //       const token = localStorage.getItem("token");

  //       localStorage.setItem("token", response.data.token);
  //       // console.log(name);
  //       console.log(response);
  //       setIsLoged(true);
  //       if (
  //         response.data.userSign.Usertype === "parents" ||
  //         response.data.userSign.Usertype === "PARENTS"
  //       ) {
  //         navigate("/parentdashboard");
  //       } else {
  //         navigate("/teacherinfo");
  //       }
  //     })
  //     .catch((error) => {
  //       if (
  //         error.response &&
  //         error.response.data &&
  //         error.response.data.message
  //       ) {
  //         alert(error.response.data.message);
  //       } else {
  //         console.log(error);
  //       }
  //       console.log(error);
  //     });
  // };
const onSubmit = (data) => {
  axios
    .post("https://teachmeapi.onrender.com/api/v1/signin", {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      const userType = response.data.userSign.Usertype;
      const name = response.data.userSign.name;
      localStorage.setItem("name", name);
      localStorage.setItem("token", response.data.token);
      setIsLoged(true);

      if (userType === "parents" || userType === "PARENTS") {
        navigate("/parentdashboard");
      } else if (userType === "teacher" || userType === "TEACHER") {
        navigate("/teacherinfo");
      } else {
        navigate("/admindashboard");
      }
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
    });
};


  return (
    <div className="main">
      <Navbar />
      <div className="body">
        <div className="container1">
          <h1 className="h1">Welcome Back !</h1>
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
          <input
            className="input"
            {...register("email")}
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            className="input"
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <input className="input" type="submit" value="SIGN IN" />
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
