const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/L_R_Info")
.then(()=>console.log("MongoDB Connected"));

app.post("/register", async (req,res)=>{
  const user = new User(req.body);
  try{
    await user.save();
    res.send("User Registered");
  }catch{
    res.send("Email already exists");
  }
});

app.post("/login", async (req,res)=>{
  const user = await User.findOne(req.body);
  res.send(user ? "Login Successful" : "Invalid Email or Password");
});

app.listen(5000, ()=>console.log("Server running on port 5000"));