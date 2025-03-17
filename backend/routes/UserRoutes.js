import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: "User registered successfully!", newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
