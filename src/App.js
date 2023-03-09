import "./App.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import Welcome from "./Welcome";
import Teachers from "./page/Teachers";
import SingleTeachersProfile from "./page/SingleTeachersProfile";
import PopUpform from "./page/PopUpform";
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
       </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
