import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../../css/sidebarHamb.css';


const SidebarHamb = () => {

    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () =>{
        setIsOpen(!isOpen);
      }
  return (
    <div className='hambo'>
        <div className="sidebar-icon" onClick={toggleSidebar}>
        {isOpen ?
        <FaTimes/>
        :
        <FaBars/>
        }

        </div>
        {isOpen && (
        <div className="sidebar-menu">
            <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            </ul>
        </div>
        )}
  </div>
  )
}

export default SidebarHamb