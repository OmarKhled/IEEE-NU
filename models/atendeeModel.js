import mongoose from "mongoose";
const Schema = mongoose.Schema;

const atendeeModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
    facebook: {
      type: String,
    },
    government: {
      type: String,
    },
    ateendeeUniversty: {
      type: String,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verficationName: {
      type: String,
      default: "",
    },
    verficationPhone: {
      type: String,
      default: "",
    },
    verficationEmail: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Atendee = mongoose.model("Atendees", atendeeModel);

export default Atendee;
