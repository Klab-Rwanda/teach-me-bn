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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>CV</th>
              <th>Time Available</th>
              <th>Experience</th>
              <th>Level</th>
              <th>Course</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td><img src={row.imageSrc} alt="Image" /></td>
                <td>{row.name}</td>
                <td><a href={row.cvLink}>Download</a></td>
                <td>{row.timeAvailable}</td>
                <td>{row.experience}</td>
                <td>{row.level}</td>
                <td>{row.course}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.email}</td>
                <td className='FLX'>
                <button className="button" onClick={() => { alert(`View more about ${row.name}`)}}><Link to ="../single" style={{color: 'inherit', textDecoration: 'inherit'}}>View More</Link></button>
                 <button className="button" onClick={() => { alert(`Book now with ${row.name}`)}}><Link to ="../bookform"  style={{color: 'inherit', textDecoration: 'inherit'}}>Book Now</Link></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Teachers
