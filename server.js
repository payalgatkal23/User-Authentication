const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/user.js");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect("mongodb://localhost:27017/L_R_Info")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/register", async (req, res) => {
  try {
    const user = new User({ email, password });
    await user.save();
    res.send("user Registered successfully");
  } catch (error) {
    res.send("email already exist !!");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send("Login Successful");
  } else {
    res.send("Invalid Email or Password");
  }
});

app.listen(port, () => {
  console.log(`Login/register application listening on port ${port}`);
});