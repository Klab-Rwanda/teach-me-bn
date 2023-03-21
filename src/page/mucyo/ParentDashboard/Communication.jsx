import React, { useState } from 'react';
// import '../../../css/Communication.css';
const Communication = () => {
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [messageSubject, setMessageSubject] = useState('');

  const handleTeacherChange = (e) => {
    setSelectedTeacher(e.target.value);
  };
  const handleMessageSubjectChange = (e) => {
    setMessageSubject(e.target.value);
  };

  const handleSendMessage = () => {
    // code to send message to selected teacher with the message subject
  };

  return (
    <div>
      <h1> Direct Communication with Teacher</h1>
      <form>
        <label>
          Select a Teacher:
          <select value={selectedTeacher} onChange={handleTeacherChange}>
            <option value="">--Select a Teacher--</option>
            <option value="teacher1"> bikorimana</option>
            <option value="teacher2">Ambroise</option>
            <option value="teacher3">Habineza </option>
          </select>
        </label>
        <br />
        <label>
          Message Subject:
          <input type="text" value={messageSubject} onChange={handleMessageSubjectChange} />
        </label>
        <br />
        <button type="button" onClick={handleSendMessage}>Send Message</button>
      </form>
    </div>
  );
};

export default Communication;

