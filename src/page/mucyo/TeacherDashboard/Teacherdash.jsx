import React from 'react'
import './Teacherdash.css'
const Teacherdash = () => {
  return (
    <div className='teacherdah'>
    
<div className="teacherdashheader">
    <div className="doctor">
    <h2>Wellcome <span>Teachers</span><small> TeachMe E-learning platform</small></h2>
    </div>
   <div className="sidelinkright">
    <a href="/">Home</a>
    <a href="">Dashboard</a>
   </div>
</div>
 <h3>See all your overview</h3>
<div className="teacherdash_cards">
    <div className="small_teacherdash_cards">
        <h1>45+</h1>
        <p>page book</p>
        <button>More info </button>
    </div>

    <div className="small_teacherdash_cards">
        <h1>7</h1>
        <p>student </p>
        <button>More info </button>
    </div>

    <div className="small_teacherdash_cards">
        <h1>7</h1>
        <p>Parent Request</p>
        <button>More info </button>
    </div>
    <div className="small_teacherdash_cards">
        <h1>7</h1>
        <p> Others parent restiomonial</p>
        <button>More info </button>
    </div>
</div>
<div className="below_all">
    <div className="latest_user">
    <h3> Lists of all student</h3> 
    <table>
  <thead>
    <tr>
      <th>Sn</th>
      <th>Student</th>
      <th>course</th>
      <th>parent</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>student</td>
      <td>mathematics</td>
      <td>parent1</td>
    
    </tr>
    <tr>
      <td>2</td>
      <td>mukm</td>
      <td>bioogy</td>
      <td>parent2</td>
    
    </tr>
    <tr>
      <td>3</td>
      <td>student</td>
      <td>english</td>
      <td>parent3</td>
   
    </tr>
  </tbody>
</table>

    </div>
    <div className="longlatest_user">
        <h3> Lastest Payment</h3> 
        <table>
  <thead>
    <tr>
      <th>User</th>
      <th>Course</th>
      <th>Amount</th>
      <th>Transaction</th>
      <th>Invoice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>React Course</td>
      <td>$50</td>
      <td>123456789</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Node.js Course</td>
      <td>$75</td>
      <td>987654321</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>Python Course</td>
      <td>$100</td>
      <td>456123789</td>
      <td>Download</td>
    </tr>
  </tbody>
</table>

    </div>
</div>

    </div>
  )
}

export default Teacherdash