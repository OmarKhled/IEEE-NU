import express from "express";
import Event from "../models/eventsModel.js";
import asyncHandler from "express-async-handler";

import auth from "../middleware/auth.js";

const router = express.Router();

// @desc    Get All Events
// @route   GET /api/events
// @access  Public
router.get("/", async (req, res) => {
  const events = await Event.find({});
  res.json({ events });
});

router.post(
  "/",
  auth,
  asyncHandler(async (req, res) => {
    const newEvent = req.body;
    if (!newEvent) {
      res.status(400).json({ msg: "No Body" });
    }

    const events = new Event({
      title: newEvent.title,
      img: newEvent.img,
      place: newEvent.place,
      date: newEvent.date,
    });

    await events.save();

    res.json({ events });
  })
);

// @desc    Get Single Event
// @route   GET /api/events/:id
// @access  Public
router.get("/:id", async (req, res) => {
  const events = await Event.findById(req.params.id);
  res.json({ events });
});

// @desc    Update Single Event
// @route   PUT /api/events/:id
// @access  Private
router.put(
  "/:id",
  auth,
  asyncHandler(async (req, res, next) => {
    const newEvent = req.body;
    const event = await Event.findById(req.params.id);

    if (newEvent.title) event.title = newEvent.title;
    if (newEvent.date) event.date = newEvent.date;
    if (newEvent.place) event.place = newEvent.place;
    if (newEvent.img) event.img = newEvent.img;

    await event.save();
    res.json(event);
  })
);

// @desc    Delete Single Event
// @route   DELETE /api/events/:id
// @access  Private
router.delete(
  "/:id",
  auth,
  asyncHandler(async (req, res, next) => {
    const event = await Event.findByIdAndRemove(req.params.id);
    res.json(event);
  })
);

export default router;
