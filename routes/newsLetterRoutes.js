import express from "express";
import NewsLetter from "../models/mailLetterModel.js";

const router = express.Router();

// @desc    Get All Events
// @route   GET /api/events
// @access  Public
router.post("/", async (req, res) => {
  const email = req.body.email;
  if (!email) {
    res.status(400).json({ msg: "No Email Found" });
  }

  try {
    const newsLetter = new NewsLetter({
      email,
    });

    const found = await NewsLetter.find({ email: email });

    if (!found) {
      await newsLetter.save();
    }

    res.json({ newsLetter });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
