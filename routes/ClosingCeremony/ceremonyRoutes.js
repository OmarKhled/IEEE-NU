import express from "express";
import Atendee from "../../models/closingCeremonyModel.js";

const router = express.Router();

router.get("/attendance/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const atendee = await Atendee.findById(id);

    console.log(atendee);

    if (atendee) {
      console.log(atendee.attended, "attended");
      if (!atendee.attended) {
        atendee.attended = true;
        await atendee.save();
        res.json({
          msg: "Attendee marked attended",
          atendee,
          type: "success",
        });
      } else {
        res.json({
          msg: "Attendee already attended",
          atendee,
          type: "danger",
        });
      }
    } else {
      res
        .status(200)
        .json({ msg: "Attendee not found", type: "danger", err: true });
    }
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .json({ msg: "Please check qr code", type: "danger", err: true });
  }
});
export default router;
