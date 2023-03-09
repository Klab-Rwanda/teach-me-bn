import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import BB from "../aseets/willian.jpg"
import '../css/SingleTeachersProfile.css'
import { FcAlarmClock } from 'react-icons/fc';
import { FcSms } from 'react-icons/fc';
function SingleTeachersProfile() {
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission
    // You can use a library like axios to make a post request to your server
    setSuccessMessage(true);
  };

  const handlePopup = () => {
    setShowForm(!showForm);
  };

  const handleCancel = () => {
    setShowForm(false);
    setSuccessMessage(false);
  };
  return (
    <div>
      <div className="menu">
        <div className="logo">
          Teach<span>me</span>
        </div>
        <div className="link">
          <Link to="/">Home</Link>
          <a href="#about">Aboutus</a>
          <a href="#contactfor">Contact</a>
          <a href="#service ">Service </a>
          <a href="#blog">Blog </a>
          <Link to="/teachers">Teachers</Link>
          <button>
          <Link to="/#">Sign in</Link>
          <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </div>
    <div className="singleteachersProfile">
       <div className="upper">
        <div className="upperphoto"> 
        <img src= {BB} alt="connection failed please"/>
        </div>
       <div className="upperside">
        <div className="upperside_header">
            <p><FcAlarmClock/>100 hours</p>
            <p><FcSms/>4.9(80 views)</p>
            <button className="button" onClick={handlePopup}>Book now</button>
      {showForm && (
        <div className="popup-form-container">
          <form className="popup-form" onSubmit={handleSubmit}>
            <h2>Book the Teachers now</h2>
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
              <div className="for">
                 <button type="submit">Send</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {successMessage && (
        <div className="success-message">
          <p>Success! Your booking has been made.</p>
          <button className="button" onClick={() => setSuccessMessage(false)}>Close</button>
        </div>
      )}
            {/* <button>BOOK NOW </button> */}
           </div>
           <h3>History mentor/ sciences in advanced level </h3>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply 
              dummy text of the
             printing and typesetting industry. Lorem Ipsum has been the industry's</p>
             <div className="stillupper">
                <div className="stillupperexprience"> 
                <p>455+</p>
                <p>children mentored</p>
                </div>
                <div className="stillupperexprience"> 
                <p>45+</p>
                <p>warkshop attended </p>
                </div>
                <div className="stillupperexprience"> 
                <p>8+</p>
                <p>coaching certificate</p>
                </div>
             <button>Donload cv</button> 
             </div>
       </div>
       </div>
       {/*  */}
       <div className="lowerspace">
        <div className="details">
        <h5>Personal profile  </h5>
            <li>Name :Olivia Mukamana </li>
            <li>Gender:male  </li>
            <li>Method of Teaching : online &face face  </li>
            <li>Age:23 years old   </li>
            <li>Insurance card:rssb  </li>
            <li>Address:  kgali / rwanda </li>
            <li>Bank A/c:0000 0000 000 786</li>
            <li>Time available: full time  </li>
            <li>Courses: Biology and chemistry</li> 
            <li>Matial stutus : Single</li> 
        </div>
        <div className="details">
        <h5>Professional skills </h5>
            <li> English lecture </li>
            <li>Gender:male  </li>
            <li>student develooment </li>
            <li>classroom mamagement </li>
            <li>extraculliurm activities </li>
            <li>lesson lilan develolilment  </li>
            <li>grammer and  develliment </li>
        </div>
        <div className="details">
            <h5>Academics background</h5>
            <p> University of Rwanda </p>
            <ul>
              <li>MA in education and development</li>
              <li>Good hehavial markspoint</li>
              <li>Graduate  with first honors  </li>
            </ul>
            <p> RUBENGERA College </p>
             <ul>
              <li>human science teachers </li>
              <li>award in research in science </li>
              <li>human science teachers </li>
              <li>human science teachers </li>
              <li>human science teachers </li>
             </ul>
        </div>
       </div>
       {/*  */}
    </div>
    </div>
  )
}
export default SingleTeachersProfile