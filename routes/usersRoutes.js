import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

import auth from "../middleware/auth.js";

const router = express.Router();

// @desc    Auth User
// @route   POST /api/users
// @access  Public
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.json({ msg: "Invalid email" });
      next();
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (correctPassword) {
      jwt.sign({ id: user._id }, process.env.SECRET, (err, token) => {
        if (err) throw err;
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
      next();
    }
    next();
  })
);

// @desc    Get User Authorized
// @route   POST /api/users/auth
// @access  Private
router.get("/auth", auth, async (req, res, next) => {
  const user = req.user;
  if (!user) {
    res.status(401).json({ msg: "Invalid User" });
  }
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
});

export default router;
