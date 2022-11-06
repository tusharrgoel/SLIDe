import React from "react";
import Navbar from "./navvar";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import RegisterAdmin from "./RegisterAdmin";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App(){
    return(
        <div>

        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path= "/" element = {<h1>SLIDE HOMEPAGE</h1>}/>
            <Route path= "/registerUser" element = {<RegisterUser />} />
            <Route path= "/registerAdmin" element = {<RegisterAdmin />} />
            <Route path= "/Login" element = {<Login />} />
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;