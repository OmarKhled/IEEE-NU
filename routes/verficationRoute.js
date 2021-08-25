import express from "express";
import Atendee from "../models/atendeeModel.js";
Atendee;

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const atendee = await Atendee.findById(id);

    if (atendee) {
      res.json(atendee);
    } else {
      res.status(404).json({ msg: "Not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/:id", async (req, res, next) => {
  const { name, phone, email } = req.body.atendee;

  const id = req.params.id;

  try {
    const atendee = await Atendee.findById(id);

    if (atendee) {
      atendee.verified = true;
      atendee.verficationName = name;
      atendee.verficationPhone = phone;
      atendee.verficationEmail = email;

      await atendee.save();
      res.json({ msg: "success" });
    } else {
      res.status(404).json({ msg: "Not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
