import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import auth from "../middleware/auth.js";

const router = express.Router();

// @desc    Auth User
// @route   POST /api/users
// @access  Public
router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.json({ msg: "Invalid email" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (correctPassword) {
      jwt.sign({ id: user._id }, process.env.SECRET, (err, token) => {
        if (err) {
          console.log(err);
          throw err;
        }
        res.set("Content-Type", "application/json");
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: token,
          },
        });
      });
    } else {
      res.json({
        msg: "Invalid password",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @desc    Get User Authorized
// @route   POST /api/users/auth
// @access  Private
router.get("/auth", auth, async (req, res, next) => {
  const user = req.user;
  if (!user) {
    res.status(401).json({ msg: "Invalid User" });
  }
  try {
    const dbUser = await User.findById({ _id: user.id }).select("-password");
    if (!dbUser) {
      res.json({ msg: "Invalid cridintials" });
    }
    res.json({
      user: {
        name: dbUser.name,
        email: dbUser.email,
        id: dbUser._id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
