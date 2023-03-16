import React, { useState } from 'react';
import ME from '../../aseets/niganze.png';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';
import './Contactw.css';

const ContactFor = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  form   validation 
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please enter your name and message');
      return;
    }
   
     // check if email is valid
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(formData.email)) {
    alert('Please enter a valid email address.');
    return;
  }
    fetch('https://teachmeapi.onrender.com/api/v1/Createcontact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
          setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            message: '',
          });
          setTimeout(() => {
            setFormSubmitted(false);
          }, 1000); // set timeout to 1 second (1000 milliseconds)


        } else {
          throw new Error('Failed to send message');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="ContactForg">
      {/* <Navbar/> */}
      <div className="container" id="contactfor">
        <h1>CONTACT US </h1>
        <div className="contactfor">
          <div className="leftside">
            <img src={ME} alt="connection failure" />
            <p>
              "Transform your learning experience with one-on-one guidance from
               the best teachers in your field. Contact us now to get started"
            </p>
          </div>
          <div className="rightside">
            {formSubmitted ? (
              <p className="success-message">Thank you for contacting us!</p>
            ) : (
              <>
                <h5>Send message to Teachme</h5>
                <form onSubmit={handleSubmit} className="send">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+250 7908 67645"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="teach@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <button type="submit">Send message</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactFor;
