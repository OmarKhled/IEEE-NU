import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientModel = new Schema(
  {
    ip: {
      type: String,
      default: "",
    },
    os: {
      type: Object,
      default: {},
    },
    country: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
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
