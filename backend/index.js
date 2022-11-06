const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const User =  require('./model/userDb');
const Company =  require('./model/companyDb');

const { response } = require('express');
const app  = express();

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://tusharrgoel:Tushar31032002@cluster0.vxosh.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

app.post('/', function (req, res) {
  console.log("Chalu hogya vai");
});
app.post("/registerUser", async (req,res)=>{
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});
app.post("/registerAdmin", async (req,res)=>{
  let company = new Company(req.body);
  let result = await company.save();
  res.send(result);
});
app.post("/login", async(req, res) =>{
  let user = await User.findOne(req.body).select("-Password");
  if(user){
  res.send(user);
  }
  else{
    res.send({result:"no result"});
  }
});
app.post("/adminDashBoard",async (req,res)=>{
  let company=await Company.findOne(req.body);
  console.log(company);
});
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is running at port ${port}`);
});



