import mongoose from "mongoose";
const Schema = mongoose.Schema;

const atendeeModel = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Atendee = mongoose.model("NewsLetter", atendeeModel);

export default Atendee;
