import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/SingleTeachersProfile.css';
import { FcAlarmClock } from 'react-icons/fc';
import { FcSms } from 'react-icons/fc';
import Footer from './Footer/Footer';
import Navbar from './Navbar';

function SingleTeachersProfile() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://teachmeapi.onrender.com/api/v1/booked/${id}`);
        console.log(response.data.post);
        setData(response.data.post);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [id]);


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
      <Navbar/>
      </div>
    <div className="singleteachersProfile">
       <div className="upper">
        <div className="upperphoto"> 
        <img src={data?.image} alt="connection failed please" />
        </div>
       <div className="upperside">
        <div className="upperside_header">
            <p><FcAlarmClock/>100 hours</p>
            <p><FcSms/>4.9(80 views)</p>
         
         
            <button onClick={handleBookNow}>BOOK NOW</button>
            <BookingModal showModal={showModal} closeModal={handleCloseModal} />
          
           </div>
           <h3>{data?.fullname}</h3>
            <p>{data?.description}</p>
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
   
       <div className="lowerspace">
        <div className="details">
        <h5> Personal profile </h5>
            <li>Fullname : {data?.fullname} </li>                    
            <li>Email : {data?.email} </li>
            <li>Gender:{data?.gender}  </li>
            <li>exprience:{data?.exprience} </li>
            <li>Method of Teaching : {data?.studyingstyle} </li>
            <li>Age:23 years old   </li>
            <li>Insurance card:rssb  </li>
            <li>adress: {data?.adress} </li>
            <li>Bank A/c:0000 0000 000 786</li>
            <li>Time available: {data?.timeavailable}  </li>
            <li>Courses: {data?.course}</li> 
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
    </div>
    <Footer/>
    </div>
  )
}
export default SingleTeachersProfile