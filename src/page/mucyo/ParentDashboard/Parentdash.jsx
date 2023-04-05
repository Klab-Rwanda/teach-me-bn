// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ParentDash() {
//   const [users, setusers] = useState([]);

//   useEffect(() => {
//     // Fetch data from API
//     console.log('Fetching data...');
//     axios.get('https://teachmeapi.onrender.com/users')
//       .then(response => {
//         console.log('Data received:', response.data.data.users);
//         setusers(response.data.data.users);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   console.log('Rendering with users:', users);

//   return (
//     <div>
//       <h2>Parent Dashboard</h2>
//       <h3>My student</h3>
//       <ul>
//         {users.map(users => (
//           <li key={users.id}>
//             <h4>fullName:{users.fullName}</h4>
//             <p>course: {users.course}</p>
//             <p>email: {users.email}</p>
//             <p>level: {users.level}</p> 
//             <p>Grade: {users.grade}</p> 
//           </li>
//         ))}
//       </ul>
      
//     </div>
//   );
// }

// export default ParentDash;
import React from 'react';
import '../../../css2/Parentdash.css';
const Parentdash = () => {
  return (
    <div className="containerdash">
      <h1>Welcome to your Parent Dashboard</h1>
      <h2>Your Child's Grades:</h2>
      <div className="table">
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grades</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Math</td>
            <td>90</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>85</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>English</td>
            <td>92</td>
            <td>97%</td>
          </tr>
        </tbody>
      </table>

      {/* <h2>Your Child's Schedule:</h2> */}
      <table>
    
        <thead>
          <tr>
            <th>Period</th>
            <th>Subject</th>
            <th>Teacher</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Math</td>
            <td>Mr. Smith</td>
            <td>8:00am - 9:00am</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Science</td>
            <td>Ms. Johnson</td>
            <td>9:05am - 10:05am</td>
          </tr>
          <tr>
            <td>3</td>
            <td>English</td>
            <td>Mr. Davis</td>
            <td>10:10am - 11:10am</td>
          </tr>
        </tbody>
        
      </table>
      </div>
         <div className="toterent">
          <div className="toterents_card">
      <h2>Upcoming Events:</h2>
      <ul>
        <li>Parent-Teacher Conference: April 15th</li>
        <li>Field trip to the zoo: May 5th</li>
        <li>School play: May 10th</li>
        <li>Science Fair: May 20th</li>
      </ul>
      </div>
      <div className="toterents_card">
      <h2>Messages:</h2>
      <ul>
        <li>Teacher Smith: Your child is doing well in class, keep up the good work!</li>
        <li>Principal Johnson: Reminder, school will be closed next Monday for Memorial Day</li>
      </ul>
  </div>
  <div className="toterents_card">
      <h2>Resources:</h2>
      <ul>
        <li>Homework assignments</li>
        <li>Recommended reading list</li>
        <li>Online learning tools</li>
      </ul>
    </div>
     </div>
    </div>
  )
}

export default Parentdash;
