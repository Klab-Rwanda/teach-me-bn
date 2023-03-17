import React from 'react'
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { FcServiceMark } from 'react-icons/fc';
import { MdSchool } from 'react-icons/md';
import { FcHome } from 'react-icons/fc';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoSchoolSharp } from 'react-icons/io5';
import { GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
        <div className='About'>
         <h5 className='logo'><FcHome/><Link to ="/#">Teachme</Link></h5>
         <ul>
          <li><a href="#"><MdEmail/>teachme@gmail.com</a></li>
          <li><a href="#"><BsFillTelephoneInboundFill/>+250 123 457 236</a></li>
          <li><Link  to ="/teacherinfo" ><GiTeacher/>Become an instructor</Link></li>
          <li><a href="#"><IoSchoolSharp/>Become an student</a></li>
          <li><p>@2023 TeachmeAll rights reserved</p></li>
          </ul>
        </div> 
        <div className='Courses'>
         <h5><FcAbout/>About us </h5>
         <ul>
          <li><a href="#">Email</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Getting Sponsorship</a></li>
          </ul>
        </div> 
        <div className='Services '>
         <h5> <FcServiceMark/>Services </h5>
         <ul>
          <li><a href="#">Scholarships</a></li>
          <li><a href="#">Teaching and coaching </a></li>
          <li><a href="#">Internship and training </a></li>
          </ul>
        </div> 
        <div className='Services '>
         <h5><MdSchool/>Courses</h5>
         <ul>
          <li><a href="#">Sciences course </a></li>
          <li><a href="#">Entreprenuership courses </a></li>
          <li><a href="#">Technology course </a></li>
          </ul>
        </div> 
        <div className="subscribe">
            <h5>SUBSCRIBE TO OUR NEWS PAPER</h5>
            <input class="footer-input" type="email" placeholder="example@gmail.com"/>
            <button>SUBCRIBE</button>
            <div class="social-networks">
            <AiFillFacebook/>
            <BsWhatsapp/>
            <AiFillLinkedin/>
            <AiFillTwitterCircle/>
           </div>
        </div>
    </div>
  )
}
export default Footer