import ErrorHandler from "../middlewares/error.js";
import { contact } from "../models/contact.js";



const send_contact = async (req, res, next) => {
  const { name, email, subject, message} = req.body;
  if (!name || !email || !subject || !message) {
    return next(new ErrorHandler("Please Fill Full contact Form!", 400));
  }


  try {
    await contact.create({ name, email, subject, message });
    res.status(201).json({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_contact;