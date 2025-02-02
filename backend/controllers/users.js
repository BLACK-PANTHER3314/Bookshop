const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");

module.exports.signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10); //second parameter is no. of salt added in password
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User is Created", user: newUser });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email });
    const isUser = await bcryptjs.compare(password, user.password);
    if (!user || !isUser) {
      res.status(400).json({ message: "invalid email or password" });
    }
    res.status(200).json({ message: "login successfully", user: user });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
