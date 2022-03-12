import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventsModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("Events", eventsModel);

export default Events;
