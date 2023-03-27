import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdLiveTv } from 'react-icons/md';
import { TfiNotepad } from 'react-icons/tfi';
import { MdAssignmentAdd } from 'react-icons/md';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { ImProfile } from 'react-icons/im';
import { GrResources } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { GrUserManager } from 'react-icons/gr';

import LOGO from '../../../../src/aseets/logoproject.png';
import '../../../css/shared.css';

const Dashboard = () => {
 
 

 

  return (
    <div className="dashboard">
   
      <nav className="navbar">
        <div className="navbar-left">
        <div className="navbar-center">
         <img src={LOGO} alt="connection  problem " />
         <span className='teachme'>TEACH ME</span>
        </div>
          {/* <button className="menu-btn" onClick={handleSidebarToggle}>
            {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button> */}
        </div>
        <div className="seasrching">
        <input type="text" id="search" name="search" placeholder="Search..."/>
        {/* <button className='search-button' type="submit">Search</button> */}
        </div>
       
        <div className="navbar-right">
          <button className="icon-btn">
            <FiBell />
          </button>
          <button className="icon-btn">
            <FaUserCircle />
          </button>
          <div className="dropdown">
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
            <Link to="/"><AiFillHome className='dashboard-icon'/>Home</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/zoom"><MdLiveTv className='dashboard-icon'/>live zooming</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/course"><TfiNotepad className='dashboard-icon'/>Course</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/assignment"><MdAssignmentAdd className='dashboard-icon'/>Assignment</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/notebook"><GiSatelliteCommunication className='dashboard-icon'/>Quiz</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/allAssignmentsPage"><GiSatelliteCommunication className='dashboard-icon'/>AllAssignmentsPage</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/quizlist"><GiSatelliteCommunication className='dashboard-icon'/>allquiz</Link>
          </li>
          <li className="sidebar-item">
            <Link to=""><CgProfile className='dashboard-icon'/>my profile</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/marks"><GrUserManager className='dashboard-icon'/>Marks</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/TeacherDashboard/mystudent"><ImProfile className='dashboard-icon'/>My student</Link>
          </li>
          <li className='sidebar_item'>
          <Link to=""><RiLogoutCircleFill className='dashboard-icon'/>Logout</Link>
          </li>
        </ul>
      </aside>
      <div className='datas'>
        <Outlet/>
      </div>
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
