import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import "./QuizList.css";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() =>
  {
    axios
      .get("https://teachmeapi.onrender.com/api/v1/getallquiz")
      .then((response) => {
        setQuizzes(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSeeQuestions = (quizId) => {
    console.log(`See questions for quiz ${quizId}`);
  };

  const handleAddQuestion = (quizId) => {
    setShowModal(true);
  };

  const handleUpload = (quizId) => {
    console.log(`Upload quiz ${quizId}`);
  };

  const handleDelete = (quizId) => {
    console.log(`Delete quiz ${quizId}`);
  };


  return (
    <div className="quiz_list">
      {quizzes.map((quiz) => (
        <div className="quiz_item" key={quiz.id}>
          <h2>{quiz.quizname}</h2>
          <p>{quiz.quizdescription}</p>
          <div className="quiz_actions">
            <button onClick={() => handleSeeQuestions(quiz.id)}>
              See Questions
            </button>
            <button onClick={() => handleAddQuestion(quiz.id)}>
              Add Question
            </button>
            <button onClick={() => handleUpload(quiz.id)}>Upload</button>
            <button onClick={() => handleDelete(quiz.id)}>Delete</button>
          </div>
        </div>
      ))}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <h2>Add Question Form</h2>
        </Modal>
      )}
    </div>
  );
}

export default QuizList;
