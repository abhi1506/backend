import React, { useEffect, useRef } from "react";
import "./MissionVisionSection.css";

const MissionVisionSection = () => {
  const sectionRef = useRef(null);

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

    const cards = document.querySelectorAll(".value-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mission-vision-section" ref={sectionRef}>
      <div className="content-container-about-mission">
        <h1 className="main-title-about-mission">
          Mission, Vision & Core Values That Drive Us Forward
        </h1>

        <p className="description-about-mission">
        Ambispine Technologies, we are committed to leveraging technology to drive business growth, efficiency, and innovation. As a trusted IT solutions provider, we empower businesses with cutting-edge solutions that shape the future.
        </p>

        <div className="values-container">
          <div className="value-card">
            <h2>Mission</h2>
            <p>
            To provide innovative, scalable, and secure IT solutions that enhance productivity, optimize operations, and accelerate digital transformation.
            </p>
          </div>

          <div className="value-card">
            <h2>Vision</h2>
            <p>
            To be a global leader in technology solutions, enabling businesses to adapt, evolve, and thrive in the ever-changing digital landscape.
            </p>
          </div>

          <div className="value-card">
            <h2>Core Values</h2>
            <p>
            We embrace innovation, strive for excellence, uphold integrity, foster collaboration, and prioritize customer-centricity to deliver impactful technology solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
