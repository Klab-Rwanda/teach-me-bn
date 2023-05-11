import React, { useState } from "react";

function Modal({ isOpen, onClose }) {
  const [questions, setQuestions] = useState([
    { question: "", answers: [], correctAnswer: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the questions
    console.log(questions);
    // Reset the form
    setQuestions([{ question: "", answers: [], correctAnswer: "" }]);
    // Close the modal
    onClose();
  };

  const handleQuestionChange = (e, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (e, questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (e, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctAnswer = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    const newQuestions = [
      ...questions,
      { question: "", answers: [], correctAnswer: "" },
    ];
    setQuestions(newQuestions);
  };

  const addAnswer = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push("");
    setQuestions(newQuestions);
  };

  return (
    <div className={isOpen ? "modal show" : "modal hide"}>
      <div className="modal-content">
        <h2>Add </h2>
        <form onSubmit={handleSubmit}>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <label htmlFor={`question-${questionIndex}`}>Question:</label>
              <input
                type="text"
                id={`question-${questionIndex}`}
                value={question.question}
                onChange={(e) => handleQuestionChange(e, questionIndex)}
                required
              />
              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                  <label htmlFor={`answer-${questionIndex}-${answerIndex}`}>
                    Answer:
                  </label>
                  <input
                    type="text"
                    id={`answer-${questionIndex}-${answerIndex}`}
                    value={answer}
                    onChange={(e) =>
                      handleAnswerChange(e, questionIndex, answerIndex)}
                    required
                  />
                </div>
              ))}
              <button type="button" onClick={() => addAnswer(questionIndex)}>
                Add Answer
              </button>
              <div>
                <label htmlFor={`correct-answer-${questionIndex}`}>
                  Correct Answer:
                </label>
                <input type="text" id={`correct-answer-${questionIndex}`}
                  value={question.correctAnswer}
                  onChange={(e) => handleCorrectAnswerChange(e, questionIndex)}
                  required
                />
              </div>
            </div>
          ))}
          <button type="button" onClick={addQuestion}>
            Add Question
          </button>
          <button type="submit">Add Questions</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default Modal;
