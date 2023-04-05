import React, { useState } from 'react';
import '../../../css/Communication.css';
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
    <div className='communication'>
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
          <textarea name="message" id="" cols="30" rows="10" value={messageSubject} onChange={handleMessageSubjectChange}></textarea>
        </label>
        <br />
        <button type="button" onClick={handleSendMessage}>Send Message</button>
      </form>
    </div>
  );
};
export default Communication;

