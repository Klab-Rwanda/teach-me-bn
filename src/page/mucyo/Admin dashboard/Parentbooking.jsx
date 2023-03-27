import React, { useState } from 'react';
import '../../../css2/allparents.css';
const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send booking details to back-end or API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

      <button type="submit">Book</button>
    </form>
  );
};
export default BookingForm;
