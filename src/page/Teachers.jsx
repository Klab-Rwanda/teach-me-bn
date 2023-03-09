import React, { useState } from "react";
import tableData from "./tableData";
import Navbar from './Navbar'
import  "../css/Teachers.css"
import { Link } from 'react-router-dom';
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
    <div className='container'>
      <Navbar />
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
                <button className="button" onClick={ handlePopup}>Book now</button>
               {showForm && (
               <div className="popup-form-container">
               <form className="popup-form" onSubmit={handleSubmit}>
            <h2> Book the Teachers now</h2>
            <div className="form-group">
              <label htmlFor="parent-name">Parent Name:</label>
              <input type="text" id="parent-name" name="parent-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
           )}
                 
                 {/* <button className="button" onClick={() => { alert(`Book now with ${row.name}`)}}><Link to ="../bookform"  style={{color: 'inherit', textDecoration: 'inherit'}}>Book Now</Link></button> */}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teachers
