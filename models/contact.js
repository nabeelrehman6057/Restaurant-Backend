import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },

  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
    
  },
  subject: {
    type: String,
    required: true,
    minLength: [3, "subject minimum length"],
    maxLength: [40, "subject maximum length."],
  },
  message: {
    type: String,
    required: true,
    
  },
});

export const contact = mongoose.model("contact", contactSchema);

