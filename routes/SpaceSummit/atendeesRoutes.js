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

router.get("/length", async (req, res, next) => {
  try {
    const atendees = await Atendee.find({});
    res.json({ length: atendees.length });
  } catch (err) {
    console.log(err);
    res.json(500).json({ msg: "Server Error" });
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body.atendee;
  const options = req.body.options;
  try {
    const atendee = new Atendee(data);
    if (options.secondShot) {
      atendee.secondShot = true;
    }
    atendee.save();
    res.json({ msg: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});
export default router;
