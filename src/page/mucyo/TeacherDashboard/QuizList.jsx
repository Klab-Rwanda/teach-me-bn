import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css2/QUIZLIST.CSS";

function AllQuizzesPage() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await axios.get(
          "https://teachmeapi.onrender.com/api/v1/getAllQuiz"
        );
        console.log(response.data.Quiz)
        setQuizzes(response.data.Quiz);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuizzes();
  }, []);
  const handleDeleteQuiz = async (id) => {
    try {
      await axios.delete(
        `https://teachmeapi.onrender.com/api/v1/quiz/${id}`
      );
      console.log("alaalll")
      const newQuizzes = quizzes.filter((quiz) => quiz._id !== id);
      setQuizzes(newQuizzes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditQuiz = async (id) => {
    // implement your edit quiz functionality here
  };

  return (
    <>
    { quizzes.length < 0 ? (<h1>Loading...</h1>):(
    <div className="all-quizzes-page">
      <h1>All Quizzes</h1>
      <div className="table-responsive">
        <table className="quiz-table">
          <thead>
            <tr className="quiz-row quiz-header">
              <th>Topic</th>
              <th>Description</th>
              <th>Mark</th>
              <th>Published Date</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr className="quiz-row" key={quiz?._id}>
                <td>{quiz.quiztopic}</td>
                <td>{quiz.quizdescription}</td>
                <td>{quiz.mark}</td>
                <td>{quiz.date}</td>
                <td>{quiz.date}</td>
                <td>
                  <div className="quizlist">
                  <button onClick={() => handleEditQuiz(quiz._id)}>Edit</button>
                  <button onClick={() => handleDeleteQuiz(quiz._id)}>Delete</button>
                  </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>)}
    </>
  );
}

export default AllQuizzesPage;
