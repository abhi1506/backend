import React from "react";
import "./CreativeMinds.css";
import creativeMind from "../../assets/AboutDumImg.jpeg";

const CreativeMinds = () => {
  return (
    <div className="creative-minds-section">
      <div className="content-container">
        <div className="text-content">
          <h1 className="title">
          The Creative Minds at Work
            <span className="title-break">Innovators Behind the Future</span>
          </h1>

          <div className="mission-list">
            <div className="mission-item">
              <div className="mission-bar"></div>
              <div className="mission-content">
                <h3>Visionaries </h3>
                <p>
                We anticipate industry trends and shape technology-driven strategies that drive business growth and transformation.
                </p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-bar"></div>
              <div className="mission-content">
                <h3> Bringing Ideas to Life</h3>
                <p>
                Our team of engineers and designers bring innovative concepts to life through agile development and problem-solving expertise.
                </p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-bar"></div>
              <div className="mission-content">
                <h3>Thinkers Pushing Boundaries
                </h3>
                <p>
                Challenging assumptions and pushing boundaries to create innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="image-container-creative-mind">
          <img
            src={creativeMind}
            alt="Creative professional in purple blazer"
            className="feature-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeMinds;
