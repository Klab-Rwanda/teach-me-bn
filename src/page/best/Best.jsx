import React from "react";
import ME from '../../aseets/creative.jpg';
import MEE from '../../aseets/mentors3.jpg';
import BB from '../../aseets/certificate.jpg';
import VV from '../../aseets/figama34.jpg';
import MTE from '../../aseets/creative.jpg';
import "./Best.css";
function Best() {
  return (
    <div className="container">
      <div className="upperCards">
        <div className="upperCard">
          <h2>Why we are the best from others  ?</h2>
          <p>Experience the difference with our exceptional teachers who are 
            dedicated to nurturing and inspiring
             every student to reach their full potential </p>
          <button className="startButton">Start now</button>
        </div>
        <div className="upperCard">
          <div className="img">
            <img src={MEE} alt="Me-1" />
          </div>
          <h4>Best Tutors</h4>
          <p>Cultivate your learning journey with the best tutors who are passionate about your success</p>
        </div>
        <div className="upperCard">
          <div className="img">
            <img src={BB} alt="Me-1" />
          </div>
          <h4> Certification</h4>
          <p>Get certified with confidence knowing that our program meets the highest industry 
            standards for quality education </p>
        </div>
      </div>
      <div className="loweCards">
        <div className="lowerCard"></div>
        <div className="lowerCard">
        <div className=".img">
            <img src={VV} alt="Me-1" />
          </div>
          <h4>Best course</h4>
          <p>Cultivate your personalized learning journey with the best tutors who are passionate 
            about your success every step of the way</p>
        </div>
        <div className="lowerCard">
        <div className=".img">
            <img src={ME} alt="Me-1" />
          </div>
          <h4>Creative Skills </h4>
          <p>Unlock your creativity and unleash your potential with our dynamic and engaging 
            courses that foster innovative 
            thinking and practical skill</p>
        </div>
        <div className="lowerCard">
        <div className=".img">
            <img src={MTE} alt="Me-1" />
          </div>
          <h4>Talent Show </h4>
          <p>Unleash your creativity and showcase your talent with our vibrant community of like-minded individuals at our Talent Show</p>
        </div>
      </div>
    </div>
  );
}
export default Best;
