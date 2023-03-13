import React, { useState } from "react";
import tableData from "./tableData";
import Navbar from './Navbar'
import  "../css/Teachers.css"
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer'
function Teachers() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    // Add code to handle form submission
    // You can use a library like axios to make a post request to your server
  };
  const handlePopup = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="containerfooterf">
      <Navbar/>
      <div className='container'>
        <div className="teachers_container">
          {tableData.map((row) => (
            <div className="teacher_card" key={row.id}>
              <img src={row.imageSrc} alt="  connection failed " />
              <div className="teacher_info">
                <h3>{row.name}</h3>
                <p><a href={row.cvLink}>Download CV</a></p>
                <p><strong>Time Available: </strong>{row.timeAvailable}</p>
                <p><strong>Experience: </strong>{row.experience}</p>
                <p><strong>Level: </strong>{row.level}</p>
                <p><strong>Course: </strong>{row.course}</p>
                <p><strong>Phone Number: </strong>{row.phoneNumber}</p>
                <p><strong>Email: </strong>{row.email}</p>
                <div className='FLX'>
                  <button className="button" onClick={() => { alert(`View more about ${row.name}`)}}>
                    <Link to ="../single" style={{color: 'inherit', textDecoration: 'inherit'}}>View More</Link>
                  </button>
                  <button className="button" onClick={() => { alert(`Book now with ${row.name}`)}}>
                    <Link to ="../bookform" style={{color: 'inherit', textDecoration: 'inherit'}}>Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Teachers
