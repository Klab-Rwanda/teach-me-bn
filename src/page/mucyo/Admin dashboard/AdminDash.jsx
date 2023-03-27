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
    <div className='admin_all'>
    
      {/* <div></div> */}
      <h1>Welcome back, Admin!</h1>
      <p>Here are some important statistics:</p>
      <div className='admin_container'>
      <div className='admin_recent'>
      <h1>Recent activity:</h1> 
      <ul>
        <li>User John Doe created an account</li>
        <li>User Jane Smith made a purchase</li>
        <li>User Mike Johnson edited their profile</li>
      </ul></div>
      <div className='admin_users'><h1>Total Users</h1>
        <p>1000</p> 
         </div>
         <div className='admin_active'><h1>Active Users</h1>
        <p>500</p> 
         </div>
         <div className='admin_unactive'><h1>Inactive Users</h1>
        <p>500</p> 
         </div>
         <div className='admin_orders'><h1>Total Orders</h1>
        <p>5000</p> 
         </div> 
         <div className='admin_pending'><h1>Pending Orders</h1>
        <p>1000</p> 
         </div>
         <div className='admin_completed'> <h1>Completed Orders</h1>
        <p>4000</p> 
         </div>
     
      {/* <div style={{ width: '50%', margin: 'auto' }}>
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div> */}
      
    </div>
    </div>
  );
};

export default AdminDash;

