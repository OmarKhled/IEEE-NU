import mongoose from "mongoose";

const Schema = mongoose.Schema;

const membersModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Members = mongoose.model("Members", membersModel);

export default Members;
