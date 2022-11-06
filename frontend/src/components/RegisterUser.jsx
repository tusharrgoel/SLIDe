import React,{useState} from "react";
import axios from 'axios';
import './App.css';


function RegisterUser (){
        const[username,setusername] = useState("");
        const[password,setpassword] = useState("");
        const[ownerName,setOwnerName] = useState("");
        const[ownerNo,setOwnerNo] = useState("");
        const[vehicle_Number,setVehicle_Number] = useState("");


        function handleusername(event){
            setusername(event.target.value);
        }
        function handlePassword(event){
            setpassword(event.target.value);
        }
        function handleownerName(event){
            setOwnerName(event.target.value);
        }
        function handleOwnerNo(event){
            setOwnerNo(event.target.value);
        }
        function handlevehicle_Number(event){
            setVehicle_Number(event.target.value);
        }

    async function handleClick(event){
        const user = {
          "Owner_Name":ownerName,
          "owner_Number" : ownerNo,
          "Vehicle_Number":vehicle_Number,
          "Email":username,
          "Password":password
        }
       console.log(user);
       // event.preventDefault();
        
        setusername("");
        setpassword("");
        setOwnerName("");
        setOwnerNo("");
        setVehicle_Number("");
        
    }
    
    return (
<div class="bg-gradient-primary">

    <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
          
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user" method="POST">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <label for="ownerName">Name:</label>
                                        <input class="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name" type="text" name="ownerName" value= {ownerName} onChange={handleownerName}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                  <label for="email">Email</label>
                                    <input class="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" type="email"  name="username" value= {username} onChange={handleusername}/>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                      <label for="password">Password</label>
                                        <input class="form-control form-control-user"
                                         
                                            id="exampleInputPassword" placeholder="Password"  type="password" name="password" value= {password} onChange={handlePassword}/ >
                                    </div>
                                </div>
                                <div class="form-group">
                                  <label for="vehicle_Number">Vehicle Number</label>
                                    <input class="form-control form-control-user" id="exampleVehicleNo"
                                        placeholder="Vehicle Number"  type="string" name="vehicle_Number" value= {vehicle_Number} onChange={handlevehicle_Number}/ >
                                </div>
                                <div class="form-group">
                                    <label for="OwnerNo">Contact Number:</label>
                                    <input class="form-control form-control-user" id="exampleContactNo"
                                        placeholder="Contact Number"  type="number" name="OwnerNo" value={ownerNo} onChange = {handleOwnerNo} />
                                </div>
                                
                                <hr/>
                                <button type="submit" class="btn btn-dark" onClick={handleClick} name="Register">Register</button>

                            </form>
                            <hr />
                            <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="login.html">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
)};

export default RegisterUser;
