const express = require("express");
const { submitForm , registerService} = require("../controllers/formController.js");

const router = express.Router();

// POST request for form submission
router.post("/formSubmission", submitForm);
// Route to handle form submission and email sending
router.post("/registerservice", registerService);


module.exports = router;









