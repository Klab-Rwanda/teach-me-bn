import React from 'react'
import ME from '../../aseets/niganze.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
import './Contactw.css'
const ContactFor = () => {
  return (
    <div className="ContactForg">
      {/* <Navbar/> */}
    <div className='container'id="contactfor">
               <h1>CONTACT US </h1>
         <div className="contactfor">
          <div className="leftside">
            <img src={ME} alt=" connection failure" />
            <p>"We help dedicated parents to hire Trustworthy and Highly 
              Effective Tutors so their's children marks can 
              imporve significantly within 28 days without giving up their 
              hobbies and play time."</p>
          </div>
             <div className="rightside">
             <h5>Send message to Teachme</h5>
             <form action="">
               <label htmlFor="">Name</label>
               <input type="text"  placeholder='Enter your name '/>
               <label htmlFor="">Phone number</label>
               <input type="text" placeholder='+250 7908 67645'/>
              <label htmlFor="">Email</label>
              <input type="email"  placeholder='abashurgroup@gmail.com' />
              <label htmlFor="">message</label>
              <textarea name="" id="" cols="30" rows="10"placeholder='Enter your message '></textarea>
              <button>Send message</button>
             </form>
          </div>
         </div>
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default ContactFor
