import React, { useState } from "react";
// import "../../../css2/marks.css";

const Marks = () => {
  // Set up some sample data for the marks
  const [marks, setMarks] = useState([
    { id: 1, course: "Math", subject: "Algebra", score: 85 },
    { id: 2, course: "Science", subject: "Biology", score: 90 },
    { id: 3, course: "English", subject: "Writing", score: 80 },
  ]);

  // Set up state for adding/editing marks
  const [newMark, setNewMark] = useState({
    id: null,
    course: "",
    subject: "",
    score: "",
  });
  const [editing, setEditing] = useState(false);

  // Handle form submit for adding/editing marks
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editing) {
      setMarks(marks.map((mark) => (mark.id === newMark.id ? newMark : mark)));
      setEditing(false);
    } else {
      setMarks([...marks, { ...newMark, id: marks.length + 1 }]);
    }
    setNewMark({ id: null, course: "", subject: "", score: "" });
  };

  // Handle form reset for adding/editing marks
  const handleReset = () => {
    setNewMark({ id: null, course: "", subject: "", score: "" });
    setEditing(false);
  };

  // Handle mark deletion
  const handleDeleteMark = (id) => {
    setMarks(marks.filter((mark) => mark.id !== id));
  };

  // Handle mark editing
  const handleEditMark = (mark) => {
    setNewMark(mark);
    setEditing(true);
  };

  return (
    <div className="marks">
      <h2>Marks</h2>

      <div className="filters">
        <label htmlFor="course">Course:</label>
        <select
          id="course"
          value={newMark.course}
          onChange={(event) =>
            setNewMark({ ...newMark, course: event.target.value })
          }
        >
          <option value="">Select a course</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-row">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={newMark.subject}
            onChange={(event) =>
              setNewMark({ ...newMark, subject: event.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="score">Score:</label>
          <input
            type="number"
            id="score"
            min="0"
            max="100"
            value={newMark.score}
            onChange={(event) =>
              setNewMark({ ...newMark, score: event.target.value })
            }
          />
        </div>
        <div className="form-row">
          <button type="submit">{editing ? "Save" : "Add"}</button>
          {editing && <button type="reset">Cancel</button>}
        </div>
      </form>

      <div className="mark-list">
        {marks.map((mark, index) => (
          <div className="mark" key={index}>
            <span className="subject">{mark.subject}: </span>
            <span className="score">{mark.score}</span>
            <button onClick={() => handleEditMark(index)}>Edit</button>
            <button onClick={() => handleDeleteMark(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marks;
