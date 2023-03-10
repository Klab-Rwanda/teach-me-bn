import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'; // Import useState hook

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state for menu toggle

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
        {/* Toggle button for small devices */}
        <button className="toggle-btn" onClick={toggleMenu}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <div className={`link ${isMenuOpen ? 'show' : ''}`}>
          {/* Links for all devices */}
          <a href="#">Home</a>
          <a href="#about">Aboutus</a>
          <Link  to="./contact"><a href="#contactfor">Contact</a></Link>
          <a href="#service">Service</a>
          <a href="#blog">Blog</a>
          <Link to="/teachers">Teachers</Link>
          <button  className='pass'>
          <Link to="/#">Sign in</Link>
          <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
