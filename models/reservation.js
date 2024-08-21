import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },

  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain 11 Digits."],
    maxLength: [11, "Phone number must contain 11 Digits."],
    
  },
  personCount: {
    type: String,
    required: true,
    minLength: [1,  "minimum person quantity ."],
    maxLength: [60, "maximum person quantity ."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

