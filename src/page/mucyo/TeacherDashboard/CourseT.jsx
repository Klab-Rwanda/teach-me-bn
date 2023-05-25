



import React, { useState } from "react";
import axios from "axios";
import "./Course.css";

const Course = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [modules, setModules] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleModuleCodeChange = (event, index) => {
    const newModules = [...modules];
    newModules[index].code = event.target.value;
    setModules(newModules);
  };

  const handleModuleAdd = () => {
    setModules([...modules, { title: "", description: "", code: "" }]);
  };

  const handleModuleTitleChange = (event, index) => {
    const newModules = [...modules];
    newModules[index].title = event.target.value;
    setModules(newModules);
  };

  const handleModuleDescriptionChange = (event, index) => {
    const newModules = [...modules];
    newModules[index].description = event.target.value;
    setModules(newModules);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the request payload
      const payload = {
        title,
        code,
        description,
        modules,
      };

      // Send a POST request to the API endpoint  ***** alain//
      const response = await axios.post(
        "https://teachmeapi.onrender.com/api/v1/CreateCourse",
        payload
      );

      // Handle the response from the server
      console.log("Course created successfully:", response.data);
      // TODO: Handle success, show a success message, or redirect the user
    } catch (error) {
      console.error("Error creating course:", error);
      // TODO: Handle error, show an error message to the user
    }
  };

  return (
    <div className="Course">
      <h2>Course Preparation</h2>
      <form onSubmit={handleFormSubmit}>
        <label className="label">
          Title:
          <input
            className="form input"
            type="text"
            value={title}
            onChange={handleTitleChange}
            style={{ width: "200px" }}
          />
        </label>

        <label className="label">
          Code:
          <input
            className="form input"
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            style={{ width: "200px" }}
          />
        </label>
        <br />
        <label className="label">
          Description course:
          <textarea
            className="form input"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <br />
        <h3>Modules</h3>
        {modules.map((module, index) => (
          <div key={index}>
            <label>
              Title:
              <input
                className="form input"
                type="text"
                value={module.title}
                onChange={(event) => handleModuleTitleChange(event, index)} />
            </label>
            <label>
              Code:
              <input
                className="form input"
                type="text"
                value={module.code}
                onChange={(event) => handleModuleCodeChange(event, index)} />
            </label>
            <br />
            <label>
              Description:
              <textarea
                className="form input"
                value={module.description}
                onChange={(event) =>
                  handleModuleDescriptionChange(event, index)}
              />
            </label>
            <hr />
          </div>
        ))}
        <div className="module">
          <button type="button" onClick={handleModuleAdd}>
            Add Module
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="form_button">
        <button>Free course</button>
        <button>Feature</button>
        <button>Status</button>
      </div>
    </div>
  );
};
export default Course;
