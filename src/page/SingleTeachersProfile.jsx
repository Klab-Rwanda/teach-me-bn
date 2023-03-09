import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import BB from "../aseets/willian.jpg"
import '../css/SingleTeachersProfile.css'
import { FcAlarmClock } from 'react-icons/fc';
import { FcSms } from 'react-icons/fc';
import Footer from './Footer/Footer'
function SingleTeachersProfile() {
  function BookingModal({ showModal, closeModal }) {
    return (
      <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p>Hello! You have successfully made a booking.</p>
        </div>
      </div>
    );
  }
  const [showModal, setShowModal] = useState(false);

  function handleBookNow() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }
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
            {/*   my pop   */}
         
            <button onClick={handleBookNow}>BOOK NOW</button>
            <BookingModal showModal={showModal} closeModal={handleCloseModal} />
            {/*  */}
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
    <Footer/>
    </div>
  )
}
export default SingleTeachersProfile