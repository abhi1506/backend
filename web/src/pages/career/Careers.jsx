import React, { useState } from "react";
import CareerHero from "./careerHero";
import CareerBenefits from "./CareerBenefit";
import CareerPositions from "./CareerPositions";
import CareerForm from "./CareerForm";
import "./Career.css";
import JobDescriptions from "./JobDescriptions";
import CareerWithUs from "./CareerWithUs";
import Benefits from "./Benefits";
import ConsultNow from "../../components/ConsultNow/ConsultNow";
import JobApplicationForm from "./JobApplicationForm";
import CareerSupports from "./CareerSupports";

export default function Career() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showJobDescription, setShowJobDescription] = useState(false); // New state
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleApply = (position) => {
    setSelectedPosition(position);
    setShowJobDescription(true);
  };

  const handleApplyFromDescription = () => {
    setShowJobDescription(false);
    setShowApplicationForm(true);
  };

  return (
    <div className="career-container">
      <CareerHero />
      {/* <CareerBenefits /> */}
      {/* <Benefits /> */}
      <CareerSupports/>
      <CareerWithUs />
      {!showJobDescription && <CareerPositions onApply={handleApply} />}

      {showJobDescription && (
        <JobDescriptions
          job={selectedPosition}
          onApply={handleApplyFromDescription}
          onBack={() => setShowJobDescription(false)}
        />
      )}

      {showApplicationForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CareerForm
              position={selectedPosition}
              onClose={() => setShowApplicationForm(false)}
            />
          </div>
        </div>
      )}

      <div>
        <JobApplicationForm />
        <ConsultNow />
      </div>
    </div>
  );
}
