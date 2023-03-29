// import React, { useState } from 'react';
// import axios from 'axios';
// import '../../css/QuizForm.css';

// function QuizForm({ onSave }) {
//   const [image, setImage] = useState(null);
//   const [quiztopic, setQuizTopic] = useState('');
//   const [quizdescription, setQuizDescription] = useState('');
//   const [mark, setMark] = useState('');
//   const [date, setDate] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('image', image);
//       formData.append('quiztopic', quiztopic);
//       formData.append('quizdescription', quizdescription);
//       formData.append('mark', mark);
//       formData.append('date', date);
  
//       const config = {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       };
  
//       const response = await axios.post('https://teachmeapi.onrender.com/api/v1/CreateQiuz', formData, config);
//       console.log("hhhhhhhhhhhhhh", response);
//       console.log("-_--", response.data && response.data.message === "Quiz created successfully")
//       // Check if response contains a message property and if it is equal to "Quiz created successfully"
//       if (response.data && response.data.message === "Quiz created successfully") {
//         // onSave(response.data);
//         setImage(null);
//         setQuizTopic('');
//         setQuizDescription('');
//         setMark('');
//         setDate('');
//         setError('');
//         setSuccess('Quiz created successfully');

//         // Reset the form after 2 seconds

//         setTimeout(() => {
//           setSuccess(''); // Clear the success message
//           e.target.reset(); // Reset the form
//         }, 5000); // Wait for 5 seconds before clearing the message
        
//         // Add the following line after the setTimeout function to automatically clear the success message when the user clicks on it
//         setTimeout(() => {
//           setSuccess('');
//         }, 1000); 
        
//       } else {
//         setError('Error creating quiz. Please try again later.');
//         setSuccess('');
//       }
//     } catch (error) {
//       setError('Error creating quiz. Please try again later.');
//       setSuccess('');
//     }
//   }
  
//   return (
//     <div className="dash_container2">
//     <form  className="quiz-form" onSubmit={handleSubmit}>
//      {error && <div className="error-message">{error}</div>}
//       {success && <div className="success-message">{success}</div>}
//       <h2>Create Quiz</h2>
//       <div>
//         <label>Image:</label>
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//       </div>
//       <div>
//         <label>Quiz Topic:</label>
//         <input type="text" value={quiztopic} onChange={(e) => setQuizTopic(e.target.value)} />
//       </div>
//       <div>
//         <label>Quiz Description:</label>
//         <input type="text" value={quizdescription} onChange={(e) => setQuizDescription(e.target.value)} />
//       </div>
//       <div>
//         <label>Mark:</label>
//         <input type="number" value={mark} onChange={(e) => setMark(e.target.value)} />
//       </div>
//       <div>
//         <label>Date:</label>
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       </div>
//       <button type="submit">SEND</button>
//     </form>
//     </div>
//   );
// }
// export default QuizForm;


import { useState } from 'react';
import './quizform.css'
function CreateQuizForm() {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answers: [] }]);
  
  const handleTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };
  
  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };
  
  const handleAnswerChange = (e, questionIndex, answerIndex) => {
    const { value } = e.target;
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(newQuestions);
  };
  
  const addQuestion = () => {
    setQuestions([...questions, { question: '', answers: [] }]);
  };
  
  const removeQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };
  
  const addAnswer = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push('');
    setQuestions(newQuestions);
  };
  
  const removeAnswer = (questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(newQuestions);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };
  
  return (
    <div className="quiz-form">
      <h2>  Quiz  form </h2>
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Title:
        <input type="text" value={quizTitle} onChange={handleTitleChange} />
      </label>
      
      {questions.map((question, index) => (
        <div key={index}>
          <label>
            Question:
            <input type="text" name="question" value={question.question} onChange={(e) => handleQuestionChange(e, index)} />
          </label>
          
          {question.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
              <label>
                Answer {answerIndex + 1}:
                <input type="text" value={answer} onChange={(e) => handleAnswerChange(e, index, answerIndex)} />
              </label>
             
              {question.answers.length > 1 && (
                <button type="button" onClick={() => removeAnswer(index, answerIndex)}>Remove Answer</button>
              )}
            </div>
          ))}
          <div className="div">
          <button type="button" onClick={() => addAnswer(index)}>Add Answer</button>
          {questions.length > 1 && (
            <button type="button" onClick={() => removeQuestion(index)}>Remove Question</button>
            )}
            </div>
        </div>
      ))}
      <div className="div">
      <button type="button" onClick={addQuestion}>Add Question</button>
      <button type="submit">Create Quiz</button>
      </div>
    </form>
    </div>
  );
}

export default CreateQuizForm;
