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
      required: true,
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
    verficationEmailSent: {
      type: Boolean,
      default: false,
    },
    qrCodeEmailSent: {
      type: Boolean,
      default: false,
    },
    firstShot: {
      type: Boolean,
      default: false,
    },
    secondShot: {
      type: Boolean,
      default: false,
    },
    attended: {
      type: Boolean,
      default: false,
    },
    tookFood: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Atendee = mongoose.model("Atendees", atendeeModel);

export default Atendee;
