import express from "express";
import send_contact from "../controller/contact.js";
import getAllContacts from "../controller/admin.js";

const router = express.Router();

router.get("/users", getAllContacts);
router.get("/contacts", getAllContacts);

export default router;