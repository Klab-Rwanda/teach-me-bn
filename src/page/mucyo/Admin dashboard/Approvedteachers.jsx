import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "../../../axios/axios";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar";
import "./Teachersffff.css";

const Teachers = () => {
  const [teacher, setTeachers] = useState([]);

  const fetchApproved = async () => {
    try {
      const response = await axios("/getAllprofile");
      setTeachers(response.data.Profile.filter((t) => t.status === "approved"));
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchApproved();
  }, []);

  return (
    <div className="teachers">
      <Navbar />
      <div className="teacher-cards-container">
        {teacher.map((Profile) => (
          <div className="teacher-card" key={Profile._id}>
            <div className="teacher-info">
              <img src={Profile.image} alt="connection failed" />
              <p> Fullname:{Profile.fullname}</p>
              <p>course:{Profile.course}</p>
              <p>addres:{Profile.adress}</p>
              <p>email:{Profile.email}</p>
              <p>exprience{Profile.exprience}</p>
              <p>teacherstyle:{Profile.studyingstyle}</p>
              <div className="FLX">
                  <button
                    className="button"
                    onClick={() => {
                      alert(`View more about ${Profile.name}`);
                    }}
                  >
                    <Link
                      to={`/${Profile?._id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      View More
                    </Link>
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Teachers;



