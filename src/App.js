import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Welcome from "./Welcome";
import Teachers from "./page/Teachers";
import SingleTeachersProfile from "./page/SingleTeachersProfile";
import PopUpform from "./page/PopUpform";
import ContactFor from "./page/BLOG/ContactFor";
import Login from "./page/mucyo/Login";
import Register from "./page/mucyo/Register";
import Parentdash from "./page/mucyo/ParentDashboard/Parentdash";
import Teacherinfo from "./page/mucyo/Teacherinfo";

import StudentAccount from "./page/mucyo/StudentAccount";
import AssignmentForm from "./page/mucyo/TeacherDashboard/Assignment";
import QuizForm from "./page/mucyo/TeacherDashboard/QuizForm";
import QuizList from "./page/mucyo/TeacherDashboard/QuizList";
import AllAssignmentsPage from "./page/mucyo/TeacherDashboard/AllAssignmentsPage";
import Shared from "./page/mucyo/ParentDashboard/Shared";


import Setting from "./page/mucyo/ParentDashboard/Setting";
import Payment from "./page/mucyo/ParentDashboard/Payment";
import Report from "./page/mucyo/ParentDashboard/Report";
import Communication from "./page/mucyo/ParentDashboard/Communication";
import Request from "./page/mucyo/ParentDashboard/Request";
import Studentinfo from "./page/mucyo/Studentinfo";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path={"/teachers"}element={<Teachers/>}/>
        <Route path={"/signin"}element={<login/>} />
        <Route path={"/teachers"}element={<Teachers/>} />
        <Route path={"/:id"}element={<SingleTeachersProfile/>}/>
        <Route path={"/bookform"}element={<PopUpform/>}/>
        <Route path={"/contact"}element={<ContactFor/>}/>
        <Route path={"/login"}element={<Login/>}/>
        <Route path={"/regiter"}element={<Register/>}/>
      
        <Route path={"/teacherinfo"}element={<Teacherinfo/>}/>
        <Route path={"/teacherinfo"}element={<Teacherinfo/>}/>

       <Route  path="/parentdashboard"   element={<Shared/> }>
        {/* <Route index   element={<Parentdash/>}/> */}
      
        <Route path={"/parentdashboard/setting"}element={<Setting/>} />
        <Route path={"/parentdashboard/account"}element={<Studentinfo/>} />
        <Route path={"/parentdashboard/payment"}element={<Payment/>} />
        <Route path={"/parentdashboard/report"}element={<Report/>} />
        <Route path={"/parentdashboard/request"}element={<Request/>} />
        <Route path={"/parentdashboard/communication"}element={<Communication/>} />
        <Route path={"students"}element={<StudentAccount/>} />
        <Route path={"assignment"}element={<AssignmentForm/>} />
        <Route path={"notebook"}element={<QuizForm/>} />
        <Route path={"quizlist"}element={<QuizList/>} />
        <Route path={"allAssignmentsPage"}element={<AllAssignmentsPage/>} />
        </Route>
       </Routes>
     </BrowserRouter> 
    </div>
  );
}
export default App;
