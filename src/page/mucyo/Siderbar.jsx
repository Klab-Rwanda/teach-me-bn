import React from 'react'
import '../../css/Sidebar.css';
import { BrowserRouter as Router,  Link } from "react-router-dom";
function Siderbar() {
  return (
    <div className='body1'>
    <div className='dash_container'>
        <div className='dash_container1'>
         <a href="e">Setting</a>
         <a href="e">Live Zooming</a>
         <Link  to ="./notebook">Notebook summary</Link>
         <Link  to ="./assignment">Assignmet</Link>
         <Link  to ="./quizlist">quizlist</Link>
         <Link  to ="./allAssignmentsPage">AllAssignmentsPage</Link>
         <a href="e">Marks</a>
         <a href="e">My Student</a>
         <a href="e">ClassRoom</a>
         <a href="e">Report</a>
         <a href="e">Request</a>
         <a href="e">Logout</a>
        </div>
        <div className='dash_container2'>
        </div>
        </div> 
</div>
  )
}
export default Siderbar