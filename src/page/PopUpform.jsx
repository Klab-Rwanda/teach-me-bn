import React, { useState } from "react";
import "../css/PopUpform.css";
function PopupForm() {
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
    </div>
  );
}

export default PopupForm;
