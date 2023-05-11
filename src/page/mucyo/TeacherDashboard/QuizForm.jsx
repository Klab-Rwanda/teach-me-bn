// import React, { useState } from "react";
// import "./quizform.css";
// function QuizPreparationForm() {
//   const [quizTitle, setQuizTitle] = useState("");
//   const [quizdescription, setquizdescription] = useState("");

//   const handleQuizTitleChange = (event) => {
//     setQuizTitle(event.target.value);
//   };

//   const handleQuizDescriptionChange = (event) => {
//     setQuizDescription(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//   };

//   return (
//     <div className="quiz_prepartion">
//     <form onSubmit={handleSubmit}>
//       <label>
//         Quiz Title:
//         <input type="text" 
//         value={quizTitle} onChange={handleQuizTitleChange}/>
//       </label>
//       <br />
//       <label>
//         Quiz Description:
//         <textarea
//           value={quizDescription}
//           onChange={handleQuizDescriptionChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//   );
// }

// export default QuizPreparationForm;

import React, { useState } from "react";
import axios from "axios";
import "./quizform.css";

function QuizPreparationForm() {
  const [quiztopic, setQuizTitle] = useState("");
  const [quizdescription, setquizdescription] = useState("");

  const handleQuizTitleChange = (event) => {
    setQuizTitle(event.target.value);
  };

  const handlequizdescriptionChange = (event) => {
    setquizdescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const quizData = {
      title: quiztopic,
      description: quizdescription,
    };

    axios
      .post("https://teachmeapi.onrender.com/api/v1/CreateQiuz", quizData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="quiz_preparation">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="quizTitle">
            Quiz Title:
          </label>
          <input
            className="form__input"
            id="quizTitle"
            type="text"
            value={quiztopic}
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


