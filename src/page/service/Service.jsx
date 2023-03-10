import React from "react";
import "../../css/Service.css";
import data from './data.js';
import courseData from './courseData';


import { MdPeopleAlt } from 'react-icons/md';
import { IoHeartCircleOutline } from 'react-icons/io5';
import Footer from "../Footer/Footer";
function Service() {
  return (
    <div className="container" id="service">
      <div className="container_service">
        {/* one pae */}
        <h4>Browse course by categories</h4>
        <h5>
        "Unlock Your Child's Potential with Our Fun and Engaging Courses!"{" "}
        </h5>
        <div className="container_service_smallcard">
       
          {data.map((service, index) => (
            <div className="cardc" key={index}>
              <img src={service.image} alt="connection failed" />
              <p>{service.category}</p>
              <h5>{service.title}</h5>
            </div>
          ))}
          
        </div>
        {/* final page  */}



        {/* another page  */}
        <h3>Our Most Popular course </h3>
        <div className="course_cards">
      {courseData.map(course => (
        <div className="course_cards_shortscard" key={course.id}>
          <img  className="image"  src={course.image} alt={course.title} />
          <p>{course.title}</p>
          <div className="courseid">
            <p>{course.price}</p>
            <div className="iconfy">
            <IoHeartCircleOutline />
            <MdPeopleAlt  />
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* final page */}
      </div>
      {/* <Footer/> */}
    </div>
  );
}
export default Service;
