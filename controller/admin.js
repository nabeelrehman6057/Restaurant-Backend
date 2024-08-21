import { contact } from "../models/contact.js";





const getAllContacts = async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).json(contacts); 
  } catch (error) {
    next(error)
    
  }
};


export default getAllContacts;