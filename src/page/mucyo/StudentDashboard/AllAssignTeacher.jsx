import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./AllAssignTeacher.css";

const AllAssignTeacher = () => {
  const [Assignment, setAssignments] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  useEffect(() => {
    axios
      .get("https://teachmeapi.onrender.com/api/v1/getAllAssignment ")
      .then((response) => {
        setAssignments(response.data.Assignment);
           console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClose = () => setShow(false);

  const handleShow = (Assignment) => {
    setSelectedAssignment(Assignment);
    setShow(true);
  };

const  handleAttempt  =async(id) => {
    
    try  {
        
        const res = await axios.post(
          `https://teachmeapi.onrender.com/api/v1/attemptreq/${id}`,
          { data: "" },
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        window.location.href= "/attempt/assignment";
    }
    catch(error){
        console.log(error)
    }
}

  return (
    <div className="assignments-container">
      <h2 className="page-title">All Assignment Posts</h2>
      <ul className="assignments-list">
        {Assignment?.map((Assignment) => (
          <li key={Assignment?._id} className="assignment-item">
            <h3>{Assignment?.assignmentName}</h3>
            <p>{Assignment?.contentofcourse}</p>
            <p>{Assignment?.courseCategory}</p>
            <p>{Assignment?.courseName}</p>
            <a href={Assignment?.image}>
              {" "}
              <button>open the book </button>
            </a>

            <p>{Assignment?.maxmarks}</p>
            <p>{Assignment?.publishDate}</p>
            <p>{Assignment?.submitiontype}</p>
            <button
              className="attempt-button"
              onClick={() => handleShow(Assignment)}
            >
              Attempt
            </button>
          </li>
        ))}
      </ul>

      {selectedAssignment && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedAssignment.assignmentName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedAssignment.contentofcourse}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => handleAttempt(Assignment?._id)}
            >
              Attempt
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AllAssignTeacher;
