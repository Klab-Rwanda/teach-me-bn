import React, { useState } from "react";
import axios from "axios";
import "./quizform.css";

function QuizPreparationForm() {
  const [quizname, setQuizTitle] = useState("");
  const [quizdescription, setquizdescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuizTitleChange = (event) => {
    setQuizTitle(event.target.value);
  };

  const handlequizdescriptionChange = (event) => {
    setquizdescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const quizData = {
      quizname: quizname,
      quizdescription: quizdescription,
    };

    axios
      .post("https://teachmeapi.onrender.com/api/v1/createquiz", quizData)
      .then((response) => {
        setSuccessMessage("Quiz created successfully!");
        setErrorMessage("");
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage("Error creating quiz. Please try again.");
      });
  };
  return (
    <div className="quiz_preparation">
      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="quizTitle">
            Quiz Title:
          </label>
          <input
            className="form__input"
            id="quizTitle"
            type="text"
            value={quizname}
            onChange={handleQuizTitleChange}
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="quizdescription">
            Quiz Description:
          </label>
          <textarea
            className="form__textarea"
            id="quizdescription"
            value={quizdescription}
            onChange={handlequizdescriptionChange}
            required
          />
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuizPreparationForm;
