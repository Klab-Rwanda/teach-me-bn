import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/teacherdash.css';
const ParentDashHome = () => {
  return (
    <div className="parent-dashboard-home">
      <h1 className="parent-dashboard-home__title">Welcome to ParentDash</h1>
      <p className="parent-dashboard-home__subtitle">Use the menu to navigate to the various sections of the dashboard.</p>
      <div className="parent-dashboard-home__cta">
        <Link to="/dashboard/students" className="parent-dashboard-home__cta-button">View Students</Link>
        <Link to="/dashboard/payments" className="parent-dashboard-home__cta-button">Make a Payment</Link>
      </div>

      {/* Additional content */}
      <div className="parent-dashboard-home__content">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Parent-Teacher Conferences - April 15th and 16th</li>
          <li>Spring Break - April 19th to 23rd</li>
          <li>Final Exams - May 17th to 21st</li>
        </ul>

        <h2>Student Progress</h2>
        <p>Here's how your child is doing in school:</p>
        <ul>
          <li>Math - A-</li>
          <li>English - B+</li>
          <li>Science - B</li>
          <li>History - A</li>
          <li>Attendance - 95%</li>
        </ul>

        <h2>News and Updates</h2>
        <p>Here are some recent news and updates:</p>
        <ul>
          <li>New School Policies: Please review the new policies that have been implemented this semester.</li>
          <li>Spring Concert: Our annual spring concert will be held on May 7th.</li>
        </ul>

        <h2>Customize Your Dashboard</h2>
        <p>Would you like to customize your dashboard? Click <Link to="/dashboard/settings">here</Link> to make changes.</p>

        <h2>Resources for Parents</h2>
        <p>Here are some helpful resources:</p>
        <ul>
          <li>Parenting Tips: <a href="https://www.parents.com/parenting/">https://www.parents.com/parenting/</a></li>
          <li>Homework Help: <a href="https://www.khanacademy.org/">https://www.khanacademy.org/</a></li>
          <li>Contact Us: If you have any questions or concerns, please <Link to="/dashboard/contact">contact us</Link>.</li>
        </ul>
      </div>
    </div>
  );
};

export default ParentDashHome;


