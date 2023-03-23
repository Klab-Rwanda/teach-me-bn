import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/teacherdash.css';
const ParentDashHome = () => {
  return (
    <div className='parent_dash'>
      {/* <h1> ggggggggggggggggggg</h1> */}
      <div className='cont1'>
      <div className='cont1_sub1'><h1>Student Progress</h1><p>here is how your child is doing in school</p><p>math-A- </p><p>english-B+</p> <p>science-B</p>    </div>
      <div className='cont1_sub2'><h1>Upcoming Event</h1><p>parent- teacher confeerence april 15 and 26</p><p>spting break -april 19 to 23</p><p>final exams -may 17 to 21</p>     </div>
      <div className='cont1_sub3'><h1>Teachers</h1>
      <ol>
      <li>muhoza</li>
      <li>muhoza</li>
      <li>muhoza</li>
      <li>muhoza</li>
      <li>muhoza</li>
      </ol>
      </div>
      </div>
      <div className='cont2'>
      <div className='cont2_sub1'><table  >
        <th colSpan={4}>recent Payments</th>
        <tr><td>knxknd</td><td>knxknd</td><td>knxknd</td><td>knxknd</td></tr>
        <tr><td>knxknd</td><td>knxknd</td><td>knxknd</td><td>knxknd</td></tr>
        <tr><td>knxknd</td><td>knxknd</td><td>knxknd</td><td>knxknd</td></tr>
        <tr><td>knxknd</td><td>knxknd</td><td>knxknd</td><td>knxknd</td></tr>
        <tr><td>knxknd</td><td>knxknd</td><td>knxknd</td><td>knxknd</td></tr>
        <tr><td>knxknd</td><td>knxknd</td><td>knxknd</td><td>knxknd</td></tr>
        <tr><td>knxknd</td><td>knxknd</td><td>knxknd</td><td>knxknd</td></tr>
        </table></div>
      <div className='cont2_sub2'><h1>Children</h1>
      <ol>
      <li>muhoza</li>
      <li>muhoza</li>
      <li>muhoza</li>
      <li>muhoza</li>
      <li>muhoza</li>
      </ol>
      </div>
      </div>
   
    </div>
  );
};

export default ParentDashHome;


