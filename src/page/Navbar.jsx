import '../css/Navbar.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AppProvider';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const username = localStorage.getItem("name");
  

  const {isLoged, setIsLoged} = useContext(AuthContext);

  const handleToggle  = () => {
    setIsMenuOpen(!isMenuOpen);
  }
    const handleLogout = () => {

    setIsLoged(false);
    localStorage.removeItem("name");
  }
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
         <Link to="/#" style={{color: 'inherit', textDecoration: 'inherit'}}>Teach<span>me</span></Link> 
        </div>
     
        <button className="toggle-btn" onClick={handleToggle }>
        </button>
        <div className={`link ${isMenuOpen ? 'show' : ''}`}>
    
          <a href="#/">Home</a>
          <a href="#about">Aboutus</a>
          <a href="#contactfor">Contact</a>
          <a href="#service">Service</a>
          <a href="#blog">Blog</a>
          <Link to="/approvedteachers">Teachers</Link>
         {isLoged ? (<div className='BTN'><p> Welcome {username[0]}</p>
         <div className='drop'>
         <Link to="/profile">Profile</Link>
          <button className='logout' onClick={handleLogout}>Logout</button>
         </div>
         </div>
         ) : ( <bututon  className='pass'>

          <Link to="/login">Sign in</Link>
          <Link to="/regiter">Sign up</Link>
          </bututon>) }
        </div>
      </div>
    </div>
  );
}
export default Navbar;
