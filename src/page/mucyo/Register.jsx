import React from "react";
import { useNavigate,Link} from 'react-router-dom'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
// import  {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
// import * as yup  from "yup"
import axios from "axios";

const REGISTER_URL =  "https://teachmeapi.onrender.com/api/v1/signup";

// const schema = yup
//   .object()
//   .shape({
//     username: yup.string().required(),
//     email: yup.string().email().required(),
//     password:yup.string().min(6).max(12).required(),
//     // usertype:yup.string().required(),
//     // gender:yup.string().required()
//   })

const Register = () => {
 
  const  {register ,handleSubmit ,formState :{errors}} =  useForm({
    // resolver:yupResolver(schema)
  })
 
  const navigate  = useNavigate();
  const   onSubmit  = async  (data) =>{
      console.log(data);

      try {
        const  response  = await  axios.post(REGISTER_URL,data)
        console.log(response);
        navigate("/login")

      } catch (error) {
        console.log(data);
        console.log(error.response);
      }
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input"
              type="text"
              placeholder="Name"
             autoComplete="off"
             {...register("name")}
            />
            <br />
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
              {...register("email")}
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              {...register("password")}
            />
            <br />
            <select 
              name="usertype"
              placeholder="User Type"

            {...register("Usertype")}

            >
              <option value="" className="placeholder">
                User Type
              </option>
              <option value="parents">parents</option>
              <option value="teacher">teacher</option>
            </select>
            <br />
           {/* <select
              name="gender"
              placeholder="Gender"
            {...register("gender")}
              
              >
              <option value="" className="placeholder">
                Gender
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
         
            </select> */}
            <br />
            <input className="input" type="submit" value="SIGN IN" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

