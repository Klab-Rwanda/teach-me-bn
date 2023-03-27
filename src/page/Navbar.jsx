import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
         <Link to="/#" style={{color: 'inherit', textDecoration: 'inherit'}}>Teach<span>me</span></Link> 
        </div>
     
        <button className="toggle-btn" onClick={toggleMenu}>
          {/* {isMenuOpen ?  
        <FaTimes/>
        :
        <FaBars/>} */}
        </button>
        <div className={`link ${isMenuOpen ? 'show' : ''}`}>
          {/* Links for all devices */}
          <a href="#/">Home</a>
          <a href="#about">Aboutus</a>
          <a href="#contactfor">Contact</a>
          <a href="#service">Service</a>
          <a href="#blog">Blog</a>
          <Link to="/teachers">Teachers</Link>
          
          <bututon  className='pass'>
          <Link to="/login">Sign in</Link>
          <Link to="/regiter">Sign up</Link>
          </bututon>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
