import React from 'react';
import '../../../css2/setting.css';

const Setting = () => {
  return (
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
  );
};

export default Setting;

