import React from "react";

const BookingDetails = ({ bookings }) => {
  return (
    <div>
      <h2>Booking Details</h2>
      <table>
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Date and Time</th>
            <th>Subject/Topic</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.teacherName}</td>
              <td>{booking.dateAndTime}</td>
              <td>{booking.subject}</td>
              <td>{booking.status}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
