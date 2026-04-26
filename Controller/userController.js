const User = require("../models/user");

// Register
exports.registerUser = async (req, res) => {
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
};

// Login
exports.loginUser = async (req, res) => {
  const user = await User.findOne(req.body);

  res.json({
    message: user ? "Login Successful" : "Invalid Email or Password"
  });
};