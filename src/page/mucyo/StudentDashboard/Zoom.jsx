import React from 'react'
import '../../../css2/zoom.css';
import { SiShowtime } from 'react-icons/si';
import { RxDot } from 'react-icons/rx';
const Zoom = () => {
  return (
    <div className="zoom">
    <div className="zoom_container">
      <h2>Update Zoom Token and Email</h2>
    </div>
    <div className="zoom_reflect">
      <div className="leftr">
        <form>
          <label htmlFor="zooom-email">Zoom email</label>
          <input className='zoom2' type="zoom" placeholder="Input zoom email account" />
          <label className='zoom2' htmlFor="zoom jwt token">Zoom taken</label>
          <input  className='zoom2' type="zoom" placeholder="Enter JWT token" />
          <button>Save</button>
        </form>
      </div>
      <div className="righte">
        <h2><SiShowtime/>How to get JWT Email and Token</h2>
        <div className="instruction">
          <ul>
            <p><RxDot/>First sign up and sign in on: Zoom Marketplace portal</p>
            <p><RxDot/>Click on top right side menu and click on Build App: Create app</p>
            <p><RxDot/>Choose Jwp App and continue</p>
            <p><RxDot/>After filling details click on credtional tab and bottom you will see JWT Token
                change token expriry according to your setting 
            </p>
            <p> <RxDot/>Paste your zoom account account id and JWT token here and create, edit meetings here</p>
          </ul>
        </div>
      </div>
    </div>
    <div className="additional-content">
        <h2>Additional Content</h2>
        <p>Once you've scheduled the meeting, you can invite people to join by sharing the meeting link or ID. You can also invite people directly from the Zoom app by entering their email addressesan, 
        During the meeting, you can use various features like screen sharing, recording, chat.......
        </p>
      </div>
  </div>
  
  )
}

export default Zoom
