import React from "react";
import "../css/Home.css";
import LOGO from "../aseets/alainlogo.png";
import ME from "../aseets/rightsphoto.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs"
function Home() {
  return (
   <div>
    <div className=" container" id="home">
      <div className="homew">
        <div className="left">
          <div className="flx">
            <img className="logo2" src={LOGO} alt="logoo" />
            <p style={{ color: "#525FE1" }}>Best e-learning Platform</p>
          </div>
          <div className="gettinglabel">
          <label className="label">
            Getting Best Quality Education Is
            Now More Easier
          </label>
          </div>          
          <p className="lorem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <div className="join-container">
            <button className="join">Join course</button>
            <BsFillPlayCircleFill className="play-icon"href="https://youtu.be/1SZle1skb84?t=5" />
            <span>See how it works?</span>
          </div>
        </div>
        <div className="right">
          <img src={ME} alt="homeside" />
        </div>
      </div>
    </div>
    <div className="sub_container">
      <span className="experts">8K+<br/><p className="sub_container_experts">Success Stories</p></span>
      <span className="experts">200+<br/><p className="sub_container_experts">Expert instructor</p></span>
      <span className="experts">108K+<br/><p className="sub_container_experts">Worldwide Students</p></span>
      <span className="experts">310K+<br/><p className="sub_container_experts">Trendy Subjects</p></span>
    </div>
    </div>
  );
}
export default Home;
