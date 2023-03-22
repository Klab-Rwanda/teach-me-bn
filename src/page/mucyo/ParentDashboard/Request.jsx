import React from 'react'

const Request = () => {
  return (
    <div>
      <table border={1}>
        <th colSpan={5}>manage all children account</th>
        <tr>
        <td>Full Name</td>
        <td>Email</td>
        <td>Password</td>
        <td colSpan={2}>Action</td></tr>
        <tr>
        <td>Nisingize Alle</td>
        <td>parent@gmail.com</td>
        <td>12345678</td>
        <td>Update</td>
        <td>Delete</td>
        </tr>
        <tr>
        <td>Nisingize Alle</td>
        <td>parent@gmail.com</td>
        <td>12345678</td>
        <td>Update</td>
        <td>Delete</td>
        </tr>
        <tr>
        <td>Nisingize Alle</td>
        <td>parent@gmail.com</td>
        <td>12345678</td>
        <td>Update</td>
        <td>Delete</td>
        </tr>  
        <tr>
        <td>Nisingize Alle</td>
        <td>parent@gmail.com</td>
        <td>12345678</td>
        <td>Update</td>
        <td>Delete</td>
        </tr>
      </table>
    </div>
  )
}

export default Request
