// import React from "react";


// const Coursetechers = () => {
//   const courseData = [
//     {
//       id: 1,
//       title: "Course 1",
//       description: "This is the description of Course 1.",
//       instructor: "John Doe",
//     },
//     {
//       id: 2,
//       title: "Course 2",
//       description: "This is the description of Course 2.",
//       instructor: "Jane Smith",
//     },
    
//   ];

//   const Course = ({ title, description, instructor }) => {
//     return (
//       <div className="course">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <p>Instructor: {instructor}</p>
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <h2>All Courses for Students</h2>
//       {courseData.map((course) => (
//         <Course
//           key={course.id}
//           title={course.title}
//           description={course.description}
//           instructor={course.instructor}
//         />
//       ))}
//     </div>
//   );
// };

// export default Coursetechers;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Coursetechers = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://teachmeapi.onrender.com/api/v1/getAllCourse")
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, []);

  const Course = ({ title, description, instructor }) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Instructor: {instructor}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>All Courses for Students</h2>
      {courseData.map((course) => (
        <Course
          key={course.id}
          title={course.title}
          description={course.description}
          instructor={course.instructor}
        />
      ))}
    </div>
  );
};

export default Coursetechers;
