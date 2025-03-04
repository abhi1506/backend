import React, { useState } from "react";
import { submitContactMessage } from "../../redux/slices/contactSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./ContactForm.css";
const ContactForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email_or_phone: "",
    company: "",
    position: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email_or_phone)
      newErrors.email_or_phone = "Email or phone is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(submitContactMessage(formData))
        .then(() => {
          toast.success("Contact submitted successfully!");
          setFormData({
            name: "",
            email_or_phone: "",
            company: "",
            position: "",
            message: "",
          });
        })
        .catch((error) => {
          toast.error(
            error?.response?.data?.message ||
              "Failed to submit contact. Please try again."
          );
        });
    }
  };

  return (
    <section className="contact-form" id="contactus1">
      <h2>Send us a message</h2>
      <form onSubmit={handleSubmit}>
        <div
          className={`form-group ${
            focusedField === "name" || formData.name ? "focused" : ""
          }`}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className={errors.name ? "error" : ""}
          />
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div
          className={`form-group ${
            focusedField === "email_or_phone" || formData.email_or_phone
              ? "focused"
              : ""
          }`}
        >
          <input
            type="text"
            id="email_or_phone"
            name="email_or_phone"
            value={formData.email_or_phone}
            onChange={handleChange}
            onFocus={() => handleFocus("email_or_phone")}
            onBlur={handleBlur}
            className={errors.email_or_phone ? "error" : ""}
          />
          <label htmlFor="email_or_phone">
            Email/Phone <span className="required">*</span>
          </label>
          {errors.email_or_phone && (
            <span className="error-message">{errors.email_or_phone}</span>
          )}
        </div>

        <div className="form-row">
          <div
            className={`form-group ${
              focusedField === "company" || formData.company ? "focused" : ""
            }`}
          >
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onFocus={() => handleFocus("company")}
              onBlur={handleBlur}
              className={errors.company ? "error" : ""}
            />
            <label htmlFor="company">
              Company <span className="required">*</span>
            </label>
            {errors.company && (
              <span className="error-message">{errors.company}</span>
            )}
          </div>

          <div
            className={`form-group ${
              focusedField === "position" || formData.position ? "focused" : ""
            }`}
          >
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              onFocus={() => handleFocus("position")}
              onBlur={handleBlur}
              className={errors.position ? "error" : ""}
            />
            <label htmlFor="position">
              Position <span className="required">*</span>
            </label>
            {errors.position && (
              <span className="error-message">{errors.position}</span>
            )}
          </div>
        </div>

        <div
          className={`form-group ${
            focusedField === "message" || formData.message ? "focused" : ""
          }`}
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            className={errors.message ? "error" : ""}
          ></textarea>
          <label htmlFor="message">
            Message <span className="required">*</span>
          </label>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
