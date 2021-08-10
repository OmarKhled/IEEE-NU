import express from "express";
import Members from "../models/membersModel.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// @desc    Get All Members
// @route   GET /api/members
// @access  Public
router.get("/", async (req, res) => {
  try {
    const members = await Members.find({});
    res.json({ members });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

router.post("/",  async (req, res) => {
  const members = req.body;
  if (!members) {
    res.status(400).json({ msg: "No Body" });
  }

  try {
    const members = new Members({
      name: req.body.name,
      img: req.body.img,
      role: req.body.role,
      faculty: req.body.faculty,
      facebook: req.body.facebook,
      linkedin: req.body.linkedin
    });

    await members.save();

    res.json({ members });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Get Single Member
// @route   GET /api/member/:id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const member = await Members.findById(req.params.id);
    if (member) {
      res.json({ members: member });
    } else {
      res.status(404).json({ msg: "Not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Update Single Member
// @route   PUT /api/member/:id
// @access  Private
router.put("/:id", auth, async (req, res, next) => {
  const newMember = req.body;

  try {
    const member = await Members.findById(req.params.id);

    if (!member) {
      res.status(404).json({ msg: "Not found" });
    }

    if (newMember.name) member.name = newMember.name;
    if (newMember.img) member.img = newMember.img;
    if (newMember.role) member.role = newMember.role;
    if (newMember.faculty) member.faculty = newMember.faculty;
    if (newMember.facebook) member.facebook = newMember.facebook;
    if (newMember.linkedin) member.linkedin = newMember.linkedin;

    await member.save();
    res.json(member);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Delete Single Member
// @route   DELETE /api/members/:id
// @access  Private
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const member = await Members.findByIdAndRemove(req.params.id);
    res.json(member);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Member not found" });
  }
});

export default router;
