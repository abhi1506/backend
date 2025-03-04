import React, { useState, useEffect, useRef } from "react";
import { Upload, AlertCircle, RefreshCcw } from "lucide-react";
import "./JobApplicationForm.css";
import { useDispatch, useSelector } from "react-redux";
import { applyJob, clearJobState } from "../../redux/slices/applyJobSlice";
import { toast } from "react-toastify";

const JobApplicationForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.applyJob);

  const generateRandomCode = () => Math.floor(10000 + Math.random() * 90000).toString();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    experience: "",
    position: "",
    securityCode: generateRandomCode(),
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        experience: "",
        position: "",
        securityCode: generateRandomCode(),
        resume: null,
      });
      dispatch(clearJobState());
    }

    if (error) {
      toast.error(error || "Something went wrong while applying.");
    }
  }, [success, error, dispatch]);
  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Invalid phone number (10 digits required)";
    }
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const jobData = new FormData();
      Object.keys(formData).forEach((key) => {
        jobData.append(key, formData[key]);
      });
  
      try {
        await dispatch(applyJob(jobData)).unwrap();
        toast.success("submitted.. !");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to submit job application.");
      }
    }
  };
  

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      experience: "",
      position: "",
      securityCode: generateRandomCode(),
      resume: null,
    });
    setErrors({});
  };

  return (
    <div className="form-container-extra">
      <div className="form-header-extra">
        <h1>Fill the Form</h1>
        <p>
          At Ambispine Technologies Inc., we are having a lot of exciting IT
          career opportunities in various relevant sectors.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-grid">
        <div className="form-field-extra full-width">
  <input
    type="text"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    placeholder="First Name"
    className={errors.firstName ? "error" : ""}
  />
  {errors.firstName && (
    <span className="error-message">
      <AlertCircle size={16} /> {errors.firstName}
    </span>
  )}
</div>
          {["lastName", "email", "contact", "experience"].map((field) => (
            <div key={field} className="form-field-extra">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                className={errors[field] ? "error" : ""}
              />
              {errors[field] && (
                <span className="error-message">
                  <AlertCircle size={16} /> {errors[field]}
                </span>
              )}
            </div>
          ))}
<div className="form-field-extra full-width">
  <input
    type="text"
    name="position"
    value={formData.position}
    onChange={handleChange}
    placeholder="Position"
    className={errors.position ? "error" : ""}
  />
  {errors.position && (
    <span className="error-message">
      <AlertCircle size={16} /> {errors.position}
    </span>
  )}
</div>
          {/* Security Code */}
          <div className="form-field-extra">
            <div className="security-code-wrapper">
              <input type="text" value={formData.securityCode} readOnly className="security-code" />
              <label>Security Code</label>
              <RefreshCcw
                size={20}
                color="blue"
                style={{ cursor: "pointer", marginLeft: "8px" }}
                onClick={() => setFormData({ ...formData, securityCode: generateRandomCode() })}
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="form-field-extra">
            <div className="file-upload">
              <input
                type="file"
                id="resume"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
              />
              <label htmlFor="resume" className="file-label">
                <Upload size={20} />
                {formData.resume ? formData.resume.name : "Choose Resume/CV"}
              </label>
              {errors.resume && (
                <span className="error-message">
                  <AlertCircle size={16} /> {errors.resume}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions-extra">
          <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
