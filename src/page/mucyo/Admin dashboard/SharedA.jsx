import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { FcManager } from 'react-icons/fc';
import { TfiNotepad } from 'react-icons/tfi';
import { BsPersonWorkspace } from 'react-icons/bs';
import { TbBrandBooking } from 'react-icons/tb';
import { FcCustomerSupport } from 'react-icons/fc';
import { ImProfile } from 'react-icons/im';
import { FaHouseUser } from 'react-icons/fa';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { FaHireAHelper } from 'react-icons/fa';
import { FcFeedIn } from 'react-icons/fc';
import { SiPrometheus } from 'react-icons/si';
import LOGO from '../../../../src/aseets/logoproject.png';
import '../../../css/shared.css';

const SharedA = () => {
  const [manageDropdown, setManageDropdown] = useState(false);

  const toggleManageDropdown = () => {
    setManageDropdown(!manageDropdown);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const [sidebarOpen, setSidebarOpen] = React.useState(false);

 

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
            <Link to=""><AiFillSetting className='dashboard-icon'/>Setting</Link>
          </li>
         
          <li className="sidebar-item">
            <Link to="/admindashboard/Teachers"><TfiNotepad className='dashboard-icon'/>Teachers</Link>
          </li>
          <li className="sidebar-item">
            <Link to=""><BsPersonWorkspace className='dashboard-icon'/>application</Link>
          </li>
          <li className="sidebar-item">
            <Link to=""><TbBrandBooking className='dashboard-icon'/>Parents booking</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/admindashboard/user"><FaHouseUser className='dashboard-icon'/>Users</Link>
          </li>
          <li className="sidebar-item">
            <Link to=""><SiPrometheus className='dashboard-icon'/>Marketing</Link>
          </li>
          <li className="sidebar-item">
            <Link to=""><FcFeedIn className='dashboard-icon'/>Feedback</Link>
          </li>
  
          <li className="sidebar-item">
            <Link to=""><FcManager className='dashboard-icon'/>Payment Management</Link>
          </li>
          <li className="sidebar-item">
            <Link to=""><FaAssistiveListeningSystems className='dashboard-icon'/>System Maintenance:</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/admindashboard/support"><FaHireAHelper className='dashboard-icon'/>Support</Link>
          </li>
          <li className='sidebar_item'>
          <Link to=""><FcCustomerSupport className='dashboard-icon'/>Logout</Link>
          </li>
        </ul>
      </aside>
      <div className='datas'>
        <Outlet/>
      </div>
   
   </div>
  );
};

export default SharedA;












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
