import "./App.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import Welcome from "./Welcome";
import Teachers from "./page/Teachers";
import SingleTeachersProfile from "./page/SingleTeachersProfile";
import PopUpform from "./page/PopUpform";
import ContactFor from "./page/BLOG/ContactFor";
import Login from "./page/mucyo/Login";
import Register from "./page/mucyo/Register";
import Studentinfo from "./page/mucyo/Studentinfo";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path={"/teachers"}element={<Teachers/>} />
        <Route path={"/signin"}element={<login/>} />
        <Route path={"/teachers"}element={<Teachers/>} />
        <Route path={"/single"}element={<SingleTeachersProfile/>} />
        <Route path={"/bookform"}element={<PopUpform/>} />
        <Route path={"/contact"}element={<ContactFor/>}/>
        <Route path={"/login"}element={<Login/>}/>
        <Route path={"/register"}element={<Register/>}/>
        <Route path={"/Studentinfo"}element={<Studentinfo/>}/>
       </Routes>
     </BrowserRouter> 
    </div>
  );
}
export default App;
