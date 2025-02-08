const express = require("express");


const {formsubmission}= require("../controllers/formController.js")

const router = express.Router();

router.route("/formSubmission").post(formsubmission);






module.exports = router;