import React,{useState} from "react";

function RegisterAdmin (){
        const[username,setusername] = useState("");
        const[password,setpassword] = useState("");
        const[ownerName,setOwnerName] = useState("");
        const[ownerNo,setOwnerNo] = useState("");
        const[Location,setLocation] = useState("");


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
        function handleLocation(event){
            setLocation(event.target.value);
        }
        
    async function handleSubmit(event){
      const company = {
        "Owner_Name":ownerName,
        "owner_Number" : ownerNo,
        "Location":Location,
        "Email":username,
        "Password":password
      }
        console.log(company);
        setusername("");
        setpassword("");
        setOwnerName("");
        setOwnerNo("");
        setLocation("");
        event.preventDefault();

    }
    return (
        <div class="container mt-5">
             <h1>Register</h1>

            <div class="row">
              <div class="col-sm-8">
                <div class="card">
                  <div class="card-body">   
                    <form onSubmit={handleSubmit}>
                     <div class="form-group">
                        <label for="ownerName">Name:</label>
              <input type="email" class="form-control" name="ownerName" value= {ownerName} onChange={handleownerName}/ >
                    </div>
            <div class="form-group">
              <label for="OwnerNo">Contact Number:</label>
              <input type="number" class="form-control" name="OwnerNo" value={ownerNo} onChange = {handleOwnerNo} />
            </div>
            <div class="form-group">
                        <label for="Location">Location</label>
              <input type="email" class="form-control" name="Location" value= {Location} onChange={handleLocation}/ >
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
              <input type="email" class="form-control" name="username" value= {username} onChange={handleusername}/ >
                    </div
                    >
                    <div class="form-group">
                        <label for="password">Password</label>
              <input type="password" class="form-control" name="password" value= {password} onChange={handlePassword}/ >
                    </div>
            <button type="submit" class="btn btn-dark" onClick={handleSubmit} name="Register">Register</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
    );
}

export default RegisterAdmin;