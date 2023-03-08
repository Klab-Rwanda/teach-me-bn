import "./App.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import Welcome from "./Welcome";
import Teachers from "./page/Teachers";

function App() {
  return (
  
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path={"/teachers"}element={<Teachers/>} />
        <Route path={"/signin"}element={<login/>} />
        <Route path={"/teachers"}element={<Teachers/>} />
       </Routes>
     </BrowserRouter>
    </div>
   
  );
}
export default App;
