import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentQuizList.css";

function StudentQuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quizzes from the API
    axios
      .get("https://teachmeapi.onrender.com/api/v1/getallquiz")
      .then((response) => {
        setQuizzes(response.data.quizzes); // Assuming the API response has a "quizzes" property containing an array of quizzes
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
      });
  }, []);

  const handlePlayQuiz = (quizId) => {
    const selectedQuiz = quizzes.find((quiz) => quiz.id === quizId);
    console.log("Selected Quiz:", selectedQuiz);
    // Assuming you have a way to navigate to the quiz page for the selected quiz
    // You can use history.push() or Link component from React Router
  };
  return (
    <div className="student_quiz_list">
      <h1>Quiz List</h1>
      {quizzes.length === 0 ? (
        <p>No quizzes available</p>
      ) : (
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              {quiz.name} - {quiz.description}{" "}
              <button onClick={() => handlePlayQuiz(quiz.id)}>Play Quiz</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default StudentQuizList;
