import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { MdPayments } from 'react-icons/md';
import { MdReportProblem } from 'react-icons/md';
import { MdRequestQuote } from 'react-icons/md';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { MdAccountBalance } from 'react-icons/md';
import { GrResources } from 'react-icons/gr';
import { ImProfile } from 'react-icons/im';
import { GrUserManager } from 'react-icons/gr';
import { GiProgression } from 'react-icons/gi';
import LOGO from '../../../../src/aseets/logoproject.png';
import '../../../css/shared.css';
import SidebarHamb from './SidebarHamb';

const Dashboard = () => {
  // const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    // setSidebarOpen(!sidebarOpen);
  };

  const styleone={
    // backgroundColor: 'green',
    // position:'fixed',
    // left:0,
    // color: 'red',
  }
  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar"  style={styleone}>
        <div className="navbar-left">
          <SidebarHamb/>
        <div className="navbar-center">
          <img src={LOGO} alt="connection problem " />
          <span className='teachme'>TEACH ME</span>
        </div>
          {/* <button className="menu-btn" onClick={handleSidebarToggle}>
            {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button> */}
        </div>
        <div className="seasrching">
        {/* <input type="text" id="search" name="search" placeholder="Search..."/> */}
        {/* <button className='search-button' type="submit">Search</button> */}
        </div>
       
        <div className="navbar-right">
          <button className="icon-btn">
            <FiBell />
          </button>
          <button className="icon-btn">
            <FaUserCircle />
          </button>
          <div className="  ">
            <button className="dropdown-btn">
              Settings <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/">Account</Link>
              <Link to="/">Security</Link>
              <Link to="/">Notifications</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">
              Help <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/">FAQs</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {/* <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}> */}
      <aside className='sidebarOpen sidebar'>
        <div className="sidebar-header">
          <h3>Dashboard</h3>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link to="/parentdashboard/report"><MdReportProblem className='dashboard-icon'/>Schools Report</Link>
          </li>
          
          <li className="sidebar-item">
            <Link to="parentdashboard/account"><MdAccountBalance className='dashboard-icon'/>Create account</Link>
          </li>
          <li className="sidebar-item">
            <Link to="parentdashboard/manage"><GrUserManager className='dashboard-icon'/>Manage account</Link>
          </li>
          <li className="sidebar-item">
            <Link to="parentdashboard/request"><ImProfile className='dashboard-icon'/>Teacher Profiles</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/parentdashboard/communication"><GiSatelliteCommunication className='dashboard-icon'/>Communication</Link>
          </li>
          <li className='sidebar_item'>
          <Link to="/parentdashboard/communication"><RiLogoutCircleFill className='dashboard-icon'/>Logout</Link>
          </li>
        </ul>
      </aside>
      <div className='datas'>
        <Outlet/>
      </div>
      {/* Main Content */}
      {/* <main className="main-content">
        <div className="cards">
          <div className="card">
            <h2>Communicate with Teacher</h2>
            <p>Send a message to your child's teacher.</p>
            <Link to="/communication">Message Teacher</Link>
          </div>
          <div className="card">
            <h2>Payment History</h2>
            <p>View your payment history for this term.</p>
            <Link to="/payment">View Payment History</Link>
          </div>
          <div className="card">
            <h2>School Report</h2>
            <p>View your child's school report for this term.</p>
            <Link to="/schools-report">View School Report</Link>
          </div> 
   </div>
   </main> */}
   
   </div>
  );
};

export default Dashboard;












// import React from 'react';
// import {Link, Outlet}  from "react-router-dom"
// import { AiFillSetting } from "react-icons/ai";
// import { MdSupervisorAccount } from "react-icons/md";
// import { RiLogoutCircleFill } from "react-icons/ri";
// import { TbGitPullRequest } from "react-icons/tb";
// import { TbReportAnalytics } from "react-icons/tb";

// import { BsFillBookmarkStarFill } from "react-icons/bs";
// import { MdAssignmentAdd } from "react-icons/md";

// const Shared = () => {
//   return (
//     <div className="body1">
//     <div className="dash_container">
//       <div className="dash_container1">
//         <Link to="/parentdashboard/setting">
//           <AiFillSetting className="react_icons" />
//           Account Information
//         </Link>

//         <Link to="">
//           <MdSupervisorAccount className="react_icons" />
//           Available Courses
//         </Link>
//         <Link to="">
//           <MdAssignmentAdd className="react_icons" />
//           Create student account
//         </Link>
//         <Link to="">
//           <BsFillBookmarkStarFill className="react_icons" />
//           Teacher Profiles
//         </Link>
//         <Link to="">
//           <TbReportAnalytics className="react_icons" />
//           Course Progress
//         </Link>
//         <Link to="/dashboard/request">
//           <TbGitPullRequest className="react_icons" />
//           Schedule
//         </Link>
//         <Link to="/dashboard/request">
//           <TbGitPullRequest className="react_icons" />
//           Communication
//         </Link>
//         <Link to="/dashboard/request">
//           <TbGitPullRequest className="react_icons" />
//           Payment
//         </Link>
//         <Link to="/dashboard/request">
//           <TbGitPullRequest className="react_icons" />
//           Support
//         </Link>
//         <Link to="/logout">
//           <RiLogoutCircleFill className="react_icons" />
//           Logout
//         </Link>
//       </div>
//      <Outlet/>
//     </div>
//   </div>
//   )
// }

// export default Shared
