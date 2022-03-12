import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const atendeeModel = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Organization: {
      type: String,
      required: true,
    },
    Member: {
      type: Boolean,
      required: true,
    },
    MemberId: {
      type: String,
      default: '',
    },
    Vaccine: {
      type: Boolean,
      required: true,
    },
    VaccineState: {
      type: String,
      required: true,
    },
    qrCodeEmailSent: {
      type: Boolean,
      default: false,
    },
    attended: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Atendee = mongoose.model('ClosingCeremony', atendeeModel);

export default Atendee;
