const express = require("express");


const { createJobForm, getAllJobForms, deleteJobForm } = require("../controllers/jobFormController");
const upload = require('../uploads/upload');
const router = express.Router();


router.post("/apply", upload.single("resume"), createJobForm);

router.get("/apply", getAllJobForms);
router.delete("/apply/:id", deleteJobForm);

module.exports = router;
