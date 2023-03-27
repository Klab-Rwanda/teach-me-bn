import React from "react";
// import "../../../css2/setting.css";

const Settinge = () => {
  return (
    <div className="setting">
      <div className="settings-container">
        <h2>My Settings</h2>
        <div className="setting-options">
          <div className="setting-option">
            <label htmlFor="notifications">Notifications</label>
            <div className="toggle">
              <input type="checkbox" id="notifications" />
              <label htmlFor="notifications" />
            </div>
          </div>
          <div className="setting-option">
            <label htmlFor="language">Language</label>
            <select id="language">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="de">kinyarwanda</option>
              <option value="de">chiense </option>
            </select>
          </div>
          <div className="setting-option">
            <label htmlFor="theme">Theme</label>
            <select id="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="setting-option">
            <label htmlFor="timezone">Timezone</label>
            <select id="timezone">
              <option value="pst">Pacific Time</option>
              <option value="est">Eastern Time</option>
              <option value="gmt">Greenwich Mean Time</option>
              <option value="ist">Indian Standard Time</option>
            </select>
          </div>
        </div>
      </div>
      <div className="student_settings">
        <div className="flowerr_settings">
          <h2> General setting </h2>
          <label htmlFor="kigali _course">Adress</label>
          <select id="timezone">
            <option value="pst">kigali-rwanda</option>
            <option value="est">Eastern province</option>
            <option value="gmt">Greenwich Mean Time</option>
            <option value="ist">Indian Standard Time</option>
          </select>
          <h2>My course</h2>
          <label htmlFor="">Amount to features a courses</label>
          <input type="number" placeholder="7 courses" />
          <ul>
            <li>mathematics and phyiscs</li>
            <li>biology</li>
          </ul>
          <div className="over">
            <button className="blue-btn">ALL course</button>
            <button className="green-btn">Add course</button>
            <button className="red-btn">Stop course</button>
          </div>
        </div>
        <div className="flowerr_settings">
          <h2> Account setting </h2>
          <p>change password</p>
          <p> update the profile picture </p>
          <label htmlFor="kigali _course">Adress</label>

          <h2>ASSIGNMENT & QUIZ</h2>
          <ul>
            <li>mathematics assignment 3+</li>
            <li>biology quiz</li>
          </ul>
          <div className="over">
  <button className="blue-btn">ALL Pending</button>
  <button className="green-btn">Out date</button>
  <button className="red-btn">Declared</button>
</div>
        </div>
        <div className="resource">
          <h2>Resources setting </h2>
          <h3> Enable Zoom Portal </h3>
          <button> Enable </button>
          <small> (enable live zoomig meeting on this portal)</small>
          <h2> All books  </h2>
          <h3>  Get now  </h3>
          <button> Searching  </button>
          <small> (searching all summary course prepared by instructor)</small>
        </div>

      </div>
      <button className="blue-btn"> Save change</button>
    </div>
  );
};

export default Settinge;
