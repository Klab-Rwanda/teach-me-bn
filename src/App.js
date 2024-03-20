import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Teachers from "./page/mucyo/Admin dashboard/Teachers";
import Approvedteachers from "./page/mucyo/Admin dashboard/Approvedteachers";
import SingleTeachersProfile from "./page/SingleTeachersProfile";
import PopUpform from "./page/PopUpform";
import ContactFor from "./page/BLOG/ContactFor";
import Login from "./page/mucyo/Login";

// import Approvedteachers from "./page/mucyo/Approvedteachers";
import Register from "./page/mucyo/Register";
import Parentdash from "./page/mucyo/ParentDashboard/Parentdash";
import Teacherinfo from "./page/mucyo/Teacherinfo";

import StudentAccount from "./page/mucyo/StudentAccount";
import AssignmentForm from "./page/mucyo/TeacherDashboard/Assignment";
import QuizForm from "./page/mucyo/TeacherDashboard/QuizForm";
import QuizList from "./page/mucyo/TeacherDashboard/QuizList";
import AllAssignmentsPage from "./page/mucyo/TeacherDashboard/AllAssignmentsPage";
import Shared from "./page/mucyo/ParentDashboard/Shared";
import SharedT from "./page/mucyo/TeacherDashboard/SharedT";

import Settinge from "./page/mucyo/StudentDashboard/Settinge";
import Myquiz from "./page/mucyo/StudentDashboard/Myquiz";
import Anatyics from "./page/mucyo/StudentDashboard/Anatyics";
import Coursestude from "./page/mucyo/StudentDashboard/Coursestude";
import Payment from "./page/mucyo/ParentDashboard/Payment";
import Report from "./page/mucyo/ParentDashboard/Report";
import Communication from "./page/mucyo/ParentDashboard/Communication";
import Request from "./page/mucyo/ParentDashboard/Result";
import Manage from "./page/mucyo/ParentDashboard/Manage";
import Studentinfo from "./page/mucyo/Studentinfo";
import Teacherdash from "./page/mucyo/TeacherDashboard/Teacherdash";
import SharedA from "./page/mucyo/Admin dashboard/SharedA";
import SharedSt from "./page/mucyo/StudentDashboard/SharedSt";
import AdminDash from "./page/mucyo/Admin dashboard/AdminDash";
import StudentDash from "./page/mucyo/StudentDashboard/StudentDash";
import Support from "./page/mucyo/Admin dashboard/Support";
import User from "./page/mucyo/Admin dashboard/User";
import Allapplication from "./page/mucyo/Admin dashboard/Allapplication";

import AllAssignTeacher from "./page/mucyo/StudentDashboard/AllAssignTeacher";
import Zoom from "./page/mucyo/StudentDashboard/Zoom";
import Zoome from "./page/mucyo/TeacherDashboard/Zoome";
import CourseT from "./page/mucyo/TeacherDashboard/CourseT";
import Course from "./page/mucyo/TeacherDashboard/CourseT";
import Marks from "./page/mucyo/TeacherDashboard/Marks";
import Mystudent from "./page/mucyo/TeacherDashboard/Mystudent";
import Profile from "./page/mucyo/TeacherDashboard/Coursetechers";

import Parentbooking from "./page/mucyo/Admin dashboard/Parentbooking";
import StudentApplication from "./page/mucyo/Admin dashboard/StudentApplication";
import Paymentmanage from "./page/mucyo/Admin dashboard/Paymentmanage";
import Result from "./page/mucyo/ParentDashboard/Result";
import ProtectDash from "./context/ProtectDash";
import Protectedstudent from "./context/Protectedstudent";
import ControlsUsers from "./context/ControlsUsers";
import LoginPortal from "./page/LoginPortal";
import Attempts from "./page/mucyo/StudentDashboard/Attempts";
function App() {
  const [name, setName] = useState(false);
  console.log(name);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name={name} setName={setName} />} />
          <Route
            path={"/signin"}
            element={<login name={name} setName={setName} />}
          />
          <Route
            path={"/loginpportal"}
            element={<LoginPortal name={name} setName={setName} />}
          />
          <Route path={"/attempt/assignment"} element={<SharedSt />} />
          <Route path={"/approvedteachers"} element={<Approvedteachers />} />
          <Route path={"/:id"} element={<SingleTeachersProfile />} />
          <Route path={"/bookform"} element={<PopUpform />} />
          <Route path={"/contact"} element={<ContactFor />} />
          <Route
            path={"/login"}
            element={<Login name={name} setName={setName} />}
          />
          <Route path={"/regiter"} element={<Register />} />

          {/* <Route path={"/teacherinfo"} element={<Teacherinfo />} /> */}

          <Route
            path={"/teacherinfo"}
            element={
              <ControlsUsers>
                <Teacherinfo />
              </ControlsUsers>
            }
          />
          <Route path="/parentdashboard" element={<Shared />}>
            <Route index element={<Parentdash />} />
            <Route path={"parentdashboard/account"} element={<Studentinfo />} />
            <Route path={"/parentdashboard/payment"} element={<Payment />} />
            <Route path={"/parentdashboard/report"} element={<Report />} />
            <Route path={"/parentdashboard/request"} element={<Request />} />
            <Route
              path={"/parentdashboard/communication"}
              element={<Communication />}
            />
            <Route path={"/parentdashboard/manage"} element={<Manage />} />
            <Route path={"/parentdashboard/response"} element={<Result />} />
            <Route
              path={"/parentdashboard/approvedteachers"}
              element={<Approvedteachers />}
            />
            <Route path={"students"} element={<StudentAccount />} />
          </Route>

          <Route
            path={"/TeacherDashboard"}
            element={
              <ProtectDash>
                <SharedT />
              </ProtectDash>
            }
          >
            <Route index element={<Teacherdash />} />
            <Route
              path={"/TeacherDashboard/assignment"}
              element={<AssignmentForm />}
            />
            <Route path={"/TeacherDashboard/notebook"} element={<QuizForm />} />
            <Route path={"/TeacherDashboard/quizlist"} element={<QuizList />} />
            <Route
              path={"/TeacherDashboard/allAssignmentsPage"}
              element={<AllAssignmentsPage />}
            />
            <Route path={"/TeacherDashboard/zoom"} element={<Zoome />} />
            <Route path={"/TeacherDashboard/course"} element={<CourseT />} />
            <Route path={"/TeacherDashboard/marks"} element={<Marks />} />
            <Route
              path={"/TeacherDashboard/mystudent"}
              element={<Mystudent />}
            />
            <Route path={"/TeacherDashboard/account"} element={<Profile />} />
          </Route>

          <Route path={"/admindashboard"} element={<SharedA />}>
            <Route index element={<AdminDash />} />
            <Route path={"/admindashboard/Teachers"} element={<Teachers />} />
            <Route path={"/admindashboard/support"} element={<Support />} />
            <Route path={"/admindashboard/user"} element={<User />} />
            <Route
              path={"/admindashboard/Allapplication"}
              element={<Allapplication />}
            />
            <Route
              path={"/admindashboard/Parentbooking"}
              element={<Parentbooking />}
            />
            <Route
              path={"/admindashboard/StudentApplication"}
              element={<StudentApplication />}
            />
            <Route
              path={"/admindashboard/Paymentmanage"}
              element={<Paymentmanage />}
            />
          </Route>

          {/*     student dashard */}

          <Route path={"/studentdashboard"} element={<SharedSt />}>
            <Route index element={<StudentDash />} />
            <Route
              path={"/studentdashboard/assignmentteachers"}
              element={<AllAssignTeacher />}
            />
            <Route path={"/studentdashboard/zoom"} element={<Zoom />} />
            <Route path={"/studentdashboard/setting"} element={<Settinge />} />
            <Route path={"/studentdashboard/myquiz"} element={<Myquiz />} />
            <Route path={"/studentdashboard/anatyics"} element={<Anatyics />} />
            <Route path={"/studentdashboard/Attemts"} element={<Attempts />} />
            {/* <Route path={"/studentdashboard/courses"}element={<Course/>} /> */}
            <Route
              path={"/studentdashboard/amasomo"}
              element={<Coursestude />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
