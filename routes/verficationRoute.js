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

router.post("/attendance/:id", async (req, res, next) => {
  const id = req.params.id;
  const options = req.body.options;

  const { type } = options;

  try {
    const atendee = await Atendee.findById(id);

    if (atendee) {
      switch (type) {
        case "Atendance": {
          if (atendee.attended) {
            atendee.attended = true;
            await atendee.save();
            res.json({ msg: "Attendee marked attended", atendee });
          } else {
            res.json({ msg: "Atendee already attended", atendee });
          }
          break;
        }
        case "Food": {
          if (atendee.tookFood) {
            atendee.tookFood = true;
            await atendee.save();
            res.json({ msg: "Attendee marked tookFood", atendee });
          } else {
            res.json({ msg: "Atendee already took food", atendee });
          }
          break;
        }

        default:
          res.json({ msg: "Please specify a valid type", atendee });
          break;
      }
    } else {
      res.status(200).json({ msg: "Attendee not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({ msg: "Please check qr code" });
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
