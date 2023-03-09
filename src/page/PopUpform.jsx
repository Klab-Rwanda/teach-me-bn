import React, { useState } from "react";
import "../css/PopUpform.css";
function PopupForm() {
const [showForm, setShowForm] = useState(false);
const handleSubmit = (e) => {
    e.preventDefault();

//   my  stufff  will  be here
    // Add code to handle form submission
    // You can use a library like axios to make a post request to your server
  };
  const handlePopup = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <button onClick={handlePopup}>Open Form</button>
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
    </div>
  );
}

export default PopupForm;
