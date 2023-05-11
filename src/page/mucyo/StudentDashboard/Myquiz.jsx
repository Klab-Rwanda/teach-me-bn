import React, { useState } from "react";
import "./StudentQuizList.css";
function StudentQuizList() {
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      name: "Quiz 1",
      description: "This is the first quiz",
      teacherId: 1,
    },
    {
      id: 2,
      name: "Quiz 2",
      description: "This is the second quiz",
      teacherId: 1,
    },
    {
      id: 3,
      name: "Quiz 3",
      description: "This is the third quiz",
      teacherId: 2,
    },
    {
      id: 4,
      name: "Quiz 4",
      description: "This is the fourth quiz",
      teacherId: 2,
    },
  ]);

  const handlePlayQuiz = (quizId) => {
    console.log(`Play quiz ${quizId}`);
    // assuming you have a way to navigate to the quiz page for the selected quiz
    // you can use history.push() or Link component from React Router
  };

  const filteredQuizzes = quizzes.filter((quiz) => quiz.teacherId === 1); // assuming you want to display quizzes for teacher ID 1

  return (
    <div className="student_quiz_list">
      <h1>Quiz List for Teacher 1</h1>
      {filteredQuizzes.length === 0 ? (
        <p>No quizzes available</p>
      ) : (
        <ul>
          {filteredQuizzes.map((quiz) => (
            <li key={quiz.id}>
              {quiz.name} - {quiz.description}{" "}
              <button onClick={() => handlePlayQuiz(quiz.id)}>
                Play Quiz
                </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentQuizList;
