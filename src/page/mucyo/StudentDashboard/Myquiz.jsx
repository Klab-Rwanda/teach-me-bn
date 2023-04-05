// import React, { useState, useEffect } from "react";

// const Quiz = ({ questions }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
//   const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60); // countdown timer starts with 60 seconds

//   useEffect(() => {
//     // reset timer and answer submission when current question changes
//     setIsAnswerSubmitted(false);
//     setTimeLeft(60);
//   }, [currentQuestionIndex]);

//   useEffect(() => {
//     // countdown timer
//     const timer = setTimeout(() => {
//       if (timeLeft > 0) {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   const handleAnswerSubmit = (selectedOption) => {
//     if (!isAnswerSubmitted) {
//       setIsAnswerSubmitted(true);
//       const correctAnswer = questions[currentQuestionIndex].correctAnswer;
//       const isCorrect = selectedOption === correctAnswer;
//       setIsCorrectAnswer(isCorrect);
//     }
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   const shuffle = (array) => {
//     let currentIndex = array.length,
//       temporaryValue,
//       randomIndex;
//     while (0 !== currentIndex) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
//     return array;
//   };

//   const progressBarWidth = `${
//     ((currentQuestionIndex + 1) / questions.length) * 100
//   }%`;

//   return (
//     <div className="quiz">
//     <Quiz questions={questions} />
//       <div className="quiz__header">
//         <h1>{questions[currentQuestionIndex].question}</h1>
//         <div className="quiz__timer">{timeLeft}</div>
//       </div>
//       <div className="quiz__answer-options">
//         {shuffle(questions[currentQuestionIndex].answerOptions).map(
//           (option) => (
//             <button
//               key={option}
//               disabled={isAnswerSubmitted}
//               onClick={() => handleAnswerSubmit(option)}
//             >
//               {option}
//             </button>
//           )
//         )}
//       </div>
//       <div className="quiz__feedback">
//         {isAnswerSubmitted && (
//           <p className={isCorrectAnswer ? "correct" : "incorrect"}>
//             {isCorrectAnswer ? "Correct!" : "Sorry, that was incorrect."}
//           </p>
//         )}
//       </div>
//       <div className="quiz__footer">
//         {isAnswerSubmitted && currentQuestionIndex < questions.length - 1 ? (
//           <button onClick={handleNextQuestion}>Next question</button>
//         ) : (
//           <button disabled={!isAnswerSubmitted}>Finish</button>
//         )}
//         <div
//           className="quiz__progress-bar"
//           style={{ width: progressBarWidth }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;



import React, { useState } from "react";
import "../../../css2/Myquiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Madrid", "Rome", "Berlin"],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Mars", "Venus", "Saturn"],
  },
  {
    question: "What is the boiling point of water (in Celsius)?",
    answers: ["100", "0", "50", "200"],
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answers.map((answerOption) => (
              <button
                key={answerOption}
                onClick={() =>
                  handleAnswerOptionClick(
                    answerOption === questions[currentQuestion].answers[0]
                  )
                }
              >
                {answerOption}
              </button>
            ))}
          </div>
          <button onClick={toggleQuestions}>Show All Questions</button>
          {showQuestions && (
            <div className="all-questions">
              {questions.map((question, index) => (
                <div key={index}>
                  <div>{question.question}</div>
                  {question.answers.map((answerOption) => (
                    <div key={answerOption}>{answerOption}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
