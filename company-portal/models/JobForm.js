const mongoose = require("mongoose");

const jobFormSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    contact: {
      type: String,
      required: [true, "Contact number is required"],
      match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
    },
    experience: {
      type: String,
      required: [true, "Experience is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    securityCode: {
      type: String,
      required: [true, "Security code is required"],
      trim: true,
    },
    resume: { 
      public_id: { type: String },
      url: { type: String, },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobForm", jobFormSchema);
