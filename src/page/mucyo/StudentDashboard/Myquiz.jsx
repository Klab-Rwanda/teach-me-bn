// import React, { useState } from "react";
// import '../../../css2/Myquiz.css';
// const questions = [
//   {
//     question: "What is the capital of France?",
//     answers: ["Paris", "Madrid", "Rome", "Berlin"],
//   },
//   {
//     question: "What is the largest planet in our solar system?",
//     answers: ["Jupiter", "Mars", "Venus", "Saturn"],
//   },
//   {
//     question: "What is the boiling point of water (in Celsius)?",
//     answers: ["100", "0", "50", "200"],
//   },
// ];

// function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);

//   const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className="quiz">
//       {showScore ? (
//         <div className="score-section">
//           You scored {score} out of {questions.length}
//         </div>
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Question {currentQuestion + 1}</span>/{questions.length}
//             </div>
//             <div className="question-text">
//               {questions[currentQuestion].question}
//             </div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestion].answers.map((answerOption) => (
//               <button
//                 onClick={() =>
//                   handleAnswerOptionClick(
//                     answerOption === questions[currentQuestion].answers[0]
//                   )
//                 }
//               >
//                 {answerOption}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

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
