const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/L_R_Info")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = new User({ email, password });
    await user.save();

    res.json({ message: "User Registered" });
  } catch (err) {
    res.json({ message: "Email already exists" });
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);

  res.json({
    message: user ? "Login Successful" : "Invalid Email or Password"
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
 