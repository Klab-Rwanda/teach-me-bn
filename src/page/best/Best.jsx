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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
          <button className="startButton">Start now</button>
        </div>
        <div className="upperCard">
          <div className="img">
            <img src={MEE} alt="Me-1" />
          </div>
          <h1>Best Tutors</h1>
          <p>Lorem Ipsum is simply dummy te of the printing and typesetting industry. Lorem Ipsum has been   the 1500s, when</p>
        </div>
        <div className="upperCard">
          <div className="img">
            <img src={BB} alt="Me-1" />
          </div>
          <h1> Certification</h1>
          <p>Lorem Ipsum is simply dummy te of the printing and typesetting industry. Lorem Ipsum has been   the 1500s, when</p>
        </div>
      </div>
      <div className="loweCards">
        <div className="lowerCard"></div>
        <div className="lowerCard">
        <div className="img">
            <img src={VV} alt="Me-1" />
          </div>
          <h1>Best course</h1>
          <p>Lorem Ipsum is simply dummy te of the printing and typesetting industry. Lorem Ipsum has been   the 1500s, when</p>
        </div>
        <div className="lowerCard">
        <div className="img">
            <img src={ME} alt="Me-1" />
          </div>
          <h1>Creative Skills </h1>
          <p>Lorem Ipsum is simply dummy te of the printing and typesetting industry. Lorem Ipsum has been   the 1500s, when</p>
        </div>
        <div className="lowerCard">
        <div className="img">
            <img src={MTE} alt="Me-1" />
          </div>
          <h1>Talent Show </h1>
          <p>Lorem Ipsum is simply dummy te of the printing and typesetting industry. Lorem Ipsum has been   the 1500s, when</p>
        </div>
      </div>
    </div>
  );
}
export default Best;
