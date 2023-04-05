import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentDashboard = () => {
  const [grades, setGrades] = useState([]);
  const [averageGrade, setAverageGrade] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.example.com/grades");
      setGrades(result.data.grades);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const sum = grades.reduce((total, grade) => total + grade.score, 0);
    const average = sum / grades.length;
    setAverageGrade(average.toFixed(2));
  }, [grades]);

  return (
    <div className="student-dashboard">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Student Dashboard</h1>
          <div className="student-dashboard__grades">
            <h2>Grades</h2>
            <ul>
              {grades.map((grade) => (
                <li key={grade.id}>
                  <span>{grade.course}</span>
                  <span>{grade.score}</span>
                </li>
              ))}
            </ul>
            <p>Average grade: {averageGrade}</p>
          </div>
          <div className="student-dashboard__analytics">
            <h2>Analytics</h2>
            {/* Add your analytics charts here */}
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDashboard;
