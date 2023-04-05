import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";
import { AuthContext } from "../context/AppProvider";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

const LoginPortal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }, reset, } = useForm();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://teachmeapi.onrender.com/signin",
        {
          email: data.email,
          password: data.password,
        }
        );
        console.log(response);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // navigate("/studentdashboard");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="main">
      <Navbar />
      <div className="body">
        <div className="container1">
          <h1 className="h1">Welcome Back student!</h1>
          <p className="p">
            “ Hello student You've been through a lot and we're
            <br />
            just glad you're back with us.”
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="container2">
          <h1 className="h1">Login Here</h1>
          <input
            className="input"
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
            onChange={handleEmailChange}
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <input
            className="input"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          {errors.password && <span>This field is required</span>}
          <input className="input" type="submit" value="SIGN IN" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPortal;
