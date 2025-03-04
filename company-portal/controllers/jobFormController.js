const JobForm = require("../models/JobForm");
const cloudinary = require("cloudinary").v2;
const fs = require('fs'); 

const createJobForm = async (req, res) => {
  try {
    const { firstName, lastName, email, contact, experience, position, securityCode } = req.body;
    
    // if (!req.file) {
    //   return res.status(400).json({ error: "Resume file is required" });
    // }

    if (!firstName || !lastName || !email || !contact || !position || !securityCode) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    let resume = null;
    
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "resumes",
          resource_type: "auto"
        });

        resume = {
          public_id: result.public_id,
          url: result.secure_url
        };
      } catch (uploadError) {
        console.error("Cloudinary Upload Error:", uploadError);
        return res.status(500).json({ message: "Resume upload failed", error: uploadError.message });
      } finally {
        if (fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }
      }
    }

    const jobForm = new JobForm({
      firstName,
      lastName,
      email,
      contact,
      experience,
      position,
      securityCode,
      resume
    });

    await jobForm.save();
    res.status(201).json({ message: "Job application submitted successfully", jobForm });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists. Use another email." });
    }
    console.error("Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllJobForms = async (req, res) => {
  try {
    const jobForms = await JobForm.find().sort({ createdAt: -1 });
    res.status(200).json(jobForms);
  } catch (error) {
    console.error("Error fetching job forms:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteJobForm = async (req, res) => {
  try {
    const { id } = req.params;
    const jobForm = await JobForm.findById(id);

    if (!jobForm) {
      return res.status(404).json({ message: "Job application not found" });
    }

    if (jobForm.resume?.public_id) {
      try {
        await cloudinary.uploader.destroy(jobForm.resume.public_id);
      } catch (cloudinaryError) {
        console.error("Error deleting resume from Cloudinary:", cloudinaryError);
      }
    }

    await JobForm.findByIdAndDelete(id);
    res.status(200).json({ message: "Job application deleted successfully" });

  } catch (error) {
    console.error("Error deleting job form:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createJobForm, getAllJobForms, deleteJobForm };
