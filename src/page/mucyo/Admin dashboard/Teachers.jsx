import React, { useState, useEffect } from "react";

import "../../../css/Teachers.css";
import { Link } from "react-router-dom";

import axios from "axios";
function Teachers() {
  const [profiles, setProfiles] = useState([]);
   console.log(profiles)
   const fetchProfiles = async () => {
    try {
      const response = await axios.get(
        "https://teachmeapi.onrender.com/api/v1/getAllprofile"
      );
      console.log(response);
      setProfiles(response.data.Profile);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
 console.log("hello");

    fetchProfiles();
  }, []);
  return (
    <div className="containerfooterf">

      <div className="container">
        <div className="teachers_container">
          {profiles && profiles?.map((row) => (
            <div className="teacher_card" key={row.id}>
              <img src={row.image} alt="connection failed" />
              <div className="teacher_info">
                <h3>{row.name}</h3>
                <p>
                  <strong>Fullname: </strong>
                  {row.fullname}
                </p>
                <p>
                  <strong>Email: </strong>
                  {row.email}
                </p>
                <p>
                  <strong>TimeAvailable: </strong>
                  {row.timeAvailable}
                </p>
                <p>
                  <strong>Course: </strong>
                  {row.course}
                </p>
                <p>
                  <strong>Address: </strong>
                  {row.adress}
                </p>
                <p>
                  <strong>Gender: </strong>
                  {row.gender}
                </p>
                <p>
                  <strong>Studying Style: </strong>
                  {row.studyingstyle}
                </p>
                <p>
                  <strong>expreince: </strong>
                  {row.exprience}
                </p>
                <p>
                  <strong>Date: </strong>
                  {row.date}
                </p>
                <div className="FLX">
                  <button
                    className="button"
                    onClick={() => {
                      alert(`View more about ${row.name}`);
                    }}
                  >
                    <Link
                      to={`/${row?._id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      View More
                    </Link>
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      alert(`Book now with ${row?._fullname}`);
                    }}
                  >
                    <Link
                      to={`/bookform/${row.id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Book Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  );
}

export default Teachers;
