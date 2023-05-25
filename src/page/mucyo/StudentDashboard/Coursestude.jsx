import React, { useState } from "react";
import "./Coursestude.css";
const Coursestude = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to   science ",
      description: "Learn the basics of React and build your first app",
      teacher: "John Doe",
      image: "https://example.com/react.png",
    },
    {
      id: 2,
      title: "Web Development with mathematics",
      description: "Build scalable web applications with Node.js and Express",
      teacher: "Jane Smith",
      image: "https://example.com/nodejs.png",
    },
    {
      id: 3,
      title: "Data Science with history",
      description:
        "Learn data analysis, machine learning, and visualization with Python",
      teacher: "Bob Johnson",
      image: "https://example.com/python.png",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="Coursestude">
      <h1> Hello student Courses for Students</h1>

      <div className="filters">
        <button onClick={() => handleCategorySelect("all")}>All</button>
        <button onClick={() => handleCategorySelect("react")}>science</button>
        <button onClick={() => handleCategorySelect("nodejs")}>mathematics </button>
        <button onClick={() => handleCategorySelect("python")}> technonlogy</button>
      </div>
      
      <div className="course-cards">
        {filteredCourses.map((course) => (
          <div key={course.id}>
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Teacher: {course.teacher}</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Coursestude;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Coursestude.css";

// const Coursestude = () => {
//   const [courses, setCourses] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   useEffect(() => {
//     axios
//       .get("https://teachmeapi.onrender.com/api/v1/getAllCourse")
//       .then((response) => {
//         setCourses(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const filteredCourses =
//     selectedCategory === "all"
//       ? courses
//       : courses.filter((course) => course.category === selectedCategory);

//   return (
//     <div className="Coursestude">
//       <h1> Hello student Courses for Students</h1>

//       <div className="filters">
//         <button onClick={() => handleCategorySelect("all")}>All</button>
//         <button onClick={() => handleCategorySelect("science")}>Science</button>
//         <button onClick={() => handleCategorySelect("mathematics")}>
//           Mathematics
//         </button>
//         <button onClick={() => handleCategorySelect("technology")}>
//           Technology
//         </button>
//       </div>

//       <div className="course-cards">
//         {filteredCourses.map((course) => (
//           <div key={course.id}>
//             <img src={course.image} alt={course.title} />
//             <h2>{course.title}</h2>
//             <p>{course.description}</p>
//             <p>Teacher: {course.teacher}</p>
//             <button>Enroll Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Coursestude;
