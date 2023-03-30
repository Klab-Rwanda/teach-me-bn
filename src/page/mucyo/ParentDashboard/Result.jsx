import React, { useState, useEffect } from 'react';
import axios from '../../../axios/axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';

const Result = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get('/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Teacher Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map(booking => (
            <TableRow key={booking.id}>
              <TableCell>{booking.teacherName}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>{booking.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" onClick={handleRefresh}>
        Refresh
      </Button>
    </div>
  );
};
export default Result;
