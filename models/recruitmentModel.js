import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recruitmentModel = new Schema(
  {
    data: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Applicants = mongoose.model("RecrutmentApplicants", recruitmentModel);

export default Applicants;
