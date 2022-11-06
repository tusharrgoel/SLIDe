import React,{useState} from "react";


function Login(){
    const[username,setusername] = useState("");
    const[password,setpassword] = useState("");

    function handleusername(event){
        setusername(event.target.value);
    }
    function handlePassword(event){
        setpassword(event.target.value);
    }
 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username,password)
 }
    
    return(
    <div class="container mt-5">
  <h1>Login</h1>
  <div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">
          
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" name="username" value = {username} onChange={handleusername} />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password"name="password" value={password} onChange = {handlePassword} />
            </div>
            <button type="submit" class="btn btn-dark" onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
)}

export default Login;