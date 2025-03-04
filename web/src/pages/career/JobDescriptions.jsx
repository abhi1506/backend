import React, { useEffect, useState } from "react";
import "./JobDescriptions.css";
import CareerForm from "./CareerForm";
import JobDescriptionImg from "../../assets/descriptionImage.png";
import { FaUserLarge, FaArrowsRotate, FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BsFillLayersFill } from "react-icons/bs";
import { fetchCareerById } from "../../redux/admin/slice/careerAdminSlice";
import { useDispatch, useSelector } from "react-redux";

export default function JobDescriptions({ job, onBack }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const { selectedCareer, loading, error } = useSelector(
    (state) => state.careerAdmin
  );

  useEffect(() => {
    if (job) {
      dispatch(fetchCareerById(job));
    }
  }, [dispatch, job]);

  const handleApplyNow = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>Error fetching job details: {error}</p>;

  const {
    jobTitle = "Job Title",
    jobDescription = "Job description goes here.",
    requirements = {},
    openings = "N/A",
    salaryRange = "N/A",
    location = "Location not specified",
    responsibilities = [],
  } = selectedCareer?.data || {};

  return (
    <div className="job-descriptions-container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="w-100">
            <div className="job-details">
              <h4 className="job-title">{jobTitle}</h4>
              <p
                className="job-description text-left"
                style={{ color: "#fff" }}
              >
                {jobDescription}
              </p>
            </div>

            <div className="job-details-container">
              <div className="d-flex  justify-content-between">
                <div className="job-info-item">
                  <p>
                    <IoTimeSharp className="job-icon" /> Experience
                  </p>
                  <span className="info-value">
                    {requirements.experience || "Not specified"}
                  </span>
                </div>

                <div className="job-info-item">
                  <p>
                    <FaUserLarge className="job-icon" /> Openings
                  </p>
                  <span className="info-value">{openings}</span>
                </div>

                <div className="job-info-item me-4">
                  <p>
                    <RiMoneyRupeeCircleFill className="job-icon" /> Salary
                  </p>
                  <span className="info-value">{salaryRange}</span>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="job-info-item">
                  <p>
                    <FaArrowsRotate className="job-icon" /> Interview Process
                  </p>
                  <span className="info-value">
                    {selectedCareer?.data?.interviewProcess ||
                      "Process details not available"}
                  </span>
                </div>

                <div className="job-info-item">
                  <p>
                    <FaLocationDot className="job-icon" /> Job Location
                  </p>
                  <span className="info-value">{location}</span>
                </div>

                <div className="job-info-item"></div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="job-info-item">
                  <p>
                    <BsFillLayersFill className="job-icon" /> Education
                  </p>
                  <span className="info-value">
                    {requirements.education || "Not specified"}
                  </span>
                </div>
              </div>
            </div>

            <div className="responsibilities-section">
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-list">
                {responsibilities.length > 0 ? (
                  responsibilities.map((resp, index) => (
                    <li key={index} className="responsibility-item">
                      {resp}
                    </li>
                  ))
                ) : (
                  <li className="no-responsibility-item">
                    No specific responsibilities listed
                  </li>
                )}
              </ul>
            </div>

            <div className="button-group d-flex justify-content-center gap-3 mt-4">
              <button
                className="apply-btn fw-bold py-3 px-4"
                onClick={handleApplyNow}
              >
                Apply Now
              </button>
              <button className="back-btn fw-bold py-3 px-4" onClick={onBack}>
                Back to Positions
              </button>
            </div>

            {isFormOpen && (
              <CareerForm position={job} onClose={handleCloseForm} />
            )}
          </div>
        </div>

        <div className="col-12 col-lg-6 my-auto">
          <div className="job-img-container">
            <img
              src={JobDescriptionImg}
              alt="Job Description"
              className="job_description_img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
