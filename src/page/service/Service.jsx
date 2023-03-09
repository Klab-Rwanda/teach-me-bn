import React from "react";
import "../../css/Service.css";
import data from './data.js';
import courseData from './courseData';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import KK from '../../aseets/scienceforkids.jpg'
import { BsPersonCircle } from 'react-icons/bs';
import { IoHeartCircleOutline } from 'react-icons/io5';
function Service() {
  return (
    <div className="container" id="service">
      <div className="container_service">
        <h4>Browse course by categories</h4>
        <h5>
        "Unlock Your Child's Potential with Our Fun and Engaging Courses!"{" "}
        </h5>
        <div className="container_service_smallcard">
        <BsFillPlayCircleFill className="play-icon" />
          {data.map((service, index) => (
            <div className="cardc" key={index}>
              <img src={service.image} alt="connection failed" />
              <p>{service.category}</p>
              <h5>{service.title}</h5>
            </div>
          ))}
           <BsFillPlayCircleFill className="play-icon" />
        </div>
        <h3>Our Most Popular course </h3>
        <div className="course_cards">
      {courseData.map(course => (
        <div className="course_cards_shortscard" key={course.id}>
          <img  className="image"  src={course.image} alt={course.title} />
          <p>{course.title}</p>
          <div className="courseid">
            <p>{course.price}</p>
            <div className="iconfy">
            <IoHeartCircleOutline size={32} color="#525FE1" />
            <BsPersonCircle size={32} color="#525FE1" />
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}
export default Service;
