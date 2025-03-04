
import React from "react";
import spreadproduct from "./../../assets/content-5.jpeg";
import "./SpreadSecondSection.css";
import revImg1 from "../../assets/content/rev-1.png"
import revImg2 from "../../assets/content/rev-2.png"
import spreadGif from "../../assets/content/spreadGif.gif"
export default function SpreadSecondSection() {
  return (
    <section className="spread-container">
      {/* Second Section */}
      <div className="spread-second-section">
        <div className="spread-second-section-left">
          <h1 className="spread-second-section-header">
            Explore what's <br /> possible <br /> with{" "}
            <span className="spread-text">Spreads</span> ads
          </h1>
          <p className="spread-second-section-subtitle">
            The cost to advertise is up to you. Select a budget <br />
            that fits your business goals and update it at any time.
          </p>
        </div>
        <div className="spread-second-section-right">
          <div className="spread-second-right-img-container">
            <img
              src={spreadGif}
              alt="AI-Powered Advertisement"
              className="spread-second-right-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="spread-third-section">
        <div className="spread-third-section-left">
          <h1 className="spread-second-section-header">
            Revolutionizing business growth with{" "}
            <span className="spread-text">AI-driven Ads</span>
          </h1>
          <p className="spread-second-section-subtitle">
            Experience intelligent, results-driven advertising. Choose your
            desired budget and scale your business efficiently.
          </p>
        </div>
        <div className="spread-third-section-right">
          <img
            src={revImg1}
            alt="AI-powered Ads"
            className="img-11"
            loading="lazy"
          />
          <img
            src={revImg2}
            alt="AI-powered Marketing Solution"
            className="img-22"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
