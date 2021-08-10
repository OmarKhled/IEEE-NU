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
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Members = mongoose.model("Members", membersModel);

export default Members;
