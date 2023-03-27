import React,{useState} from "react";
import "../../css/teacherinfo.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import axios from 'axios'
import Modal from 'react-modal';
import { useForm } from 'react-hook-form'

const Teacherinfo = () => {
  const [teachers, setTeachers] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
  
    formData.append("fullname", data.fullname);
    formData.append("image", data.image[0]);
    formData.append("email", data.email);
    formData.append("adress", data.adress);
    formData.append("date", data.date);
    formData.append("studyingstyle", data.studyingstyle);
    formData.append("gender", data.gender);
    formData.append("course", data.course);
    formData.append("exprience", data.exprience);
    formData.append("qualification", data.qualification);
    formData.append("description", data.description);


    console.log(formData.get("exprience"));
    console.log(localStorage.getItem("token"));

    try {
      const response = await axios.post("https://teachmeapi.onrender.com/api/v1/Createprofile", formData,{
        headers:{
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      });

      const newTeacher = {
        fullname: data.fullname,
        image: data.image[0].name,
        email: data.email,
        timeAvailable: data.timeAvailable,
        adress: data.adress,
        date: data.date,
        studyingstyle: data.studyingstyle,
        exprience: data.exprience,
        qualification: data.qualification,
        gender: data.gender,
        description: data.description,
        course: data.course,
        _id: response.data._id,
      };
      setTeachers([...teachers, newTeacher]);

    reset();

    setIsModalOpen(true);
    } catch (error) {
      console.error(error.response);
      alert("Error occurred while submitting the form");
    }
  };
  return (
    <div className="main">
        <Navbar/>
    <div className="studentbody">
      <div className="container5">
        <h1>Information details for teacher Profile</h1>
        <form action=""onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="fullname" 
          {...register("fullname")}
        />
        <input type="file" 
        id="file"
        placeholder="image" 
          {...register("image")}
         />
        <br />
        <input type="text" placeholder="Email" 
        
        {...register("email")}
        
        />
        <select name="user" 
            {...register("timeAvailable")}
        >
          <option value="red" className="placeholder">
            Time available
          </option>
          <option value="red">8:00-12:00</option>
          <option value="blue">14:00-16:00</option>
        </select>
        <br />
        <input type="text" placeholder="Exprience" 
        
        {...register("exprience")}
        />
         <input type="text" placeholder="description" 
        
        {...register("description")}
        />
        <br />
        <select name="user"
        
        {...register("studyingstyle")}

        >
          <option value="red" className="placeholder">
            TeachingStyle
          </option>
          <option value="red">Online</option>
          <option value="blue">Face to Face</option>
        </select>
        <input type="textarea" placeholder="Address" 
        {...register("adress")}
        />
        <br />
        <input type="date" placeholder="date" 
        {...register("date")}
        />
        <input type="text" placeholder="qualification" 
        {...register("qualification")}
        />
        <br />
        <select name="user"
          {...register("gender")}
          >
          <option value="red" className="placeholder">
            Gender
          </option>
          <option value="red">Female</option>
          <option value="blue">Male</option>
        </select>
        <select name="user"
         {...register("course")}
         >
          <option value="red" className="placeholder">
            course
          </option>
          <option value="red">Chemistry</option>
          <option value="blue">Biology</option>
          <option value="red">Math</option>
          <option value="blue">Geography</option>
        </select>
        <br />
        <input type="submit" value="SUBMIT" />
         </form>
      </div>
      
    </div>
    <Footer/>
    <Modal isOpen={isModalOpen}>
  <h2>Success!</h2>
  <p>Thank you for uploading your information! You will receive an acceptance message on your email.</p>
  <button onClick={() => setIsModalOpen(false)}>Close</button>
</Modal>
    </div>
  );
};
export default Teacherinfo;
