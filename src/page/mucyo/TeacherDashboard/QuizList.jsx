import React, { useState, useEffect } from "react";
import axios from "axios";

function AllQuizzesPage() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await axios.get(
          "https://teachmeapi.onrender.com/api/v1/getAllQuiz"
        );
        // console.log(response.data.Quiz);
        setQuizzes(response.data.Quiz);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuizzes();
  }, []);

  return (
    <div className="all-quizzes-page">
      <h1>All Quizzes</h1>
      {quizzes.map((Quiz) => (
        <div className="Quiz-card" key={Quiz._id}>
          {/* <h2>{Quiz.image}</h2> */}
          <p>{Quiz.quiztopic}</p>
          <p>{Quiz.quizdescription}</p>
          <p>{Quiz.mark}</p>
          <p>Published Date: {Quiz.date}</p>
          <p>Due Date: {Quiz.date}</p>
        </div>
      ))}
    </div>
  );
}

export default AllQuizzesPage;

