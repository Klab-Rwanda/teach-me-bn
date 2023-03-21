import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../../css/QuizList.css";
function QuizList({ teacherId }) {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://teachmeapi.onrender.com/api/v1/getAllAssignment?teacherId=${teacherId}`
        );
        setQuizzes(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching quizzes. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [teacherId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Quizzes</h2>
      <ul className="quiz-list">
        {quizzes.map((quiz) => (
          <li key={quiz.id}>{quiz.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
