import React from "react";
import "./LandingSection.css";
import contactIcons from "../../assets/ContactHeroImage.png";
import {
  FadeInFromLeft,
  FadeInFromRight,
} from "../../components/animation/animation";

const LandingSection = () => {
  const handleContactClick = (type) => {
    switch (type) {
      case "email":
        window.open("mailto:support@ambispinetechnologies.com", "_blank");
        break;
      case "phone":
        window.open("tel:+91-9658221056", "_self");
        break;
      case "chat":
        const phoneNumber = "9685221056";
        const message = "Hello, I would like to chat with you.";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
        break;

      default:
        console.log("Unknown contact method");
    }
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <FadeInFromLeft className="landing-text">
          <h1>TRANSFORMING THE FUTURE, TOGETHER</h1>
          <p>
            Please select your area of interest below. An Ambispine Technologies
            representative will contact you shortly after receiving your
            request.
          </p>
          <div className="contact-options">
            <div
              className="contact-icon email"
              onClick={() => handleContactClick("email")}
            >
              <span className="icon">@</span>
              <span>Email</span>
            </div>
            <div
              className="contact-icon phone"
              onClick={() => handleContactClick("phone")}
            >
              <span className="icon">☎</span>
              <span>Phone</span>
            </div>
            <div
              className="contact-icon chat"
              onClick={() => handleContactClick("chat")}
            >
              <span className="icon">💬</span>
              <span>Chat</span>
            </div>
          </div>
        </FadeInFromLeft>
      </div>
      <FadeInFromRight className="landing-image">
        <img src={contactIcons} alt="Contact Icons" />
      </FadeInFromRight>
    </div>
  );
};

export default LandingSection;
