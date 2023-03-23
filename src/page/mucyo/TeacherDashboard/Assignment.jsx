import React, { useState } from 'react';
import axios from 'axios';
// import '../../css/Asssignment.css';

function AssignmentForm({ onSave }) {
  const [image, setImage] = useState(null);
  const [assignmentName, setAssignmentName] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [maxmarks, setMaxMarks] = useState('');
  const [submitiontype, setSubmissionType] = useState('');
  const [contentofcourse, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('assignmentName', assignmentName);
      formData.append('publishDate', publishDate);
      formData.append('courseName', courseName);
      formData.append('courseCategory', courseCategory);
      formData.append('maxmarks', maxmarks);
      formData.append('submitiontype', submitiontype);
      formData.append('contentofcourse', contentofcourse);
  
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
  
      await axios.post('https://teachmeapi.onrender.com/api/v1/createAssignment', formData, config);
      setImage(null);
      setAssignmentName('');
      setPublishDate('');
      setCourseName('');
      setCourseCategory('');
      setMaxMarks('');
      setSubmissionType('');
      setContent('');
      setError('');
      setSuccess('Assignment created successfully!');
      e.target.reset(); // reset the form
    
       // Reset the form after 2 seconds

       setTimeout(() => {
        setSuccess(''); 
        e.target.reset(); 
      }, 5000); 
      
      // Add the following line after the setTimeout function to automatically clear the success message when the user clicks on it
      setTimeout(() => {
        setSuccess('');
      }, 1000); 

    } catch (error) {
        setError('Error creating assignment. Please try again later.');
        setSuccess('');
      }
  }
  
  return (
    <form onSubmit={handleSubmit}>
     {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <h2>Create Assignment</h2>
      <div>
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div>
        <label>Assignment Name:</label>
        <input type="text" value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)} />
      </div>
      <div>
        <label>Publish Date:</label>
        <input type="date" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
      </div>
      <div>
        <label>Course Name:</label>
        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      </div>
      <div>
        <label>Course Category:</label>
        <input type="text" value={courseCategory} onChange={(e) => setCourseCategory(e.target.value)} />
      </div>
      <div>
        <label>Maximum Marks:</label>
        <input type="number" value={maxmarks} onChange={(e) => setMaxMarks(e.target.value)} />
      </div>
      <div>
        <label>Submission Type:</label>
        <select value={submitiontype} onChange={(e) => setSubmissionType(e.target.value)}>
          <option value="">Select a submission type</option>
          <option value="online">Online submission</option>
          <option value="offline">Offline submission</option>
        </select>
      </div>
      <div>
        <label>Content:</label>
        <textarea value={contentofcourse} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <button type="submit">SEND</button>
    </form>
  );
}
export default AssignmentForm;



