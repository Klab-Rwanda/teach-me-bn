import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { MdPayments } from 'react-icons/md';
import { MdReportProblem } from 'react-icons/md';
import { MdRequestQuote } from 'react-icons/md';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { MdAccountBalance } from 'react-icons/md';
import { MdPlayLesson } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { GrUserManager } from 'react-icons/gr';
import { AiFillSchedule } from 'react-icons/ai';
import LOGO from '../../../../src/aseets/logoproject.png';
import '../../../css/shared.css';

const Dashboard = () => {
  // const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    // setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard">
      {/* Navbar */}
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
            <Link to="/studentdashboard/setting"><AiFillSetting className='dashboard-icon'/>Setting</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/profile"><MdPayments className='dashboard-icon'/>profile </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/zoom"><MdPayments className='dashboard-icon'/>live zooming </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/anatyics"><MdRequestQuote className='dashboard-icon'/>Anatyics</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/teahers"><MdAccountBalance className='dashboard-icon'/>My teachers</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/assignmentteachers"><GrUserManager className='dashboard-icon'/>Assignment post</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/quiz"><ImProfile className='dashboard-icon'/>Quiz post</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/courses"><MdPlayLesson className='dashboard-icon'/>My courses</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/schedule"><AiFillSchedule className='dashboard-icon'/>schedule</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/studentdashboard/help_center"><GiSatelliteCommunication className='dashboard-icon'/>help center</Link>
          </li>
          <li className='sidebar_item'>
          <Link to="/studentdashboard/logout"><RiLogoutCircleFill className='dashboard-icon'/>Logout</Link>
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




