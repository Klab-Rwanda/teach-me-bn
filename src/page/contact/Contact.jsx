import React from "react";
import ALAI from "../../aseets/experts.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import MAMA from "../../aseets/figama33.jpeg";
import AL from "../../aseets/figma3.jpg";
import GG from "../../aseets/figma4.jpg";
import AG from "../../aseets/figma1.jpg";
import BB from "../../aseets/figma5.jpg";
import partnersData from './partnersData.js'
import { IoMdPlayCircle } from 'react-icons/io';
import { AiFillPlayCircle } from 'react-icons/ai';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import blog from './blog.js';
import "../../css/Contact.css";
function Contact() {
  return (
    // <section className="."  id="">
    <div className="container" id="blog">
      <div className="container_contact">
        <div className="container_contact_left">
          <h1>We Have Highly Expert & Experienced Tutors</h1>
          <p>
          Expert teachers at your fingertips - unlock your potential today,
          Discover the transformative impact of great teachers - join our platform today!,
          When it comes to finding the best teachers, look no further than our 
          platform. Get started now!"
          {" "}
          </p>
          <button>Enroll Now</button>
        </div>
        <div className="container_contact_right">
          <img src={ALAI} alt="connection failed " />
        </div>
      </div>
      <h1 className="say">What our Student say</h1>
     
      
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
      >
         {blog.map((blog) => (
        <SwiperSlide key={blog.id}>
          <div className="blog">
            <div className="div1">
              <div className="subdiv1">
                <img src={blog.image1} alt="connection failure" />
              </div>
              <div className="subdiv1">
                <img src={blog.image2} alt="connection failure" />
              </div>
            </div>
            <div className="div2">
              <img src={blog.image3} alt="connection failed" />
              <h5>{blog.author}</h5>
              <h6>{blog.email}</h6>
              <p>{blog.content}</p>
            </div>
            <div className="div1">
              <div className="subdiv1">
                <img src={blog.image1} alt="connection failure" />
              </div>
              <div className="subdiv1">
                <img src={blog.image2} alt="connection failure" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
     
      </Swiper>


{/* FRONT ALAIN */}




      <h1 className="say">Our education Partners</h1>
      <div className="Partners">
      {partnersData.map((partner) => (
        <div key={partner.name} className="too_logo">
          <img src={partner.logo} alt={partner.name} />
        </div>
      ))}
    </div>
    </div>
    // </section>
  );
  }
export default Contact;
