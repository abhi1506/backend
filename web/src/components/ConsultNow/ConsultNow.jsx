import React, { Fragment, useState } from "react";
import "./ConsultNow.css";
import consultMeet from "../../assets/consultNowImage.png";
import QuotationForm from "../form/QuotationForm";
import {
  AnimatedCardList,
  AnimatedCard,
  FadeInFromLeft,
  FadeInFromRight,
} from "../animation/animation";

const ConsultNow = () => {
  const [showForm, setShowForm] = useState(false);

  const handleConsultClick = () => {
    setShowForm((prev) => !prev);
  };

  // Callback function to close the form
  const handleFormSubmit = () => {
    setShowForm(false);
  };

  return (
    <Fragment>
      <div className="hero-container-consult">
        <FadeInFromLeft className="hero-content-consult">
          <h1 className="hero-title-consult">
            Powering Business Growth with Innovative IT Solutions
          </h1>
          <p className="hero-description-consult">
            Our commitment to innovation and excellence drives everything we do.
            We deliver tailored IT solutions that optimize efficiency,
            accelerate growth, and give your business a competitive edge in
            today’s digital landscape.
          </p>
          <button className="hero-button-consult" onClick={handleConsultClick}>
            {showForm ? "Close Form" : "Get Free Consultation"}
          </button>
        </FadeInFromLeft>
        <FadeInFromLeft className="hero-image-container-consult">
          <img
            src={consultMeet}
            alt="IT Professional Working"
            className="hero-image-consult"
          />
        </FadeInFromLeft>
      </div>
      {showForm && <QuotationForm onFormSubmit={handleFormSubmit} />}
    </Fragment>
  );
};

export default ConsultNow;
