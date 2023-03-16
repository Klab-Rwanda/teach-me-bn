import React from 'react'
import About from './page/About'
import Best from './page/best/Best'
import ContactFor from './page/BLOG/ContactFor'
import Contact from './page/contact/Contact'
import Footer from './page/Footer/Footer'
import Home from './page/Home'
import Navbar from './page/Navbar'
import Service from './page/service/Service'
import SingleTeachersProfile from './page/SingleTeachersProfile'
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
    <SingleTeachersProfile/>
  
    </div>
  )
}
export default Welcome