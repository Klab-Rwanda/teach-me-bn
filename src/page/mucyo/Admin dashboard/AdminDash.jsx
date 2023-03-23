import React from 'react';
import { Bar } from 'react-chartjs-2';
import './admindash.css';
const AdminDash = () => {
  // const chartData = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  //   datasets: [
  //     {
  //       label: 'Number of Orders',
  //       data: [12, 19, 3, 5, 2, 3, 10],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //         'rgba(255, 99, 132, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //         'rgba(255, 99, 132, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div>
      <h2>Welcome back, Admin!</h2>
      <p>Here are some important statistics:</p>
      <ul>
        <li>Total number of users: 1000</li>
        <li>Number of active users: 500</li>
        <li>Number of inactive users: 500</li>
        <li>Total number of orders: 5000</li>
        <li>Number of pending orders: 1000</li>
        <li>Number of completed orders: 4000</li>
      </ul>
      {/* <div style={{ width: '50%', margin: 'auto' }}>
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div> */}
      <p>Recent activity:</p>
      <ul>
        <li>User John Doe created an account</li>
        <li>User Jane Smith made a purchase</li>
        <li>User Mike Johnson edited their profile</li>
      </ul>
    </div>
  );
};

export default AdminDash;

