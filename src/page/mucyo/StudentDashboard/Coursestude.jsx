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
      <h1> hello student Courses for Students</h1>

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
