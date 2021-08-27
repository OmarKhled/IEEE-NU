import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientModel = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    os: {
      type: Object,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    paths: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Clients = mongoose.model("Clients", clientModel);

export default Clients;
