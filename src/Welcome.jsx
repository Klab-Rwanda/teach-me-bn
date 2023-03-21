import React from 'react'
import About from './page/About'
import Best from './page/best/Best'
import ContactFor from './page/BLOG/ContactFor'
import Contact from './page/contact/Contact'
import Footer from './page/Footer/Footer'
import Home from './page/Home'
import Teacherdash from './page/mucyo/TeacherDashboard/Teacherdash'
import Navbar from './page/Navbar'
import Service from './page/service/Service'
function Welcome() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Best/>
    <Service/>
    <ContactFor/>
    <Contact/>
    <Footer/>
 
    {/* <StudentDash/> */}
    </div>
  )
}
export default Welcome