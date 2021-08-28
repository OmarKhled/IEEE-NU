import express from "express";
import Atendee from "../../models/atendeeModel.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res, next) => {
  try {
    const atendees = await Atendee.find({});
    res.json({ atendees });
  } catch (err) {
    console.log(err);
  }
});

export default router;
