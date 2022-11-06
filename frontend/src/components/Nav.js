import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
return (
    <div>
        <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/registerUser">RegisterUser</Link></li>
            <li><Link to="/registerAdmin">RegisterAdmin</Link></li>
            <li><Link to="/login"> Login</Link></li>
        </ul>
    </div>
)
}

export default Navbar;