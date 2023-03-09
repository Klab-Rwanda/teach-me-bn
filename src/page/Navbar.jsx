
import { Link } from 'react-router-dom'



// import '../css/Navbar.css'
function Navbar() {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
          Teach<span>me</span>
        </div>
        <div className="link">
          <a href=" #">Home</a>
          <a href="#about">Aboutus</a>
          <a href="#contactfor">Contact</a>
          <a href="#service ">Service </a>
          <a href="#blog">Blog </a>
          <Link to="/teachers">Teachers</Link>
          <button>
          <Link to="/#">Sign in</Link>
          <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
