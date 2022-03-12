import express from "express";
import Applicants from "../../models/recruitmentModel.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

// @desc    Get All Applicants
// @route   GET /api/recruitment
// @access  Private
router.get("/", auth, async (req, res, next) => {
  try {
    const applicants = await Applicants.find({}).select({
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    });
    res.json({ applicants });
  } catch (err) {
    console.log(err);
  }
});

// @desc    Get All Applicants
// @route   GET /api/recruitment
// @access  Private
router.get("/:id", auth, async (req, res, next) => {
  try {
    const applicant = await Applicants.findById(req.params.id).select({
      updatedAt: 0,
      __v: 0,
    });
    res.json({ applicant });
  } catch (err) {
    console.log(err);
  }
});

// @desc    Get All Appl
// @route   GET /api/events
// @access  Public
router.post("/", async (req, res) => {
  const data = req.body;
  if (!data) {
    res.status(400).json({ msg: "No data Found" });
  }

  try {
    const application = new Applicants({
      data,
    });

    await application.save();

    res.json({ application });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Remove Applicant
// @route   GET /api/events
// @access  Protected
router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;
  const deleted = await Applicants.findByIdAndDelete(id);

  if (deleted) {
    res.status(200).json({ msg: "Deleted" });
  } else {
    res.status(404).json({ msg: "Not found" });
  }
});

export default router;
