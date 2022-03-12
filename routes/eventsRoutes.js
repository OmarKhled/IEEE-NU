import express from "express";
import Event from "../models/eventsModel.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// @desc    Get All Events
// @route   GET /api/events
// @access  Public
router.get("/", async (req, res) => {
  try {
    const events = await Event.find({});
    res.json({ events });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  const newEvent = req.body;
  if (!newEvent) {
    res.status(400).json({ msg: "No Body" });
  }

  try {
    const events = new Event({
      title: newEvent.title,
      img: newEvent.img,
      place: newEvent.place,
      date: newEvent.date,
    });

    await events.save();

    res.json({ events });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Get Single Event
// @route   GET /api/events/:id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.json({ events: event });
    } else {
      res.status(404).json({ msg: "Not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Update Single Event
// @route   PUT /api/events/:id
// @access  Private
router.put("/:id", auth, async (req, res, next) => {
  const newEvent = req.body;

  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      res.status(404).json({ msg: "Not found" });
    }

    if (newEvent.title) event.title = newEvent.title;
    if (newEvent.date) event.date = newEvent.date;
    if (newEvent.place) event.place = newEvent.place;
    if (newEvent.img) event.img = newEvent.img;

    await event.save();
    res.json(event);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Delete Single Event
// @route   DELETE /api/events/:id
// @access  Private
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const event = await Event.findByIdAndRemove(req.params.id);
    res.json(event);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Event not found" });
  }
});

export default router;
