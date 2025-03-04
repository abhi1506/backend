import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuotation,
  clearQuotationState,
} from "../../redux/slices/quotationSlice";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import "./QuotationForm.css";

const QuotationForm = ({ onFormSubmit }) => {
  const [showForm, setShowForm] = useState(false);

  const handleConsultClick = () => {
    setShowForm((prev) => !prev);
  };

  const dispatch = useDispatch();
  const { quotation, loading, error } = useSelector(
    (state) => state.quotations
  );

  const [formData, setFormData] = useState({
    name: "",
    company_organization: "",
    email: "",
    contact: "",
    country: "",
    description: "",
    quotationOptions: {
      webDesign: false,
      webApplication: false,
      cloudSolution: false,
      otherQueries: false,
    },
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company_organization.trim()) {
      newErrors.company_organization = "Company/Organization is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    const checkboxValues = Object.values(formData.quotationOptions);
    if (!checkboxValues.includes(true)) {
      newErrors.quotationOptions = "At least one option must be selected";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      quotationOptions: { ...prev.quotationOptions, [id]: checked },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(createQuotation(formData));
      toast.success("Your Quotation submitted !");
      setFormData({
        name: "",
        company_organization: "",
        email: "",
        contact: "",
        country: "",
        description: "",
        quotationOptions: {
          webDesign: false,
          webApplication: false,
          cloudSolution: false,
          otherQueries: false,
        },
      });
      setErrors({});
      if (onFormSubmit) {
        onFormSubmit();
      }
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (quotation && !loading && !error) {
      dispatch(clearQuotationState());
    }
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [quotation, loading, error, dispatch]);

  return (
    <Fragment>
      <motion.section
        className="qf-container-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="qf-content-container">
          <motion.h2
            className="qf-header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Request for Quotation
          </motion.h2>
          <motion.p
            className="qf-description"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The purpose of this form is to give us your feedback, comments,
            reports, or problems. Your opinions are highly valued, as they help
            us improve our services.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="qf-grid">
              <div className="qf-group">
                <label htmlFor="name" className="qf-label">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="qf-input"
                  aria-label="Your Name"
                />
                {errors.name && (
                  <span className="qf-error-message">{errors.name}</span>
                )}
              </div>

              <div className="qf-group">
                <label htmlFor="company" className="qf-label">
                  Company/Organization
                </label>
                <input
                  id="company"
                  type="text"
                  name="company_organization"
                  value={formData.company_organization}
                  onChange={handleChange}
                  placeholder="Company/Organization"
                  className="qf-input"
                  aria-label="Company or Organization"
                />
                {errors.company_organization && (
                  <span className="qf-error-message">
                    {errors.company_organization}
                  </span>
                )}
              </div>

              <div className="qf-group">
                <label htmlFor="email" className="qf-label">
                  Your Email ID
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email ID"
                  className="qf-input"
                  aria-label="Your Email ID"
                />
                {errors.email && (
                  <span className="qf-error-message">{errors.email}</span>
                )}
              </div>

              <div className="qf-group">
                <label htmlFor="contact" className="qf-label">
                  Contact No.
                </label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact No."
                  className="qf-input"
                  aria-label="Contact Number"
                />
                {errors.contact && (
                  <span className="qf-error-message">{errors.contact}</span>
                )}
              </div>

              <div className="qf-group">
                <label htmlFor="country" className="qf-label">
                  Your Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="qf-select"
                  aria-label="Your Country"
                >
                  <option value="">Select Your Country</option>
                  <option value="India">India</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  <option value="USA">USA</option>
                </select>
                {errors.country && (
                  <span className="qf-error-message">{errors.country}</span>
                )}
              </div>

              <div className="qf-group qf-full-width">
                <label htmlFor="description" className="qf-label">
                  Your Requirement
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="qf-textarea"
                  placeholder="Please Describe Your Requirement"
                  aria-label="Requirement Description"
                />
                {errors.description && (
                  <span className="qf-error-message">{errors.description}</span>
                )}
              </div>

              <div className="qf-group qf-full-width">
                <h6 className="qf-checkbox-title">Need for Quotation?</h6>
                <div className="qf-checkbox-container">
                  <div className="qf-checkbox-group">
                    <input
                      type="checkbox"
                      id="webDesign"
                      className="qf-custom-checkbox"
                      checked={formData.quotationOptions.webDesign}
                      onChange={handleCheckboxChange}
                      aria-label="Web Designing"
                    />
                    <label htmlFor="webDesign" className="qf-checkbox-label">
                      Web Designing
                    </label>
                  </div>
                  <div className="qf-checkbox-group">
                    <input
                      type="checkbox"
                      id="webApplication"
                      className="qf-custom-checkbox"
                      checked={formData.quotationOptions.webApplication}
                      onChange={handleCheckboxChange}
                      aria-label="Mobile Application"
                    />
                    <label
                      htmlFor="webApplication"
                      className="qf-checkbox-label"
                    >
                      Mobile Application
                    </label>
                  </div>
                  <div className="qf-checkbox-group">
                    <input
                      type="checkbox"
                      id="cloudSolution"
                      className="qf-custom-checkbox"
                      checked={formData.quotationOptions.cloudSolution}
                      onChange={handleCheckboxChange}
                      aria-label="Cloud Solution"
                    />
                    <label
                      htmlFor="cloudSolution"
                      className="qf-checkbox-label"
                    >
                      Cloud Solution
                    </label>
                  </div>
                  <div className="qf-checkbox-group">
                    <input
                      type="checkbox"
                      id="otherQueries"
                      className="qf-custom-checkbox"
                      checked={formData.quotationOptions.otherQueries}
                      onChange={handleCheckboxChange}
                      aria-label="Other Queries"
                    />
                    <label htmlFor="otherQueries" className="qf-checkbox-label">
                      Other Queries
                    </label>
                  </div>
                </div>
                {errors.quotationOptions && (
                  <p className="qf-error-message">{errors.quotationOptions}</p>
                )}
              </div>

              <div className="qf-submit-container">
                <motion.button
                  type="submit"
                  className="qf-submit-button"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? (
                    <div className="qf-loading-spinner">
                      <div className="qf-spinner"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.section>
    </Fragment>
  );
};

export default QuotationForm;
