import React, { useEffect, useRef } from "react";
import "./DevelopmentSquad.css";
import { ScaleAnimation } from "../../components/animation/animation";

const DevelopmentSquad = () => {
  const squadRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".squad-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dev-squad-section" ref={squadRef}>
      <div className="squad-container">
        <h1 className="squad-title">
       Our Talented
          <span className="highlight">Development Squad </span>
        </h1>

        <div className="squad-grid">
          <ScaleAnimation className="squad-card">
            <div className="icon-container">
              <svg
                className="squad-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Innovation & Future-Ready Solutions</h3>
            <p>
            We embrace the latest technology trends to deliver scalable and future-ready solutions.
            </p>
          </ScaleAnimation>

          <ScaleAnimation className="squad-card">
            <div className="icon-container">
              <svg
                className="squad-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Expertise & Excellence</h3>
            <p>
            Our developers specialize in full-stack, cloud computing, and enterprise-grade software solutions.
            </p>
          </ScaleAnimation>

          <ScaleAnimation className="squad-card">
            <div className="icon-container">
              <svg
                className="squad-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Security & Performance</h3>
            <p>
            We prioritize cybersecurity, data protection, and seamless system integration to ensure secure and efficient business operations.
            </p>
          </ScaleAnimation>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSquad;
